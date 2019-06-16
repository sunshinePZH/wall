<template>
  <div class="login">
    <div class="login_box">
      <h3>登录</h3>
      <form>
        <input type="text" placeholder="请输入用户名">
        <input type="password" placeholder="请输入密码">
        <input type="button" value="登录" class="login_btn">
      </form>
      <span>免费注册</span>
      <span>忘记密码</span>
      <div class="close" @click="closeTan">
        <i class="iconfont icon-guanbi2"></i>
      </div>
      <div class="other_login">
          <i class="iconfont icon-qq"></i>
          <i class="iconfont icon-weixin"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    closeTan: function() {
      this.$emit("hanlderLogin", false);
    }
  }
};
</script>

<style lang="postcss">
.login {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  & .login_box {
    width: 350px;
    background-color: #fff;
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    & input {
      width: 100%;
      height: 45px;
      margin-top: 20px;
      box-sizing: border-box;
      padding-left: 10px;
    }
    & .login_btn {
      background: red;
      border: none;
      color: #fff;
      cursor: pointer;
    }
    & span {
      float: right;
      color: #6c6c6c;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 10px;
    }
    & .close {
      position: absolute;
      right: 20px;
      top: 20px;
      & i {
        font-size: 24px;
      }
    }
    & .other_login{
      clear: both;
      text-align: center;
      & i{
        font-size: 40px;
        margin:20px 10px;
      }
      & .icon-qq{
        color: rgb(94, 170, 222);
      }
      & .icon-weixin{
        color: #62b900;
      }
    }
  }
}
</style>

