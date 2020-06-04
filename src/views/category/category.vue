<template>
  <div id="category">
    <category-topbar/>
    <div class="category-contaner">
      <div class="category-tab-container">
        <category-tab/>
      </div>
      <div class="category-content-container">
        <category-content/>
      </div>
    </div>
  </div>
</template>

<script>
// import { getCategoryContent } from 'network/category'

import categoryTopbar from './category-topbar'
import categoryTab from './category-tab'
import categoryContent from './category-content'

export default {
  name: 'category',
  data () {
    return {
    }
  },
  components: {
    categoryTopbar,
    categoryTab,
    categoryContent
  }
}
</script>

<style scoped>
#category{
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
}
.category-contaner{
  width: 100%;
  height: 100%;
  display: flex;
}
.category-tab-container{
  width: 4rem;
  background-color: #fff;
}
.category-content-container{
  flex: 1;
}
</style>
