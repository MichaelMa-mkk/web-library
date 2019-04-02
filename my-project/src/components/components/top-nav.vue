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
              <span class="badge">{{ mytot }}</span>
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
    'personal',
    'tot'
  ],
  data () {
    var buys = []
    var mytot = 0
    if (this.data.LoginUser.id !== null) {
      mytot = this.data.LoginUser.cart.length
      buys = this.data.LoginUser.cart
    }
    return {
      mytot: isNaN(this.tot) ? mytot : this.tot,
      buys: buys
    }
  },
  methods: {
    check () {
      var url = window.location.href
      url = url.substring(0, url.indexOf('#/'))
      if (this.data.LoginUser.id === null) {
        window.location.href = url + '#/login'
      } else {
        window.location.href = url + '#/user/info'
      }
    }
  },
  watch: {
    'buys': {
      handler: function (val, oldval) {
        this.mytot = 0
        if (this.data.LoginUser.id !== null) {
          this.mytot = this.data.LoginUser.cart.length
        }
      },
      deep: true
    },
    'tot': {
      handler: function (val, oldval) {
        this.mytot = isNaN(val) ? this.mytot : val
      }
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
