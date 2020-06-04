<template>
  <div class="home-hotsale">
    <div class="hotsale-title">
      <p class="hotsale-text">热卖推荐</p>
    </div>
    <div class="hotsale-content">
      <div class="content-list" v-for="(item, index) in hotSaleList" :key="index">
        <router-link :to="{name: 'home-detail', params: {id: item.baseinfo.itemId} }">
          <img v-lazy="item.baseinfo.picUrlNew" class="content-image" @load="imageLoad">
          <p class="content-name text-ellipsis">{{item.name.shortName}}</p>
          <p class="content-oriprice">¥{{item.price.origPrice}}</p>
          <p class="content-detail">
            <span class="detail-price">¥{{item.price.actPrice}}</span>
            <span class="detail-sellnum">{{item.remind.soldCount}}已售</span>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getHomeRecommend } from 'network/home'

export default {
  name: 'homeHotsale',
  data () {
    return {
      hotSaleList: [],
      curPage: 1,
      totalPage: 1
    }
  },
  created () {
    this.getRecommend()
  },
  methods: {
    // update () {
    //   return this.getRecommend()
    // },
    getRecommend () {
      // 如果当前页数大于总页数，就不再向服务器请求数据
      if (this.curpage > this.totalPage) {
        return
      }
      // 注意这里要返回数据 这里传curPage更方便，直接改动curPage就可以变了
      return getHomeRecommend(this.curPage).then(data => {
        if (data) {
          // console.log(data.itemList)
          this.curPage++
          this.totalPage = data.totalPage

          // 热卖推荐数据每次获取20条，应该是累加的
          this.hotSaleList = this.hotSaleList.concat(data.itemList)
        }
      })
    },
    imageLoad () {
      // $bus发布事件imageLoadFinsh
      this.$bus.$emit('imageLoadFinsh')
    }
  }
}
</script>

<style scoped>
.pull-up{
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  font-size: .8rem;
}

.home-hotsale{
  width: 100%;
  height: auto;
  background-color: rgba(204, 204, 204, .2);
}
/* 热卖区标题样式 */
.hotsale-title{
  width: 100%;
  height: 1.5rem;
  text-align: center;
}
.hotsale-text{
  color: #333;
  line-height: 1.5rem;
  font-size: .7rem;
  position: relative;
}
.hotsale-text::before,
.hotsale-text::after{
  content: ' ';
  display: block;
  width: 30%;
  height: 1px;
  background-color: #333;
  position: absolute;
  top: 50%;
}
.hotsale-text::before{
  left: 0;
}
.hotsale-text::after{
  right: 0;
}

/* 热卖区内容样式 */
.hotsale-content{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content-list{
  font-size: .6rem;
  display: inline-block;
  width: 49%;
  background-color: #fff;
  margin-bottom: .5rem;
  box-shadow: 0 2px 2px 0 #eee;
  position: relative;
  z-index: 3;
}
.content-image{
  width: 100%;
}
.content-name{
  font-size: .65rem;
  padding: .5rem .5rem .5rem .5rem;
}
.content-oriprice{
  color: rgb(202, 195, 195);
  text-decoration: line-through;
  padding: 0 .5rem;
}
.content-detail{
  display: flex;
  align-items: center;
  padding: .3rem .5rem
}
.detail-price{
  flex: 1;
  color: red;
  font-size: .9rem;
}
.detail-sellnum{
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
</style>
