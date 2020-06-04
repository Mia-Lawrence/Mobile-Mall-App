<template>
  <div id="profile">
    <profile-topbar/>
    <profile-scroll class="profile-scroll">
      <profile-content/>
    </profile-scroll>
  </div>
</template>

<script>
// 引入公共组件
import profileScroll from 'components/common/scroll/scroll'

// 引入组件
import profileTopbar from './profile-topbar'
import profileContent from './profile-content'

export default {
  name: 'profile',
  data () {
    return {
    }
  },
  components: {
    profileScroll,
    profileTopbar,
    profileContent
  }
}
</script>

<style scoped>
.profile-scroll{
  width: 100%;
  height: calc(100vh - 4.7rem);
  position: absolute;
  top: 2.2rem;
  left: 0;
  bottom: 2.45rem;
}

#profile{
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
}
</style>
