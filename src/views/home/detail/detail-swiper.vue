<template>
  <slider :data="detailSliderList">
    <loading :text="loadingText"/>
    <swiper-slide v-for="item in detailSliderList" :key="item.id">
      <img :src="item" alt="">
    </swiper-slide>
  </slider>
</template>

<script>
import loading from 'components/common/loading'
import slider from 'components/common/swiper'

export default {
  name: 'dSwiper',
  data () {
    return {
      loadingText: '拼命加载中',
      loaded: false
    }
  },
  props: {
    detailSliderList: {
      default: []
    }
  },
  components: {
    loading,
    slider
  }
}
</script>

<style scoped>
.swiper-container{
  height: 15.5rem;
}
</style>
