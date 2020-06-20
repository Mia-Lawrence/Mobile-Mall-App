<template>
  <div class="cart-product">
    <cart-scroll class="cart-scroll" ref="cartScroll">
      <div class="product-item" v-for="item in cartList" :key="item.index">
        <div class="select-btn">
          <i class="iconfont" :class="{'icon-slect': item.isClick, 'icon-unslected': !item.isClick}" @click="selectProduct(item.id)"></i>
        </div>
        <div class="cart-product-content" @touchstart="gotouchstart(item.id)" @touchmove="gotouchmove" @touchend="gotouchend">
          <div class="product-shop">{{item.seller}}</div>
          <div class="link-to-detail" @click="toDetail(item.id)">
            <div class="product-info">
              <img :src="item.image" class="product-img" @load="scrollRefresh">
              <div class="product-detail">
                <p class="product-name multiline-ellipsis">{{item.title}}</p>
                <p class="delivery-fee">{{item.fee}}</p>
              </div>
            </div>
          </div>
          <div class="product-price-info">
            <p class="product-price">￥{{item.price}}</p>
            <div class="product-number">
              <div class="number-container">
                <span class="number-subtract" @click="subtractCount(item.id, item)">-</span>
                <span class="number-count">{{item.count}}</span>
                <span class="number-add" @click="addCount(item.id)">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </cart-scroll>
    <transition name="zero-info">
      <div class="product-zero-info" v-show="isCountZero">
        <div class="zero-info-text" v-html="zeroInfoText"></div>
      </div>
    </transition>
    <cart-calculate ref="cartCalculateBar"/>
  </div>
</template>

<script>
// 引入公共组件
import cartScroll from 'components/common/scroll/scroll'

// 引入函数
import { debounce } from 'js/debounce'

// 引入子组件
import cartCalculate from './cart-calculate'

export default {
  name: 'cartProduct',
  data () {
    return {
      isCountZero: false,
      zeroInfoText: '数量至少为1哦~<br/>长按/点击管理删除商品',
      timeOutEvent: ''
    }
  },
  components: {
    cartScroll,
    cartCalculate
  },
  activated () {
    // 进入购物车页时，应该再次刷新一次，否则无法滚动
    this.$refs.cartScroll.scrollRefresh()
  },
  computed: {
    cartList () {
      return this.$store.state.cartList
    },
    // 过滤未选中的商品
    falseClick () {
      return this.$store.getters.falseClick
    },
    // 过滤选中的商品
    trueClick () {
      return this.$store.getters.trueClick
    },
    // // scroll包装防抖动函数
    refresh () {
      return debounce(this.$refs.cartScroll.scrollRefresh, 200)
    }
  },
  methods: {
    // 修复better-srcoll的bug
    scrollRefresh () {
      this.refresh()
    },

    // 购物车的产品数量加减按钮
    subtractCount (id, item) {
      const targetProduct = this.$store.state.cartList.find(item => item.id === id)
      // 购物车商品的数量至少为1
      if (targetProduct.count > 1) {
        targetProduct.count--
      } else {
        targetProduct.count = 1
        this.isCountZero = true
        setTimeout(() => {
          this.isCountZero = false
        }, 2000)
        return
      }

      // 当商品数量为0时，删除该商品
      // if (targetProduct.count === 0) {
      //   targetProduct.count = 0
      //   this.$store.commit('removeProduct', item)
      // }

      // 减去商品数量时重新计算总价格和总数量
      this.$refs.cartCalculateBar.caculatePrice()
      this.$refs.cartCalculateBar.caculateCount()
    },
    addCount (id) {
      const targetProduct = this.$store.state.cartList.find(item => item.id === id)
      targetProduct.count++

      // 增加商品数量时重新计算总价格和总数量
      this.$refs.cartCalculateBar.caculatePrice()
      this.$refs.cartCalculateBar.caculateCount()
    },
    selectProduct (id) {
      this.$refs.cartCalculateBar.selectProduct(id)
    },

    // 点击跳转到detail页面
    toDetail (productId) {
      if (this.timeOutEvent !== null) {
        this.$router.push({ name: 'cart-detail', params: { id: productId } })
      }
    },

    // 长按点击事件
    gotouchstart (id) {
      // 清除定时器
      clearTimeout(this.timeOutEvent)
      this.timeOutEvent = setTimeout(() => {
        // 执行长按要执行的内容
        this.timeOutEvent = null
        this.$emit('showDelBtn', id)
      }, 300)
    },
    // 手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    gotouchend (id) {
      clearTimeout(this.timeOutEvent)
    },
    // 如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
    gotouchmove () {
      // 清除定时器
      clearTimeout(this.timeOutEvent)
    }
  }
}
</script>

<style scoped>
.cart-scroll{
  position: absolute;
  top: 2.2rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - .8rem);
  height: calc(100vh - 6.6rem);
}

.cart-product{
  width: 100%;
  height: calc(100vh - 7rem);
  padding: 0 .4rem 1rem .4rem;
}

.product-item{
  font-size: .7rem;
  padding: .7rem;
  margin-bottom: .5rem;
  border-radius: .5rem;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);
  display: flex;
  align-items: center;
  position: relative;
}
.select-btn{
  padding-right: .5rem;
}
.icon-unslected,
.icon-slect{
  font-size: .8rem !important;
}
.icon-slect{
  color: red;
}
.cart-product-content{
  flex: 1;
}

.product-shop{
  color: #333;
  font-weight: bold;
  margin-bottom: .75rem;
  position: relative;
}
.product-info{
  color: #000;
  display: flex;
  align-items: flex-start;
}
.product-img{
  width: 4rem;
  height: 4rem;
}

.product-detail{
  margin-left: .5rem;
}
.product-name{
  font-size: .7rem;
}
.delivery-fee{
  color: #999;
  font-size: .6rem;
  margin-top: .5rem;
}
.product-price-info{
  width: 100%;
  display: flex;
  align-items: center;
}
.product-price,
.product-number{
  flex: 1;
}
.product-price{
  color: red;
  font-size: .8rem;
  font-weight: bold;
}
.product-price::before{
  display: inline-block;
  content: ' ';
  width: 4.5rem;
  height: 100%;
}
.product-number{
  display: flex;
  justify-content: flex-end;
}
.number-container{
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
}
.number-subtract,
.number-add{
  color: #ccc;
  font-size: .8rem;
  width: 1.4rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.number-subtract{
  border-right: 1px solid #ccc;
}
.number-add{
  border-left: 1px solid #ccc;
}
.number-count{
  padding: 0 .5rem;
}

/* 商品数量不能小于0提示样式 */
.product-zero-info{
  width: 8rem;
  position: absolute;
  bottom: 5rem;
  left: 50%;
  margin-left: -4rem;
  z-index: 6;
  text-align: center;
  background-color: #fff;
  border-radius: .4rem;
  padding: .5rem;
}
.zero-info-text{
  font-size: .6rem;
}

.zero-info-enter-active {
  animation: bounce-in .5s;
}
.zero-info-leave-active {
  opacity: 0;
  transition: opacity .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
