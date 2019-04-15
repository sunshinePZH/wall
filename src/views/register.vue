<template>
  <div class="register">
    <div class="register_box">
      <h3>注册</h3>
      <form>
        <div>
          <label>用户名</label>
          <input type="text" placeholder="用户名">
          <p class="username"></p>
        </div>
        <div>
          <label>密码</label>
          <input type="password" placeholder="密码">
          <p class="password"></p>
        </div>
        <div>
          <label>确认密码</label>
          <input type="password" placeholder="确认密码">
          <p class="passwordAgain"></p>
        </div>
        <div>
          <label>邮箱</label>
          <input type="email" placeholder="邮箱">
          <p class="email"></p>
        </div>
        <div>
          <label></label>
          <input type="button" value="注册" class="register_btn">
        </div>
      </form>
      <div class="close" @click="closeTan">
        <i class="iconfont icon-guanbi2"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {};
  },
  methods: {
    closeTan() {
      this.$emit("hanlderRegister", false);
    }
  }
};
</script>
<style lang="postcss">
.register {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  & .register_box {
    width: 380px;
    background-color: #fff;
    padding: 20px 30px 50px 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    & .close {
      position: absolute;
      right: 20px;
      top: 20px;
      & i {
        font-size: 24px;
      }
    }
    & label {
      width: 70px;
      text-align: right;
      margin-top: 10px;
      display: inline-block;
      margin-right: 10px;
    }
    & input {
      width: 300px;
      height: 45px;
      margin-top: 10px;
      box-sizing: border-box;
      padding-left: 10px;
      border: 1px solid #a6a6a6;
    }
    & .register_btn {
      background: red;
      border: none;
      color: #fff;
      cursor: pointer;
    }
    & p{
        height: 20px;
        font-size: 12px;
    }
  }
}
</style>


