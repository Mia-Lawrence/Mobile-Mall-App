<template>
  <transition name="detail">
    <div id="home-detail">
      <detail-topbar/>
      <detail-scroll ref="detail-scroll">
        <div class="detail-swiper">
          <detail-swiper :detailSliderList="detailSwiperList"/>
        </div>
        <loading :text="loadingText" v-if="loaded"/>
        <div class="detail-content" v-else>
          <detail-info :productInfoList="productInfo"/>
          <detail-comment :productCommentList="productComment"/>
          <detail-shop :shopDtetailContent="shopDetail"/>
        </div>
      </detail-scroll>
      <transition name="showup">
        <div class="add-cart-info" v-show="AddCartShow">
          <div class="cart-info-text">已加入购物车</div>
        </div>
      </transition>
      <transition name="showup">
        <div class="add-cart-info" v-show="isFunctionInfo">
          <div class="cart-info-text">暂时只支持购物车</div>
        </div>
      </transition>
      <!-- 为什么要在这里监听呢？ -->
      <detail-footer @addCart="addCart" @withoutFunction="noFunctionInfo"/>
    </div>
  </transition>
</template>

<script>
import detailTopbar from './detail-topbar'
import detailSwiper from './detail-swiper'
import detailInfo from './detail-info'
import detailComment from './detail-comment'
import detailShop from './detail-shop'
import detailFooter from './detail-footer'

import loading from 'components/common/loading'
import detailScroll from 'components/common/scroll/scroll'
import { getProductDetail } from 'network/detail.js'

export default {
  name: 'homeDetail',
  data () {
    return {
      loadingText: '拼命加载中',
      detailSwiperList: [],
      productInfo: {},
      productComment: {},
      shopDetail: {},
      loaded: true,
      AddCartShow: false,
      isFunctionInfo: false
    }
  },
  components: {
    loading,
    detailScroll,
    detailTopbar,
    detailSwiper,
    detailInfo,
    detailComment,
    detailShop,
    detailFooter
  },
  created () {
    this.getDetail()
  },
  methods: {
    // 获取详情页数据
    getDetail () {
      if (!this.$route.params.id) {
        this.$router.push('/home')
        return
      }

      getProductDetail(this.$route.params.id).then(data => {
        if (data) {
          // 获取详情页轮播图数据
          this.detailSwiperList = data.slider

          // 获取详情页商品基本信息
          this.productInfo = data.content

          // 获取详情页评价信息
          this.productComment = data.content.review

          // 获取详情页商家信息
          this.shopDetail = data.content.seller

          this.loaded = false
        }
      })
    },

    // 添加到购物车
    addCart () {
      // 1.创建一个对象，放入购物车需要显示的数据
      const product = {}
      product.seller = this.shopDetail.shopName
      product.image = this.detailSwiperList[0]
      product.title = this.productInfo.title
      product.fee = this.productInfo.postage
      product.id = this.$route.params.id
      // 选取最低价格展示在购物车
      product.price = this.productInfo.priceText.split('-')[0]

      // 2.将数据放入vuex中进行状态管理
      this.$store.commit('addCartList', product)
      // console.log(this.$store.state.cartList)

      // 重新初始化是否全选
      this.$bus.$emit('initSelect')

      // this.$store.commit('AddCartInfo', product)
      this.AddCartShow = true
      setTimeout(() => {
        this.AddCartShow = false
      }, 1500)
    },
    noFunctionInfo () {
      this.isFunctionInfo = true
      setTimeout(() => {
        this.isFunctionInfo = false
      }, 1500)
    }
  }
}
</script>

<style scoped>
#home-detail{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  background-color: #eee;
}

.detail-swiper{
  padding-top: 2.2rem;
}

.detail-content{
  position: relative;
  z-index: 6;
}

.detail-leave-active {
  transition: transform .5s;
}
.detail-leave-to{
  transform: translateX(100%);
}

.detail-slider{
  width: 100%;
  height: 15.5rem;
}

.add-cart-info{
  width: 8rem;
  height: 3.5rem;
  border-radius: .5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -4rem;
  margin-top: -2rem;
  z-index: 6;
  background-color: rgba(0, 0, 0, .8);
}
.cart-info-text{
  color: #fff;
  font-size: .8rem;
  line-height: 3.5rem;
  text-align: center;
}

/* 添加购物车成功提示动画 */
.showup-enter-active {
  animation: bounce-in .5s;
}
.showup-leave-active {
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
