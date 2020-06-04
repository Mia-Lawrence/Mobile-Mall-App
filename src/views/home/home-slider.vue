<template>
<!-- 轮播图区 -->
<div class="home-slider">
  <slider
    :data="sliders"
  >
    <loading :text="loadingText"/>
    <swiper-slide
        v-for="(item, index) in sliders"
        :key="index"
      >
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-slide>
  </slider>
  <!-- 推荐区 -->
  <ul class="home-recommend">
    <li class="recommend-list" v-for="item in recommend" :key="item.id">
      <a :href="item.link">
        <img v-lazy="item.image">
      </a>
    </li>
  </ul>
</div>
</template>

<script>
import loading from 'components/common/loading'
import slider from 'components/common/swiper'
import { getHomeMultiList } from 'network/home'
import { sliderList } from './detail/slider'

export default {
  name: 'homeSlider',
  components: {
    loading,
    slider
  },
  data () {
    return {
      loadingText: '拼命加载中',
      sliders: [],
      recommend: []
    }
  },
  created () {
    this.getHomeBanner()
  },
  methods: {
    getHomeBanner () {
      return getHomeMultiList().then(res => {
        if (!res) {
          this.sliders = sliderList
        } else {
          this.sliders = res.banner.list
        }
        this.recommend = res.recommend.list
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
/* 轮播图样式 */
.swiper-container{
  width: 100%;
  max-width: 22rem;
  min-width: 16rem;
  height: 10rem;
  overflow: hidden;
}
.swiper-slide a,
.swiper-slide img{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.swiper-pagination-bullet{
  display: inline-block;
  width: .4rem;
  height: .4rem;
  border-radius: 50%;
  margin: 0 .2rem !important;
}

/* 推荐区样式 */
.home-recommend{
  display: flex;
  justify-content: space-between;
  padding: .75rem;
}
.recommend-list{
  width: 22%;
  font-size: 0;
}
.recommend-list img,
.recommend-list a{
  display: inline-block;
  width: 100%;
  height: auto;
}
</style>
