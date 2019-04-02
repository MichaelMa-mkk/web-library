import Vue from 'vue'
import Router from 'vue-router'

import GoodList from './Good/GoodList'
import GoodDetail from './Good/GoodDetail'
import User from './User/User'
import Admin from './Admin/Admin'
import Register from '@/components/User/Register'
import Login from '@/components/User/Login'
import Cart from '@/components/User/Cart'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  /* mode: 'history', // 可以去掉url中的"#/" */
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: {
        name: 'GoodIndex'
      }
    },
    GoodList,
    GoodDetail,
    User,
    ...Admin,
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    }
  ]
})
