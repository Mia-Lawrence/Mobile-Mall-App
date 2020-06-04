<template>
  <div class="profile-content">
    <div class="profile-login">
      <img src="~./user-img.jpg" class="login-image">
      <p class="login-text">
        <span class="register">注册</span>
        <span>&nbsp;|&nbsp;</span>
        <span class="login">登录</span>
      </p>
    </div>
    <div class="profile-order">
      <p class="my-order">
        <i class="order-icon iconfont icon-order"></i>
        <span class="order-title">我的订单</span>
        <span class="order-text">查看我的全部订单&nbsp;></span>
      </p>
      <div class="order-task">
          <div class="order-item">
            <i class="order-icon iconfont icon-pay"></i>
            <p class="order-task-text">待付款</p>
          </div>
          <div class="order-item">
            <i class="order-icon iconfont icon-receive"></i>
            <p class="order-task-text">待收货</p>
          </div>
          <div class="order-item">
            <i class="order-icon iconfont icon-comment"></i>
            <p class="order-task-text">待评价</p>
          </div>
          <div class="order-item">
            <i class="order-icon iconfont icon-backgood"></i>
            <p class="order-task-text">退货/退款</p>
          </div>
      </div>
    </div>
    <div class="profile-help">
      <div class="profile-help-item">
        <i class="iconfont icon-reservice"></i>
        <p class="profile-help-text">售后服务</p>
        <i class="more-icon"></i>
      </div>
      <div class="profile-help-item">
        <i class="iconfont icon-opinion"></i>
        <p class="profile-help-text">意见反馈</p>
        <i class="more-icon"></i>
      </div>
      <div class="profile-help-item">
        <i class="iconfont icon-address"></i>
        <p class="profile-help-text">收货地址</p>
        <i class="more-icon"></i>
      </div>
      <div class="profile-help-item">
        <i class="iconfont icon-outlogin"></i>
        <p class="profile-help-text">退出登录</p>
        <i class="more-icon"></i>
      </div>
    </div>
    <p class="service-tel">客服热线：123456789</p>
  </div>
</template>

<script>
export default {
  name: 'profileContent',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.profile-content{
  font-size: .7rem;
}

.profile-login{
  width: 100%;
  height: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-bottom: .75rem;
}
.login-image{
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}
.login-text{
  color: #000;
  font-size: .8rem;
  font-weight: bold;
  margin-top: .75rem;
}

.profile-order{
  background-color: #fff;
  margin-bottom: .75rem;
}
.my-order{
  width: 100%;
  height: 1.5rem;
  font-size: .8rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #999;
}
.order-title{
  flex: 1;
  color: #000;
  margin-left: .5rem;
}
.order-text{
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-size: .6rem;
}

.order-task{
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: .5rem;
  padding: 1rem .5rem;
}
.order-item{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.order-task-text{
  margin-top: .4rem;
}

.profile-help{
  background-color: #fff;
}
.profile-help-item{
  display: flex;
  align-items: center;
  padding: .6rem .5rem;
  border-bottom: 1px solid #999;
}
.profile-help-item:last-child{
  border-bottom: none;
}
.profile-help-text{
  margin-left: .5rem;
}
.more-icon{
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.service-tel{
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}
</style>
