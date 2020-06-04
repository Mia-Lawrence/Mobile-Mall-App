<template>
  <div class="detail-footer">
      <div class="left-btn" @click="noFunctionInfo">
        <i class="iconfont icon-shop" slot="item-icon"></i>
        <div slot="item-text" class="left-text">店铺</div>
      </div>
      <div class="left-btn" @click="noFunctionInfo">
        <i class="iconfont icon-service" slot="item-icon"></i>
        <div slot="item-text" class="left-text">客服</div>
      </div>
      <div class="left-btn" @click="noFunctionInfo">
        <i class="iconfont icon-collect" slot="item-icon"></i>
        <div slot="item-text" class="left-text">收藏</div>
      </div>
      <div class="right-btn cart-btn" @click="addToCart">
        <div slot="item-text" class="btn-text">加入购物车</div>
      </div>
      <div class="right-btn buy-btn" @click="noFunctionInfo">
        <div slot="item-text" class="btn-text">马上抢</div>
      </div>
</div>
</template>

<script>
export default {
  name: 'mainTabbar',
  methods: {
    addToCart () {
      this.$emit('addCart')
    },
    noFunctionInfo () {
      this.$emit('withoutFunction')
    }
  }
}
</script>

<style scoped>
.detail-footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 22rem;
  min-width: 16rem;
  height: 2.45rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 -3px 2px rgba(0, 0, 0, .1);
  z-index: 3;
}

.left-btn{
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.right-btn{
  width: 100%;
  height: 100%;
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart-btn{
  background-color: #ff9500;
}
.buy-btn{
  background-color: #ff0036;
}
.btn-text{
  color: #fff;
  font-size: .7rem;
}
.iconfont{
  font-size: 1.1rem;
}
.left-text{
  font-size: .6rem;
  margin-top: 2px;
}
</style>
