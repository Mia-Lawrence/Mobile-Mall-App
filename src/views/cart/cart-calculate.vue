<template>
  <div class="calculate-bar">
      <div class="select-all" @click="selectAllProduct(cartList)">
        <i class="iconfont"
        :class="{'icon-slect': isAllClick, 'icon-unslected': !isAllClick}"></i>
        <span class="select-all-text">全选</span>
      </div>
      <div class="calculate-all" v-if="manageBtn">
        <span class="total-price">合计:&nbsp;￥{{totalPrice}}</span>
        <div class="pay-money">去结算({{totalCount}})</div>
      </div>
      <div class="manage-all" v-else>
        <div class="delete-all" @click="deleteAllProduct">清空</div>
        <div class="delete" @click="deleteSelectProduct">删除</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cartCalculate',
  data () {
    return {
      // totalPrice: 0,
      // totalCount: 0,
      manageBtn: true
    }
  },
  created () {
    this.selectInit(this.cartList)
    this.caculatePrice()
    this.$bus.$on('initSelect', () => {
      this.selectInit(this.cartList)
    })
    this.$bus.$on('manageCart', () => {
      this.manageBtn = !this.manageBtn
    })
  },
  mounted () {
    this.$bus.$on('syncCalculate', () => {
      this.selectInit()
      this.caculatePrice()
      this.caculateCount()
    })
  },
  computed: {
    cartList () {
      return this.$store.state.cartList
    },
    isAllClick: {
      get () {
        return this.$store.state.isAllClick
      },
      set (val) {
        this.$store.state.isAllClick = val
      }
    },
    // 过滤未选中的商品
    falseClick () {
      return this.$store.getters.falseClick
    },
    // 过滤选中的商品
    trueClick () {
      return this.$store.getters.trueClick
    },
    totalCount: {
      get () {
        return this.$store.state.totalCount
      },
      set (val) {
        this.$store.state.totalCount = val
      }
    },
    totalPrice: {
      get () {
        return this.$store.state.totalPrice
      },
      set (val) {
        this.$store.state.totalPrice = val
      }
    }
  },
  methods: {
    // 购物车选中/全选按钮
    // 选中/不选中初始化
    selectInit () {
      if (this.falseClick.length !== 0 || this.cartList.length === 0) {
        this.isAllClick = false
      } else {
        this.isAllClick = true
      }
    },
    // 选中和不选择商品的切换
    selectProduct (id) {
      const targetProduct = this.cartList.find(item => item.id === id)
      targetProduct.isClick = !targetProduct.isClick
      this.selectInit(this.cartList)

      // 选择单个商品时重新计算总价格和总数量
      this.caculatePrice()
      this.caculateCount()
    },
    // 选中和不选中所有商品的切换
    selectAllProduct (cartList) {
      this.selectInit(cartList)

      // 判断选中/未选中的商品和商品的总长度是否一致
      // 如果一致，说明本身是全选/全不选，此时应该进行反选
      if (this.falseClick.length === cartList.length || this.trueClick.length === cartList.length) {
        cartList.forEach(element => {
          element.isClick = !element.isClick
          if (element.isClick) {
            this.isAllClick = true
          } else {
            this.isAllClick = false
          }
        })
      } else {
        cartList.forEach(element => {
          if (element.isClick === false) {
            element.isClick = true
            this.isAllClick = true
          }
        })
      }

      // 全选时重新计算总价格和总数量
      this.caculatePrice()
      this.caculateCount()
    },

    // 计算商品总价格
    caculatePrice () {
      const arr = []
      if (this.trueClick.length !== 0) {
        this.trueClick.forEach(item => {
          const onePrice = item.count * item.price
          arr.push(parseFloat(onePrice))
        })
        const totalPrice = arr.reduce((prev, curr) => {
          return prev + curr
        })
        // 使用tofixed解决相加后小数点很多位的问题，并且只在存在小数点的情况下保留一位，整数不保留一位
        if (totalPrice.toString().indexOf('.') >= 0) {
          this.totalPrice = totalPrice.toFixed(1)
        } else {
          this.totalPrice = totalPrice
        }
      } else {
        this.totalPrice = 0
      }
    },
    caculateCount () {
      const countArr = []
      this.trueClick.forEach(item => {
        const oneCount = item.count
        countArr.push(parseFloat(oneCount))
      })
      if (countArr.length !== 0) {
        const totalCount = countArr.reduce((prev, curr) => {
          return prev + curr
        })
        this.totalCount = totalCount
      } else {
        this.totalCount = 0
      }
    },

    // 管理购物车商品
    // 删除全部商品
    deleteAllProduct () {
      this.$store.commit('deleteAllProduct')
      this.selectInit(this.cartList)

      // 删除后重新计算总价格和总数量
      this.caculatePrice()
      this.caculateCount()
    },
    // 删除选中的商品
    deleteSelectProduct () {
      this.$store.commit('deleteSelectProduct')
      this.selectInit(this.cartList)

      // 删除后重新计算总价格和总数量
      this.caculatePrice()
      this.caculateCount()
    }
  }
}
</script>

<style scoped>
/* 底部计算结算栏 */
.calculate-bar{
  width: 100%;
  height: 2rem;
  max-width: 22rem;
  min-width: 16rem;
  position: absolute;
  bottom: 2.45rem;
  left: 0;
  font-size: .7rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #999;
}
.select-all{
  width: 3rem;
  margin-left: 1rem;
}
.select-all i{
  color: red;
  font-size: .8rem;
  margin-right: .25rem;
}
.calculate-all{
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.total-price{
  color: red;
  display: flex;
  align-items: center;
  margin-right: .5rem;
}
.pay-money{
  width: 4rem;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #de1818;
}

.manage-all{
  font-size: .65rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.delete{
  width: 2rem;
  height: 1.2rem;
  color: red;
  line-height: 1.2rem;
  text-align: center;
  border-radius: .6rem;
  margin: 0 1rem;
  border: 1px solid red;
}
</style>
