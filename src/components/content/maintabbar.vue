<template>
  <tabbar>
      <tabbar-item path="/home">
        <i class="iconfont icon-home" slot="item-icon"></i>
        <div slot="item-text" class="tabbar-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <i class="iconfont icon-category" slot="item-icon"></i>
        <div slot="item-text" class="tabbar-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <i class="iconfont icon-cart" slot="item-icon"></i>
        <div slot="item-text" class="tabbar-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <i class="iconfont icon-profile" slot="item-icon"></i>
        <div slot="item-text" class="tabbar-text">我的</div>
      </tabbar-item>
    </tabbar>
</template>

<script>

import tabbar from '../common/tabbar/tabbar'
import tabbarItem from '../common/tabbar/tabbar-item'

export default {
  name: 'mainTabbar',
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style scoped>
.tabbar-text{
  margin-top: 5px;
}
.iconfont{
  font-size: 1rem !important;
}
</style>
