<template>
  <div class="enter-back">
    <div class="enter-cover">
      <div class="enter-container">
        <div class="enter-top">
          <div class="login-change"
          :class="{active: isLogin === 1}"
          @click="switchTab(1)">登录</div>
          <div class="register-change"
          :class="{active: isLogin === 2}"
          @click="switchTab(2)">注册</div>
        </div>
        <div class="enter-content">
          <div class="login-content" v-if="isLogin === 1">
            <div class="login-name">
              <input type="text" placeholder="请输入您的用户名"
              v-model="loginName"
              ref="userName">
            </div>
            <div class="login-password">
              <input type="password" placeholder="请输入您的密码"
              v-model="loginPwd"
              ref="userPaw">
            </div>
            <div class="login-btn" @click="loginIn">登录</div>
          </div>
          <div class="register-content" v-else>
            <div class="register-name">
              <input type="text" placeholder="请设置您的用户名" ref="setName">
            </div>
            <div class="register-password">
              <input type="password" placeholder="请设置您的密码" ref="setPwd">
            </div>
            <div class="register-btn" @click="setInfo">注册</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      isLogin: 1
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.loginInfo
    },
    loginName: {
      get () {
        return this.userInfo.admin.userName
      },
      set (val) {
        this.$refs.userName.value = val
      }
    },
    loginPwd: {
      get () {
        return this.userInfo.admin.passWord
      },
      set (val) {
        this.$refs.userPaw.value = val
      }
    }
  },
  methods: {
    switchTab (index) {
      this.isLogin = index
    },
    loginIn () {
      this.$store.commit('changeIfTips', true)
      if (this.$refs.userName.value && this.$refs.userPaw.value) {
        if (this.userInfo[this.$refs.userName.value]) {
          if (this.userInfo[this.$refs.userName.value].passWord === this.$refs.userPaw.value) {
            this.$router.replace('/home')
            this.$store.commit('changeTipText', '登录成功')
            // 将用户名储存到vuex
            this.$store.commit('changeLoginName', this.$refs.userName.value)
          } else {
            this.$store.commit('changeTipText', '密码错误')
          }
        } else {
          this.$store.commit('changeTipText', '用户名或密码错误')
        }
        setTimeout(() => {
          this.$store.commit('changeIfTips', false)
        }, 2000)
      } else {
        this.$store.commit('changeTipText', '请输入用户名和密码')
      }
    },
    setInfo () {
      this.$store.commit('changeIfTips', true)
      const nameVal = this.$refs.setName.value
      const pawVal = this.$refs.setPwd.value
      if (this.userInfo[nameVal]) {
        this.$store.commit('changeTipText', '已经注册过啦，请直接登录')
        this.isLogin = 1
      } else {
        const payload = { userName: nameVal, passWord: pawVal }
        if (payload.userName && payload.passWord) {
          this.$store.commit('setUser', payload)
          this.$store.commit('changeTipText', '注册成功，请登录')
          this.isLogin = 1
        } else {
          this.$store.commit('changeTipText', '请输入用户名和密码')
        }
      }
      setTimeout(() => {
        this.$store.commit('changeIfTips', false)
      }, 2000)
    }
  }
}
</script>

<style scoped>
.enter-back{
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 4;
}
.enter-cover{
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .3);
}
.enter-container{
  width: 12.5rem;
  height: 10rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -5rem;
  margin-left: -6.25rem;
  background-color: #fff;
}
.enter-top{
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
}
.login-change,
.register-change{
  line-height: 2.5rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid #eee;
}
.login-change.active::after,
.register-change.active::after{
  content: ' ';
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  background-color: orange;
}
.login-content,
.register-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: .75rem;
}
.login-name,
.login-password,
.register-name,
.register-password{
  width: 10rem;
  height: 1.4rem;
  font-size: .7rem;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #999;
  margin-top: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  font-size: .6rem;
  color: #999;
}
::-moz-placeholder { /* Firefox 19+ */
  font-size: .6rem;
  color: #999;
}
:-ms-input-placeholder { /* IE 10+ */
  font-size: .6rem;
  color: #999;
}
:-moz-placeholder { /* Firefox 18- */
  font-size: .6rem;
  color: #999;
}
.login-name input,
.login-password input,
.register-name input,
.register-password input{
  width: 10rem;
  height: 1.4rem;
  line-height: 1.4rem;
  background: none;
  outline: none;
  border: none;
}
.login-btn,
.register-btn{
  color: #fff;
  width: 4rem;
  height: 1.5rem;
  font-size: .7rem;
  line-height: 1.5rem;
  text-align: center;
  margin-top: .75rem;
  border-radius: 5px;
}
.login-btn{
  background-color: #0099ff;
}
.register-btn{
  background-color: #ff9966;
}
</style>
