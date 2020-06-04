<template>
  <div class="mine-loading" :class="{'mine-loading-inline': inline}">
    <span class="mine-loading-indicator" v-if="indicator==='on'">
      <slot><img src="./loading.gif" alt="loading" :style="{'width': imgWidth,'height': imgHeight}"></slot>
    </span>
    <span class="mine-loading-text" :style="{'fontSize': fSize}" v-if="loadingText">{{loadingText}}</span>
  </div>
</template>

<script>
export default {
  name: 'MeLoading',
  props: {
    indicator: {
      type: String,
      default: 'on',
      validator (value) {
        return ['on', 'off'].indexOf(value) > -1
      }
    },
    text: {
      type: String,
      default: '加载中...'
    },
    inline: {
      type: Boolean,
      default: false
    },
    fSize: {
      type: String,
      default: '.7rem'
    },
    imgHeight: String,
    imgWidth: String
  },
  data () {
    return {
      loadingText: this.text
    }
  },
  watch: {
    text (text) {
      this.loadingText = text
    }
  },
  methods: {
    setText (text = this.text) {
      this.loadingText = text
    }
  }
}
</script>

<style scoped>
.mine-loading {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mine-loading-inline {
  flex-direction: row;
}
.mine-loading-indicator ~ .mine-loading-text {
    margin-top: 0;
    margin-left: 6px;
}
.mine-loading-indicator ~ .mine-loading-text {
  margin-top: 6px;
}
.mine-loading-text{
  font-size: .7rem;
}
</style>
