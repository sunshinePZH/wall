<template>
  <div class="register">
    <div class="register_box">
      <h3>注册</h3>
      <form>
        <div>
          <label>用户名</label>
          <input type="text" placeholder="用户名" v-model="username" @blur="checkUserName">
          <p><span  v-show="!isNameOk">{{usernameText }}</span></p>
        </div>
        <div>
          <label>密码</label>
          <input type="password" placeholder="密码" v-model="password" @blur="checkPassword">
          <p><span v-show="!isPasswordOk">{{passwordText}} </span></p>
        </div>
        <div>
          <label>确认密码</label>
          <input type="password" placeholder="确认密码" v-model="passwordAgin" @blur="chenkPasswordAagin">
          <p><span v-show="!isPasswordAginOk">{{passwordAginText}} </span></p>
        </div>
        <div>
          <label>邮箱</label>
          <input type="email" placeholder="邮箱" v-model="email" @blur="CheckEmail">
          <p><span v-show="!isEmailOk">{{emailText}}</span></p>
        </div>
        <div>
          <label></label>
          <input type="button" value="注册" class="register_btn" @click="isRegisterHanlder">
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
    return {
      isNameOk:true,
      isPasswordOk:true,
      isPasswordAginOk:true,
      isEmailOk:true,
      username:"",
      password:"",
      passwordAgin:"",
      email:"",
      usernameText:"",
      passwordText:"",
      passwordAginText:"",
      emailText:"",
      isRegister:[false,false,false,false]
    };
  },
  methods: {
    closeTan() {
      this.$emit("hanlderRegister", false);
    },
    checkUserName(){
      var pattern=/^[a-zA-Z0-9\_\@\.]{4,16}$/;
      this.username==""?this.usernameText="请输入用户名":this.usernameText="用户名必须是4到16位字母，数字或下划线或者邮箱";
      this.isNameOk=pattern.test(this.username);
      this.isRegister[0]=pattern.test(this.username);
    },
    checkPassword(){
      var pattern=/^(\w){6,20}$/;
      this.password==""?this.passwordText="请输入密码":this.passwordText="密码只能输入6-20个字母、数字、下划线";
      this.isPasswordOk=pattern.test(this.password);
      this.isRegister[1]=pattern.test(this.password);
    },
    chenkPasswordAagin(){
      if(this.passwordAgin==""){
        this.passwordAginText="请输入确认密码";
        this.isPasswordAginOk=false;
        this.isRegister[2]=false;
      }else if(this.password!==this.passwordAgin){
        this.passwordAginText="两次输入的密码不一致";
        this.isPasswordAginOk=false;
        this.isRegister[2]=false;
      }else{
        this.isPasswordAginOk=true;
        this.isRegister[2]=true;
      }
    },
    CheckEmail(){
      var pattern=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
      this.email==""?this.emailText="邮箱不能为空":this.emailText="邮箱格式不正确";
      this.isEmailOk=pattern.test(this.email);
      this.isRegister[3]=pattern.test(this.email);

    },
    isRegisterHanlder(){
      console.log(this.isRegister,this.isRegister.indexOf("false"))
      if(this.isRegister.indexOf(false) !==-1){
        alert("请完善信息！")
      }else{
        alert("注册成功！")
      }
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
  z-index: 99999;
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
    & h3{
      margin-bottom: 20px;
    }
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
      /* margin-top: 10px; */
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
        height: 30px;
        font-size: 12px;
        color:red;
        line-height: 30px;
        margin-left: 80px;
    }
  }
}
</style>


