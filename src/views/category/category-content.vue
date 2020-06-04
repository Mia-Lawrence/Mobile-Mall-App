<template>
<div class="category-left-content">
  <div class="category-loading" v-show="loaded">
    <category-loading class="loading" :imgWidth="imgWidth" :imgHeight="imgHeight"/>
  </div>
  <keep-alive>
    <div class="category-content">
      <category-scroll class="category-scroll" ref="scroll">
        <div class="category-banner">
          <a :href="bannerList.linkUrl" class="banner-link">
            <img :src="bannerList.picUrl" class="banner-image">
          </a>
        </div>
        <div class="category-part">
          <div class="part-item-container" v-for="item in titleList" :key="item.id">
            <p class="part-item-title">{{item.name}}</p>
            <div class="part-item">
              <div class="part-item-content" v-for="content in item.itemList" :key="content.id">
                <img v-lazy="content.picUrl" class="part-item-img" @load="scrollRefresh">
                <p class="part-item-text text-ellipsis">{{content.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </category-scroll>
    </div>
  </keep-alive>
</div>

</template>

<script>
import categoryScroll from 'components/common/scroll/scroll'
import categoryLoading from 'components/common/loading'

import { getCategoryContent } from 'network/category'
import storage from 'network/storage'
import { CATEGORY_CONTENT_KEY, CATEGORY_CONTENT_UPDATE_TIME_INTERVAL } from './config'

export default {
  name: 'categoryContent',
  data () {
    return {
      bannerList: {},
      titleList: [],
      contentList: [],
      loaded: false,
      imgWidth: '1rem',
      imgHeight: '.5rem'
    }
  },
  components: {
    categoryScroll,
    categoryLoading
  },
  created () {
    this.getTabId()
  },
  methods: {
    getTabId () {
      this.$bus.$on('switch-tab', (id) => {
        // 点击tab后加载中图标出现
        this.loaded = true
        this.getContent(id).then(() => {
          // 数据加载之后消失
          this.loaded = false
          // 每次点击tab后，页面都回到最顶部
          this.backTop(0)
        })
      })
    },
    // 需求：第一次向服务器请求数据，在规定的时间间隔内使用缓存获取分类页的数据，超过时间间隔重新向服务器请求数据
    getContent (id) {
      // 1.在storage中自定义一个对象，之后相关的数据都会存放进这个对象中
      const contents = storage.get(CATEGORY_CONTENT_KEY)
      const curTime = new Date().getTime()
      let updateTime
      // 2.如果已经存在这个对象并且存在当前id的对象，判断现在的时间距离上次更新的时间，有没有超过规定的时间间隔。
      if (contents && contents[id]) {
        updateTime = contents[id].updateTime || 0
        // 2.1如果没有超过，就直接调用缓存的数据
        if ((curTime - updateTime) <= CATEGORY_CONTENT_UPDATE_TIME_INTERVAL) {
          // console.log('------')
          return this.getContentByLocalStorage(contents[id])
        // 2.2如果超过了，重新请求数据
        } else {
          // console.log('++++++')
          return this.getContentByHttp(id).then(res => {
            this.updateLocalStorage(contents, res, id, curTime)
          })
        }
      // 3.如果不存在当前id的对象，新创建一个放进去
      } else {
        // console.log('~~~~~')
        return this.getContentByHttp(id).then(res => {
          this.updateLocalStorage(contents, res, id, curTime)
        })
      }
    },
    getContentByHttp (id) {
      return getCategoryContent(id).then(data => {
        return new Promise(resolve => {
          if (data) {
            // 获取分类页banner图数据
            this.bannerList = data.banner

            // 获取分类页内容数据
            this.titleList = data.data

            resolve(data)
          }
        })
      })
    },
    getContentByLocalStorage (content) {
      this.bannerList = content.data.banner
      this.titleList = content.data.data

      // 上面要链式调用，所有要返回Promise
      return Promise.resolve()
    },
    updateLocalStorage (contents, data, id, curTime) {
      contents = contents || {}
      // 一开始contents不存在内容，要将内容设置进contents中，并赋值给CATEGORY_CONTENT_KEY，这样就可以在缓存中调用了
      contents[id] = { data: data, updateTime: curTime }
      storage.set(CATEGORY_CONTENT_KEY, contents)
    },
    scrollRefresh () {
      this.$refs.scroll.scrollRefresh()
    },
    backTop (y) {
      // scrollTo返回指定坐标位置
      this.$refs.scroll.scrollTo(0, y)
    }
  }
}
</script>

<style scoped>
.category-scroll{
  position: absolute;
  top: 2.8rem;
  left: 4rem;
  padding: .5rem;
  width: calc(100vw - 4rem);
  height: calc(100vh - 5.5rem);
  min-width: 12rem;
  max-width: 18rem;
}
.category-loading{
  width: calc(100vw - 4rem);
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 3;
  background-color: #f6f6f6;
}
.loading{
  width: 6rem;
  height: 4rem;
  color: #fff;
  padding: .5rem;
  border-radius: .25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, .5);
}

.category-left-content{
  width: 100%;
  height: 100%;
}
.category-content{
  width: 100%;
  height: 100%;
  flex: 1;
}
.category-banner{
  width: 100%;
  height: 5rem;
}
.banner-link,
.banner-image{
  display: inline-block;
  width: 100%;
  height: 100%;
}

.category-part{
  margin-top: 1rem;
}
.part-item-container{
  margin-bottom: 1rem;
}
.part-item-title{
  color: #333;
  font-size: .7rem;
  font-weight: bold;
}
.part-item{
  display: flex;
  flex-wrap: wrap;
  margin-top: .5rem;
  background-color: #fff;
}
.part-item-content{
  width: 33.333%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5rem 1rem;
}
.part-item-link,
.part-item-img{
  width: 100%;
  height: 100%;
}
.part-item-text{
  font-size: .6rem;
  height: 100%;
  line-height: 1.1;
  display: flex;
  align-items: center;
  margin-top: .5rem;
}
</style>
