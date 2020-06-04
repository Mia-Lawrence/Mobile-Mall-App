<template>
  <ul id="tabbar" :style="{'backgroundColor': backColor}">
      <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'tabbar',
  props: {
    backColor: {
      type: String,
      default: '#f6f6f6'
    }
  }
}
</script>

<style scoped>
#tabbar{
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 22rem;
  min-width: 16rem;
  height: 2.45rem;
  display: flex;
  align-items: center;
  box-shadow: 0 -3px 2px rgba(0, 0, 0, .1);
  z-index: 3;
}
</style>
