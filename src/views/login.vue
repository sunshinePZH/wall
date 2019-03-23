<template>
    <div class="login">
        <div class="login_box">
            <h3>登录</h3>
            <input type="text" placeholder="请输入用户名">
            <input type="password" placeholder="请输入密码">
            <input type="button" value="登录" class="login_btn">
            <span>免费注册</span>
            <span>忘记密码</span>
            <i class="iconfont icon-guanbi2"></i>
        </div>
    </div>
</template>
<script>
export default {
    name:"login",
    data(){
        return {

        }
    }
}
</script>

<style lang="postcss">

.login{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    & .login_box{
        width: 350px;
        background-color:#fff;
        padding:20px;
        position: fixed;
        top:50%;
        left: 50%;
        transform:translate(-50%,-50%);
        -webkit-transform:translate(-50%,-50%);
        -moz-transform:translate(-50%,-50%);
        -ms-transform:translate(-50%,-50%);
        -o-transform:translate(-50%,-50%);
        & input{
            width: 100%;
            height: 45px;
            margin-top: 20px;
            box-sizing: border-box;
            padding-left: 10px;
        }
        & .login_btn{
            background: red;
            border:none;
            color: #fff;
            cursor: pointer;
        }
        & span{
            float: right;
            color:#6c6c6c;
            font-size: 12px;
            margin-left: 5px;
            margin-top: 10px;
        }
    }
}
</style>

