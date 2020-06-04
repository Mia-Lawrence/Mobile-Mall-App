<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <!-- 下拉刷新 -->
    <div v-if="pulldown" class="pulldown">
      <div class="clear" v-if="pullDownTip.showLoding">
        <!-- <div class="clear-left"><img width="30" src="assets/img/loading.svg"></div> -->
        <div class="clear-right">{{pullDownTip.text}}</div>
      </div>
    </div>
    <!-- 滚动内容插槽 -->
    <slot></slot>
    <!-- 下拉加载 -->
    <div v-if="pullup" class="pullup">
      <div class="clear" v-if="!isDone">
        <div class="clear-left"><loading-svg/></div>
        <div class="clear-right">加载中.....</div>
      </div>
      <div class="list-donetip" v-if="!isLoading && isDone">
          <slot name="doneTip">没有更多数据了</slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import LoadingSvg from '@/svg/loading'

export default {
  name: 'scroll',
  data () {
    return {
      bscroll: null,
      pullDownTip: {
        text: '下拉刷新',
        // translate: -50,
        showLoding: false
      },
      isLoading: false,
      isDone: false
    }
  },
  components: {
    LoadingSvg
  },
  props: {
    // 是否派发滚动到底部的事件，用于上拉加载
    pullup: {
      type: Boolean,
      default: false
    },
    // 是否派发顶部下拉的事件，用于下拉刷新
    pulldown: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    // 创建better-scroll实例
    this.bscroll = new BScroll(this.$refs.wrapper, { click: true, pullUpLoad: true, pullDownRefresh: true, probeType: 3 })
    this.initScroll()
  },
  methods: {
    // 封装一个refresh方法
    scrollRefresh () {
      this.bscroll && this.bscroll.refresh()
    },
    // 封装一个scrollTo方法
    scrollTo (x, y, time = 500) {
      this.bscroll && this.bscroll.scrollTo(x, y, time)
    },
    initScroll () {
      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.bscroll.on('scrollEnd', () => {
          if (this.bscroll.y <= (this.bscroll.maxScrollY + 50)) {
            // 所有数据加载完毕后
            this.$bus.$on('infinitescroll.loadedDone', () => {
              this.isLoading = false
              this.isDone = true
            })
            // 单次请求数据加载完毕后
            this.$bus.$on('infinitescroll.finishLoad', (ret) => {
              this.isLoading = false
            })
            // 重新初始化
            this.$bus.$on('infinitescroll.reInit', () => {
              this.isLoading = false
              this.isDone = false
            })
            this.$emit('scrollToEnd')
          }
        })
      }
      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.bscroll.on('scroll', (pos) => {
          // 显示下拉刷新loding
          this.pullDownTip.showLoding = true
          // 隐藏底部加载loding
          this.isLoading = false
          if (pos.y <= 50) {
            this.pullDownTip.text = '释放刷新'
          }
        })
        this.bscroll.on('touchEnd', (pos) => {
          if (pos.y > 100) {
            // this.pullDownTip.translate = 0
            this.pullDownTip.text = '刷新成功'
            // 重新初始化
            this.$on('pullrefresh.finishLoad', this.resetParams)
            this.$emit('pulldown', pos)
          }
        })
      }
    },
    resetParams () {
      setTimeout(() => {
        this.isLoading = false
        this.isDone = false
        this.dragTip = {
          text: '下拉刷新',
          // translate: -50,
          showLoding: false
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
.wrapper{
  width: 100%;
  /* 动态计算高度值 也可以使用absolute 设置top bottom的值 让内容自动撑开 */
  height: calc(100vh - 2.2rem);
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
.pulldown{
  height: 2.2rem;
}
.clear{
  width: 100%;
  height: 2.5rem;
  font-size: .7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-top: .5rem; */
}
.clear-left{
  display: flex;
  align-items: center;
  margin-right: .25rem;
}
.list-donetip{
  font-size: .7rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
}
</style>
