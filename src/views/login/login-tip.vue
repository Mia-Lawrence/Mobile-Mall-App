<template>
  <transition name="tip">
    <div class="enter-tips" v-if="this.$store.state.ifTips">
      <p class="tips-text">{{this.$store.state.tipText}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'loginTip',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.enter-tips{
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  border-radius: .25rem;
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  padding: 0 .5rem;
  background-color: #fff;
}
.tips-text{
  color: #333;
  font-size: .8rem;
  height: 1.5rem;
  white-space: nowrap;
}

.tip-enter-active {
  animation: bounce-in .4s;
}
.tip-leave-active {
  opacity: 0;
  transition: all .5s;
}
@keyframes bounce-in {
  0% {
    transform: translate(-50%, -500%);
  }
  100% {
    transform: translate(-50%, 0);
  }
}
</style>
