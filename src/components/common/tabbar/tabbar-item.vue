<template>
    <li class="tabbar-item" @click="routerChange">
      <div class="item-icon" :style="colorStyle" :class="{'icon-active':isActive}">
        <slot name="item-icon"></slot>
      </div>
      <div class="item-text" :style="colorStyle" :class="{'text-active':isActive}">
        <slot name="item-text"></slot>
      </div>
    </li>
</template>

<script>
export default {
  name: 'tabbarItem',
  props: {
    path: {
      type: String
    },
    activecolor: {
      type: String,
      default: 'rgb(236, 57, 51)'
    }
  },
  methods: {
    routerChange () {
      // router-link的功能实现
      if (this.$route.path !== this.path) {
        this.$router.replace(this.path)
      }
    }
  },
  computed: {
    isActive () {
      // 判断当前活跃路由是否包含传入的path
      // 如果是，那么当前的path为活跃，其他的path都为不活跃
      return this.$route.path.indexOf(this.path) !== -1
    },
    colorStyle () {
      // 进行判断，如果当前为活跃状态时更改颜色为传进来的颜色
      return this.isActive ? { color: this.activecolor } : {}
    }
  }
}
</script>

<style scoped>
.tabbar-item{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.item-text{
  color: #333;
  font-size: .6rem;
}
</style>
