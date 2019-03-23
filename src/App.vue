<template>
  <div id="app">
    <div class="top">
      <div class="top_inner clearfloat">
        <p>大橙子墙布</p>
        <div class="setbox">
          <ul>
            <li><a href="#">登录</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">个人中心</a></li>
          </ul>
        </div>
      </div>
      <div class="nav">
        <ul class="clearfloat">
          <li><a href="#">主页</a></li>
          <li><a href="#">推荐</a></li>
          <li><a href="#">新品</a></li>
          <li><a href="#">分类</a></li>
          <li><a href="#">简介</a></li>
        </ul>
      </div>
    </div>
    <!-- <div id="nav">
      <ul></ul>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <div class="main">
      <Home/>
    </div>

    <div class="footer">
      <p>大橙子公司版权所有</p>
    </div>
     <Login/>
  </div>
  
</template>
<script>
import Home from "@/views/home.vue"
import Login from "@/views/login.vue"
export default {
  data(){
    return {

    }
  },
  components:{
    Home,
    Login
  }
}
</script>

<style lang="postcss">

*{
  margin:0;
  padding: 0;
}

a{
  text-decoration: none;
}
li{
  list-style: none;
}
/*清除浮动代码*/
.clearfloat:after{
  display:block;
  clear:both;content:"";
  visibility:hidden;
  height:0;
  }
.clearfloat{zoom:1}
.top{
  padding-top:10px;
  & a{
    color: #ccc;
  }
  & .top_inner{
    width: 80%;
    margin:0 auto;
    line-height: 32px;
    & p{
      float: left;
      font-size:28px;
      margin-left:20px;
    }
    & .setbox{
      float: right;
      & li{
        float: left;
        & a{
          display: inline-block;
          padding: 0 5px;
        }
      }
    }

  }
  & .nav{
    background: #333;
    margin-top:20px;
    & ul{
      width: 80%;
      margin:0 auto;
    }
    & li{
      float: left;
      & a{
        display: inline-block;
        padding: 20px;
        color: #9d9d9d;
      }
      & a:hover{
        color:white;
      }
    }
  }
}
.footer p{
  text-align: center;
  color: #333;
  margin-top: 30px;
  background: #f5f5f5;
  padding: 20px 0;
}

</style>


