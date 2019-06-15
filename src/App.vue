<template>
  <div id="app">
    <!-- 顶部导航 -->
    <div class="top" :class="{navbg:isNavBg}">
      <div class="top_inner clearfloat">
        <p class="logo">大橙子墙布</p>
        <div class="nav">
          <ul>
            <li>
              <a href="javascript:;" @click="hanlderLogin(true)">
                <i class="iconfont icon-denglu"></i>
              </a>
            </li>
            <!-- <li><a href="#" @click="hanlderRegister(true)">注册</a></li> -->
            <li>
              <a href="javascript:;" @click="navShowOrHide(true)">
                <i class="iconfont icon-zhedie"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 导航下拉菜单 -->
    <div class="nav_list" :class="{navchange:isNavShow}">
      <a href="javascript:;" class="nav_close" @click="navShowOrHide(false)">
        <i class="iconfont icon-guanbi2"></i>
      </a>
      <div class="nav_link">
        <ul class="clearfloat">
          <li>
            <a href="#">主页</a>
          </li>
          <!-- <li>
            <a href="#">推荐</a>
          </li> -->
          <li>
            <a href="#">新品</a>
          </li>
          <li>
            <a href="#">分类</a>
          </li>
          <li>
            <a href="#">关于我们</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 中间内容 -->
    <Home/>
    <!-- <div id="nav">
      <ul></ul>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <!-- 尾部 -->
    <div class="footer">
      <p>大橙子公司版权所有</p>
    </div>
    <Login v-if="isLogin" @hanlderLogin="hanlderLogin"/>
    <Register v-if="isRegister" @hanlderRegister="hanlderRegister"/>
  </div>
</template>
<script>
import Home from "@/views/home.vue";
import Login from "@/views/login.vue";
import Register from "@/views/register.vue";
export default {
  data() {
    return {
      isLogin: false,
      isRegister: false,
      isNavBg: false,
      isNavShow: false
    };
  },
  components: {
    Home,
    Login,
    Register
  },
  mounted() {
    window.addEventListener("scroll", this.handlerScroll);
  },
  methods: {
    hanlderLogin: function(bool) {
      this.isLogin = bool;
    },
    hanlderRegister: function(bool) {
      this.isRegister = bool;
    },
    handlerScroll: function() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 10) {
        this.isNavBg = true;
      } else {
        this.isNavBg = false;
      }
    },
    navShowOrHide: function(bool) {
      this.isNavShow = bool;
    }
  }
};
</script>

<style lang="postcss">
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
li {
  list-style: none;
}
/*清除浮动代码*/
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.clearfloat {
  zoom: 1;
}
.top {
  /* padding-top:10px; */
  width: 100%;
  padding: 20px 30px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 999;
  & .logo {
    float: left;
    color: #fff;
  }
  & .nav {
    float: right;
    & li {
      float: left;
      margin-right: 10px;
      & a {
        color: #fff;
        & i {
          font-size: 28px;
        }
      }
    }
  }
}
.nav_list {
  background: #333;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999;
  top: -100%;
  transition: top 0.5s;
 
  & .nav_close {
    color: #fff;
    position: absolute;
    right: 30px;
    top: 20px;
    transform: rotate(0deg);
    transition:transform .5s;
    & i {
      font-size: 30px;
    }
  }
  & .nav_close:hover{
    transform: rotate(360deg)
  }
  & .nav_link{
    text-align: center;
    margin-top:20%;
    & a{
      color:#ccbba3;
      font-size:22px;
      line-height:36px;
      font-family:"宋体";
    }
  }
}
.navchange {
  top: 0%;
}
.footer p {
  text-align: center;
  color: #333;
  margin-top: 30px;
  background: #f5f5f5;
  padding: 20px 0;
}
.navbg {
  background: rgba(255, 255, 255, 0.9);
  & .logo {
    color: #333;
  }
  & .nav li i {
    color: #333;
  }
}
</style>


