<template>
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li :class="home"><router-link :to="{ name: 'Index' }">
          <i class="glyphicon glyphicon-home"></i>
          <p>首页</p>
        </router-link>
        </li>
        <li :class="news">
          <router-link :to="{ name: 'Message' }">
            <i class="glyphicon glyphicon-comment"></i>
            <p>消息<span class="badge">{{ tot }}</span></p>
          </router-link>
        </li>
        <li :class="personal">
          <a @click="check">
            <i class="glyphicon glyphicon-user"></i>
            <p>我的</p>
          </a>
        </li>
        <li :class="search">
          <router-link :to="{ name: 'Search' }">
            <i class="glyphicon glyphicon-search"></i>
            <p>搜索</p>
          </router-link>
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
    'news',
    'personal',
    'search'
  ],
  data () {
    var tot = 0
    for (var message of this.datum.MessageList) {
      if (message.status === 0 && this.datum.LoginId === this.datum.GoodList[message.goodid].userid) {
        tot++
      }
    }
    return {
      tot: tot
    }
  },
  methods: {
    check () {
      var url = window.location.href
      url = url.substring(0, url.indexOf('#/'))
      if (this.datum.LoginId === '') {
        window.location.href = url + '#/login'
      } else {
        window.location.href = url + '#/user/info'
      }
    }
  },
  watch: {
    'datum.MessageList': {
      handler: function (val, oldval) {
        this.tot = 0
        for (var message of this.datum.MessageList) {
          if (message.status === 0) {
            this.tot++
          }
        }
      },
      deep: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-nav i {
  font-size: 200%;
}
.navbar-nav li {
  width: 10vw;
  text-align: center;
}
.navbar-nav p {
  margin-bottom: 0px;
}
</style>
