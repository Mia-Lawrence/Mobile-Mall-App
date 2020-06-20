<template>
  <div class="product-info">
    <div class="info-bar">
      <span class="info-price"><span>￥</span>{{productInfoList.priceText}}</span>
      <div class="info-sold">
        <span class="sold-number">{{productInfoList.soldCount}}件已售</span>
      </div>
    </div>
    <div class="info-procuct">
      <div class="product-title">{{productInfoList.title || '暂无商品名称' }}</div>
      <div class="product-other">
        <span class="postage">{{productInfoList.postage}}</span>
        <span class="month-sellcount">月售{{sellCount}}件</span>
        <span class="from">{{productInfoList.from}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailInfo',
  data () {
    return {
      loadingText: ''
    }
  },
  props: {
    productInfoList: {
      type: Object
    }
  },
  computed: {
    sellCount () {
      if (this.productInfoList.sellCount !== undefined) {
        return this.productInfoList.sellCount
      } else {
        return 0
      }
    }
  }
}
</script>

<style scoped>
.product-info{
  width: 100%;
  margin-bottom: .5rem;
}

/* 价格和已售条样式 */
.info-bar{
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  background: linear-gradient(to right, #ef3390, #ef3647);
}
.info-price{
  flex: 1;
  color: #fff;
}
.info-sold{
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.sold-number{
  color: #fff;
  font-size: .6rem;
  display: inline-block;
  padding: .25rem;
  background-color:  rgba(42, 43, 42, 0.3);
  border-radius: .25rem;
}
.info-price span{
  font-size: .6rem;
}

/* 商品基本信息样式 */
.info-procuct{
  width: 100%;
  padding: .5rem;
  background-color: #fff;
}
.product-title{
  color: #333;
  font-size: .7rem;
  margin-bottom: .75rem;
}
.product-other{
  color: #999;
  font-size: .6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
