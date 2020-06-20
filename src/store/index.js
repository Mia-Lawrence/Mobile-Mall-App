import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 购物车相关状态
    cartList: [],
    isCartListEmpty: true,
    isAllClick: false,
    totalCount: 0,
    totalPrice: 0,

    // 登录相关状态
    loginInfo: {
      admin: { userName: 'admin', passWord: '123456' }
    },
    ifTips: false,
    tipText: '',
    loginName: ''
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
    // 购物车商品数量增加
    addCount (state, payload) {
      payload.count += 1
    },
    // 购物车添加新商品
    addToCart (state, payload) {
      state.cartList.unshift(payload)
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
    },
    // 增加用户
    setUser (state, payload) {
      state.loginInfo[payload.userName] = { userName: payload.userName, passWord: payload.passWord }
    },
    changeIfTips (state, val) {
      state.ifTips = val
    },
    changeTipText (state, val) {
      state.tipText = val
    },
    changeLoginName (state, name) {
      state.loginName = name
    }
  },
  actions: {
    // 通过actions拆分购物车函数，一个用来检测数量的增加，一个用来检测添加购物车的操作
    addCartList (context, payload) {
      // 根据id判断传入的产品是否已经在cartlist中
      // 如果已经存在只需要数量加1，如果不存在，应该添加整个对象，并将数量设为1

      // 找到id相同的产品，分别进行存在和不存在的操作
      const oldProduct = context.state.cartList.find(item => item.id === payload.id)

      // 如果不存在就创建一个属性count为1，并且将数据放进cartList；如果存在只让count加1
      if (oldProduct) {
        context.commit('addCount', oldProduct)
      } else {
        payload.count = 1
        payload.isClick = false
        context.commit('addToCart', payload)
      }

      // 购物车是否为空
      context.state.isCartListEmpty = false
    }
  }
})
