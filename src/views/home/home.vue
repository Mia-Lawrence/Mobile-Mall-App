<template>
<div>
  <div id="home">
    <home-topbar/>
    <scroll ref="scroll"
    :pullup="true"
    :pulldown="true"
    @scrollToEnd="loadUp"
    @pulldown="loadDown"
    >
      <div class="home-content">
        <home-slider/>
        <home-hotsale ref="childHotsale"/>
      </div>
    </scroll>
    <!-- 注意这里使用v-show!! 如果使用v-if没有进入的动画 v-if移除了整个元素,在添加元素之前动画已经生效了 -->
    <home-backtop v-show="backtopShow"/>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
// 引用的公共组件
import scroll from 'components/common/scroll/scroll'

// 引用的子组件
import homeTopbar from './home-topbar'
import homeSlider from './home-slider'
import homeHotsale from './home-hotsale'
import homeBacktop from './home-backtop'

// 引用函数
import { debounce } from 'js/debounce'

export default {
  name: 'home',
  data () {
    return {
      backtopShow: false,
      curPosition: 0,
      pullingDownText: '下拉刷新',
      isPullingDown: false
      // isShow: true
    }
  },
  components: {
    scroll,
    homeTopbar,
    homeSlider,
    homeHotsale,
    homeBacktop
  },
  mounted () {
    // 在外面包装一层防抖函数再调用 目的是优化性能 不让scroll多次刷新
    const refresh = debounce(this.$refs.scroll.scrollRefresh)

    // $bus监听事件imageLoadFinsh，事件一旦触发就会执行回调函数
    this.$bus.$on('imageLoadFinsh', () => {
      // this.$refs.scroll.scrollRefresh()
      refresh()
    })
    // 调用回到顶部函数
    this.showBacktop()
  },
  activated () {
    // 状态被激活时调用scroll
    this.onscroll()
  },
  deactivated () {
    // 4.删除储存的位置，为下一次的新位置做准备，否则会一直跳转到一个位置
    if (window.sessionStorage.getItem('curStorage')) {
      window.sessionStorage.removeItem('curStorage')
    }
  },
  beforeRouteLeave (to, from, next) {
    // 2.在离开之前调用onscroll，记录停留的位置，否则position.y会变成0
    this.onscroll()
    // 3.在未激活的时候调用scrollTo跳转至储存的位置
    if (window.sessionStorage.getItem('curStorage')) {
      this.$refs.scroll.scrollTo(0, window.sessionStorage.getItem('curStorage'))
    }
    next()
  },
  methods: {
    // 上拉刷新产品
    loadDown (pos) {
      // console.log(pos)
      // 清空之前的推荐产品列表
      this.$refs.childHotsale.hotSaleList = []

      // 调用子元素中的getRecommend方法
      this.$refs.childHotsale.getRecommend()
      setTimeout(() => {
        this.$bus.$emit('pullrefresh.finishLoad')
      }, 1000)
    },
    // 下拉加载更多产品
    loadUp () {
      // 调用子元素中的getRecommend方法获取数据
      this.$refs.childHotsale.getRecommend()
    },

    showBacktop () {
      this.$refs.scroll.bscroll.on('scroll', (position) => {
        // console.log(position.y)
        if (position.y < -1000) {
          this.backtopShow = true
        } else {
          this.backtopShow = false
        }
      })
    },
    backTop () {
      // scrollTo返回指定坐标位置
      this.$refs.scroll.scrollTo(0, 0)
    },
    // 首页滚动后，切换到其他页面回来，仍然停留在刚才浏览的位置
    // 1.箭头scroll事件，将position.y储存在sessionStorage中
    onscroll () {
      this.$refs.scroll.bscroll.on('scroll', (position) => {
        if (position) {
          this.curPosition = position.y
          window.sessionStorage.setItem('curStorage', this.curPosition)
        }
      })
    }
  }
}
</script>

<style scoped>
#home{
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 2;
}
.home-content{
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
}

/* 下拉刷新提示样式 */
.pull-down{
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  color: #333;
  font-size: .8rem;
}
/* .pull-down-enter-active, .pull-down-leave-active {
  transition: all .5s;
}
.pull-down-enter, .pull-down-leave-to{
  opacity: 0;
  transform: translateY(3rem);
} */
</style>
