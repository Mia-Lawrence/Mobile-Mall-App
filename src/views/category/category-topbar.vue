<template>
  <topbar :title="title" :backColor="backColor" :color="color"></topbar>
</template>

<script>
import topbar from 'components/common/topbar/topbar'

export default {
  name: 'categoryTopbar',
  data () {
    return {
      title: '分类',
      color: '#fff',
      backColor: 'rgb(222, 24, 27)'
    }
  },
  components: {
    topbar
  }
}
</script>
