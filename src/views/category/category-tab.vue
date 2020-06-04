<template>
  <div class="category-tab">
    <category-scroll class="category-scroll">
      <div class="tab-item"
      :class="{'tab-item-active': isActive === index}"
      v-for="(item, index) in tabItems" :key="item.index"
      @click="switchTab(index,item.id)"
      >
        <p class="tab-name">{{item.name}}</p>
      </div>
    </category-scroll>
  </div>
</template>

<script>
import categoryScroll from 'components/common/scroll/scroll'

import { categoryNames } from './config'

export default {
  name: 'categoryTab',
  data () {
    return {
      tabItems: [],
      isActive: 0,
      activeTab: ''
    }
  },
  components: {
    categoryScroll
  },
  created () {
    this.getTabItems()
    this.switchTab(0, this.tabItems[0].id)
  },
  mounted () {
    this.switchTab(0, this.tabItems[0].id)
  },
  methods: {
    getTabItems () {
      this.tabItems = categoryNames
    },
    switchTab (index, id) {
      this.isActive = index
      this.$bus.$emit('switch-tab', id)
    }
  }
}
</script>

<style scoped>
.category-scroll{
  width: 4rem !important;
  height: calc(100vh - 4.7rem);
}

.category-tab{
  width: 4rem;
  height: 100%;
  border: 1px solid #eee;
  padding-top: 2.2rem;
  position: relative;
  z-index: 3;
}
.tab-item{
  width: 4rem;
  padding: .5rem;
  text-align: center;
  font-size: .7rem;
  font-weight: bold;
  border-bottom: 1px solid #999;
}
.tab-item-active{
  color: #f23030;
  background-color: #f6f6f6;
}
</style>
