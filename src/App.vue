<template>
  <div id="app" class="g-container">
    <keep-alive exclude="homeDetail,cart">
      <router-view/>
    </keep-alive>
    <main-tabbar/>
  </div>
</template>

<script>
import mainTabbar from 'components/content/maintabbar'
export default {
  name: 'App',
  components: {
    mainTabbar
  },
  created () {
    // vuex数据的缓存，刷新后不消失

    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }

    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }
}
</script>
