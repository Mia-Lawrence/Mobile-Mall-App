<template>
  <div class="cart-topbar">
    <topbar>
      <div class="cart-left-text" slot="left">{{topbarLeftText}}</div>
      <div slot="center"></div>
      <div class="cart-right-text" slot="right" @click="manageCartBtn">{{topbarRightText}}</div>
    </topbar>
  </div>
</template>

<script>
import topbar from 'components/common/topbar/topbar'

export default {
  name: 'cartTopbar',
  data () {
    return {
      topbarLeftText: '购物车',
      topbarRightText: '管理'
    }
  },
  components: {
    topbar
  },
  methods: {
    manageCartBtn () {
      this.$bus.$emit('manageCart')
    }
  }
}
</script>

<style scoped>
.cart-topbar{
  width: 100%;
  height: 2.2rem;
}
.cart-left-text{
  color: #000;
  font-size: .8rem;
  font-weight: bold;
}
.cart-right-text{
  font-size: .7rem;
}
</style>
