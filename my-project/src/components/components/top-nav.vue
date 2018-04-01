<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-nav-content" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link :to="{ name: 'Index' }" class="navbar-brand">Online Bookstore</router-link>
      </div>
      <div class="collapse navbar-collapse" id="top-nav-content">
        <ul class="nav navbar-nav">
          <li :class="home">
            <router-link :to="{ name: 'Index' }">
              首页
            </router-link>
          </li>
          <li :class="cart">
            <router-link :to="{ name: 'Cart' }">
              购物车
              <span class="badge">{{ tot }}</span>
            </router-link>
          </li>
          <li :class="personal">
            <a @click="check">
              我的
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'top-nav',
  props: [
    'home',
    'cart',
    'personal'
  ],
  data () {
    var tot = 0
    var buys = []
    if (this.data.LoginId !== '') {
      tot = this.data.UserList[this.data.LoginId].buy.length
      buys = this.data.UserList[this.data.LoginId].buy
    }
    return {
      tot: tot,
      buys: buys
    }
  },
  methods: {
    check () {
      var url = window.location.href
      url = url.substring(0, url.indexOf('#/'))
      if (this.data.LoginId === '') {
        window.location.href = url + '#/login'
      } else {
        window.location.href = url + '#/user/info'
      }
    }
  },
  watch: {
    'buys': {
      handler: function (val, oldval) {
        this.tot = 0
        if (this.data.LoginId !== '') {
          this.tot = this.data.UserList[this.data.LoginId].buy.length
        }
      },
      deep: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-nav li {
  text-align: center;
}
</style>
