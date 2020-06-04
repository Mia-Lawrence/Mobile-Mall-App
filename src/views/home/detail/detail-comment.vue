<template>
  <div class="product-comment">
    <div class="comment-title">商品评价&nbsp;({{productCommentList.totalCount}})</div>
    <div class="comment-keyword">
      <div class="keyword-item" v-for="item in productCommentList.keywords" :key="item.id">
        <span class="keyword-text">{{item.word}}</span>
        <span class="keyword-number">({{item.count}})</span>
      </div>
    </div>
    <div class="comment-content">
      <div class="comment-item" v-for="item in productCommentList.rateList" :key="item.id">
        <div class="custom-info">
          <img :src="item.headPic" class="custon-pic">
          <span class="custom-name">{{item.userName}}</span>
        </div>
        <div class="comment-content">
          <div class="comment-text">{{item.content}}</div>
          <div class="comment-info">
            <span class="comment-date">{{item.dateTime}}</span>
            <span class="comment-product">{{item.skuInfo}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailComment',
  data () {
    return {
    }
  },
  props: {
    productCommentList: Object
  }
}
</script>

<style scoped>
.product-comment{
  padding: .5rem;
  background-color: #fff;
  margin-bottom: .5rem;
}
.comment-title{
  font-size: .8rem;
  margin-bottom: .75rem;
}

/* 评论标签 */
.comment-keyword{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: .75rem;
}
.keyword-item{
  flex-shrink: 0;
  color: #666;
  font-size: .6rem;
  padding: .4rem;
  border-radius: .4rem;
  background-color: #fee;
  margin-right: .75rem;
  margin-bottom: .5rem;
}

/* 评论内容 */
.comment-content{
  width: 100%;
}
.comment-item{
  margin-bottom: .75rem;
}
.comment-item .custom-info{
  display: flex;
  align-items: center;
}
.comment-item .custon-pic{
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: .5rem;
}
.comment-item .custom-name{
  font-size: .6rem;
}
.comment-content{
  margin-top: .5rem;
}
.comment-text{
  color: #333;
  font-size: .6rem;
  line-height: 1.4;
}
.comment-info{
  color: #999;
  line-height: 1.5;
  font-size: .6rem;
  margin-top: .2rem;
}
.comment-date{
  margin-right: .5rem;
}
</style>
