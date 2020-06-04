<template>
  <div>
    <mine-topbar :title="topTitle">
    </mine-topbar>
  </div>
</template>

<script>
import mineTopbar from 'components/common/topbar/topbar'

export default {
  name: 'meTopbar',
  data () {
    return {
      topTitle: '购物街'
    }
  },
  components: {
    mineTopbar
  }
}
</script>

<style scoped>
</style>
