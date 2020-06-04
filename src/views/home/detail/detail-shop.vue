<template>
  <div class="product-shop">
    <div class="shop-info">
      <img :src="shopDtetailContent.shopIcon" class="shop-img">
      <div class="shop-title">
        <div class="shop-name">{{shopDtetailContent.shopName}}</div>
        <img :src="shopDtetailContent.creditLevelIcon" class="shop-icon">
      </div>
    </div>
    <div class="shop-evaluates">
      <div class="evaluates-item" v-for="item in shopDtetailContent.evaluates" :key="item.id">
        <span class="evaluate-title">{{item.title}}</span>
        <span class="evaluate-score">{{item.score}}</span>
        <span class="evaluate-level">{{item.levelText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailShop',
  data () {
    return {
    }
  },
  props: {
    shopDtetailContent: Object
  }
}
</script>

<style scoped>
.product-shop{
  background-color: #fff;
  padding: .75rem .5rem;
}
.shop-img{
  width: 3rem;
  height: 3rem;
  border: 1px solid #333;
  margin-right: .5rem;
}
.shop-info{
  color: #000;
  font-size: .8rem;
  display: flex;
  align-items: center;
}
.shop-name{
  margin-bottom: .25rem;
}
.shop-icon{
  width: 1.5rem;
  height: .7rem;
}

.shop-evaluates{
  color: #999;
  font-size: .6rem;
  margin-top: .75rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.evaluates-item{
  flex: 1;
  display: flex;
  justify-content: space-around;
  margin-right: 1.25rem;
}
.evaluates-item:last-child{
  margin-right: 0;
}
</style>
