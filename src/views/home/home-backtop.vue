<template>
  <transition name="fade">
    <div class="backtop" @click="backtop">
      <i class="iconfont icon-backtop"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'homeBacktop',
  data () {
    return {
    }
  },
  methods: {
    backtop () {
      this.$parent.backTop()
    }
  }
}
</script>

<style scoped>
.backtop{
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  bottom: 3.2rem;
  right: .7rem;
  z-index: 3;
  background-color: #eee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-backtop{
  font-size: 1.8rem !important;
  margin-top: .3rem;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to{
  transform: translateX(3.2rem);
}
</style>
