<template>
  <div id="nav-bar" :style="{'backgroundColor': backColor}">
    <div class="nav-left" v-if="$slots.left"><slot name="left"></slot></div>
    <div class="nav-center" v-if="$slots.center"><slot name="center"></slot></div>
    <div class="nav-right" v-if="$slots.right"><slot name="right"></slot></div>
    <h1 class="nav-title" v-if="title" :style="{'color': color, 'fontSize': fSize, 'fontWeight':fWeight}">
      <span class="nav-text text-ellipsis" v-text="title"></span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: {
      type: String,
      default: ''
    },
    backColor: {
      type: String,
      default: '#f6f6f6'
    },
    color: {
      type: String,
      default: '#333'
    },
    fSize: {
      type: String,
      default: '.8rem'
    },
    fWeight: {
      type: String,
      default: 'bold'
    }
  }
}
</script>

<style scoped>
#nav-bar {
  position: relative;
  z-index: 5;
  display: flex;
  height: 2.2rem;
  line-height: 2.2rem;
  text-align: center;
}
.nav-left {
  width: 3rem;
}
.nav-center {
  flex: 1;
}
.nav-right {
  width: 3rem;
}
.nav-title {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20%;
  right: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-text {
  width: 100%;
  text-align: center;
  line-height: 1.5;
}
</style>
