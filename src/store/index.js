import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
    isCartListEmpty: true,
    isAllClick: false,
    totalCount: 0,
    totalPrice: 0
  },
  getters: {
    // 过滤未选中的商品
    falseClick (state) {
      return state.cartList.filter(item => item.isClick === false)
    },
    // 过滤选中的商品
    trueClick (state) {
      return state.cartList.filter(item => item.isClick === true)
    }
  },
  mutations: {
    // 购物车函数
    addCartList (state, payload) {
      // 根据id判断传入的产品是否已经在cartlist中
      // 如果已经存在只需要数量加1，如果不存在，应该添加整个对象，并将数量设为1

      // 找到id相同的产品，分别进行存在和不存在的操作
      const oldProduct = state.cartList.find(item => item.id === payload.id)

      // 如果不存在就创建一个属性count为1，并且将数据放进cartList；如果存在只让count加1
      if (oldProduct) {
        oldProduct.count += 1
      } else {
        payload.count = 1
        payload.isClick = false
        state.cartList.unshift(payload)
      }

      // 购物车是否为空
      state.isCartListEmpty = false
    },
    // removeProduct (state, payload) {
    //   if (payload.count === 0) {
    //     // 当数量等于零的时候删除该产品
    //     const num = state.cartList.indexOf(payload)
    //     state.cartList.splice(num, 1)
    //   }
    // },

    // 清空购物车
    deleteAllProduct (state) {
      state.cartList = []
      state.isCartListEmpty = true
    },
    // 删除选中商品
    deleteSelectProduct (state) {
      const unSelected = state.cartList.filter(item => item.isClick === false)
      state.cartList = unSelected
      if (unSelected.length === 0) {
        state.isCartListEmpty = true
      }
    },
    // 长按删除商品
    longPressDel (state, id) {
      const unLongPress = state.cartList.filter(item => item.id !== id)
      state.cartList = unLongPress
    }
  },
  actions: {
  },
  modules: {
  }
})
