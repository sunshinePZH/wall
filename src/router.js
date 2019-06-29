import Vue from 'vue'
import Router from 'vue-router'

// 路由

import Home from '@//views/home.vue';
import Products from '@/views/products.vue';



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    }
  ]
})
