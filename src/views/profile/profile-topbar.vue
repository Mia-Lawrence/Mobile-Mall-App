<template>
  <div class="profile-topbar">
    <topbar>
      <div slot="left"></div>
      <div slot="center">
        <p class="topbar-title">{{profileTopbarText}}</p>
      </div>
      <div class="topbar-right" slot="right">
        <i class="iconfont icon-setting"></i>
      </div>
    </topbar>
  </div>
</template>

<script>
import topbar from 'components/common/topbar/topbar'

export default {
  name: 'profileTopbar',
  data () {
    return {
      profileTopbarText: '我的'
    }
  },
  components: {
    topbar
  }
}
</script>

<style scoped>
.profile-topbar{
  border-bottom: 1px solid #999;
}
.topbar-title{
  font-size: .8rem;
  font-weight: bold;
}
.icon-setting{
  font-size: 1rem !important;
}
</style>
