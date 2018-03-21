import Vue from 'vue'
import Router from 'vue-router'

import GoodList from './Good/GoodList'
import GoodDetail from './Good/GoodDetail'
import User from './User/User'
import Register from '@/components/User/Register'
import Login from '@/components/User/Login'
import Message from '@/components/User/Message'
import UserView from '@/components/User/InfoView'
import Search from '@/components/Good/Search'

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
    ...GoodDetail,
    User,
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
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/userview/:id',
      name: 'UserView',
      component: UserView
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
