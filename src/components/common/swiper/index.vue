<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'meSwiper',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return [
          'horizontal',
          'vertical'
        ].indexOf(value) > -1
      }
    },
    interval: {
      type: Number,
      default: 3000,
      validator (value) {
        return value >= 0
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.swiperOption = {
        watchOverflow: true, // 只有1个slide（非loop），swiper会失效且隐藏导航等
        direction: this.direction,
        autoplay: this.interval ? {
          delay: this.interval,
          disableOnInteraction: false
        } : false,
        slidesPerView: 1, // 设置slider容器能够同时显示的slides数量
        loop: this.data.length <= 1 ? false : this.loop,
        pagination: {
          el: this.pagination ? '.swiper-pagination' : null
        },
        // 解决了swiper切换页面，在其他页面操作后回来页面不滚动的问题
        observer: true,
        observeParents: true
      }
    }
  }
}
</script>
