import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from './swiper'
import VueLazyload from 'vue-lazyload'
import fastClick from 'fastclick'

import '@/js/rem.js'
import 'assets/css/index.css'

// 使用fastclick解决移动端300ms延迟问题
fastClick.attach(document.body)

Vue.prototype.$bus = new Vue()

Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  attempt: 1
})

Vue.config.productionTip = false

// 设置事件总线$bus
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  VueAwesomeSwiper,
  render: h => h(App)
}).$mount('#app')
