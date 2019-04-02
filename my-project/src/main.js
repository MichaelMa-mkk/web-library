// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.min.js'

import data from '@/store/data'

Vue.config.productionTip = false

let axiosIns = axios.create({
  baseURL: '/',
  /* eslint-disable */
  baseURL: '/api/'
})
Vue.prototype.$http = axiosIns

Vue.prototype.data = data

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
