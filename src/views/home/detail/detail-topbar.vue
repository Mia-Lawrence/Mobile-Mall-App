<template>
<div class="detail-topbar">
  <topbar :title="topTitle" :backColor="bcolor" :color="color" :fWeight="weight">
    <div class="detail-topbar-left" slot="left" @click="backToHome">
      <i class="iconfont icon-back"></i>
    </div>
    <div class="detail-topbar-center" slot="center"></div>
    <div class="detail-topbar-right" slot="right">
      <i class="iconfont icon-msg"></i>
    </div>
  </topbar>
</div>
</template>

<script>
import topbar from 'components/common/topbar/topbar'

export default {
  name: 'detailTopbar',
  data () {
    return {
      topTitle: '商品详情',
      bcolor: 'rgb(222, 24, 27)',
      color: '#fff',
      weight: 'normal'
    }
  },
  components: {
    topbar
  },
  methods: {
    backToHome () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.icon-back,
.icon-msg{
  font-size: 1rem !important;
  color: #fff;
}
</style>
