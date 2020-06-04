<template>
  <div id="cart">
    <cart-topbar/>
    <div class="cart-text" v-if="isCartListEmpty">{{CartListEmptyText}}</div>
    <cart-product @showDelBtn="showDelBtn"/>
    <transition name="fade">
      <div class="delete-btn-cover" v-show="isDeleteHtml" @click="canLongPressItem">
        <div class="confirm-delete-btn">
          <div class="confirm-text">确认要删除吗？</div>
          <div class="confrim-btn">
            <div class="cancel-btn" @click="canLongPressItem">取消</div>
            <div class="delete-btn" @click="delLongPressItem">删除</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import cartTopbar from './cart-topbar'
import cartProduct from './cart-product'

export default {
  name: 'cart',
  data () {
    return {
      CartListEmptyText: '在详情页可以添加商品到购物车哦~',
      isDeleteHtml: false,
      delProductId: 0
    }
  },
  computed: {
    isCartListEmpty () {
      return this.$store.state.isCartListEmpty
    }
  },
  components: {
    cartTopbar,
    cartProduct
  },
  methods: {
    showDelBtn (id) {
      this.isDeleteHtml = true
      this.delProductId = id
    },
    delLongPressItem () {
      this.isDeleteHtml = false
      this.$store.commit('longPressDel', this.delProductId)
      this.$bus.$emit('syncCalculate', this.delProductId)
    },
    canLongPressItem () {
      this.isDeleteHtml = false
    }
  }
}
</script>

<style scoped>
#cart{
  width: 100%;
  height: 100vh;
  padding: 0 .5rem;
  position: relative;
  background-color: #f6f6f6;
  padding-bottom: 5rem;
}
.cart-text{
  width: 100%;
  height: 100%;
  font-size: .8rem;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 长按弹出的是否删除按钮 */
.delete-btn-cover{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  background-color: rgba(0, 0, 0, .5);
}
.confirm-delete-btn{
  width: 10rem;
  height: 5rem;
  font-size: .8rem;
  border-radius: .5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -2.5rem;
  margin-left: -5rem;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
}
.confirm-text{
  width: 100%;
  height: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 1rem;
}
.confrim-btn{
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
}
.cancel-btn,
.delete-btn{
  width: 50%;
  display: flex;
  justify-content: center;
}
.delete-btn{
  color: red;
}
/* 长按弹出的是否删除按钮动画样式 */
.fade-enter-active, .fade-leave-active{
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
