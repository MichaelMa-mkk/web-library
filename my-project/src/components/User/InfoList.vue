<template>
  <section>
    <top-nav personal="active"></top-nav>
    <ul class="nav nav-pills nav-stacked navbar-fixed-left">
      <li role="presentation" id="UserInfo">
        <router-link :to="{ name: 'UserInfo' }">我的信息</router-link>
      </li>
      <li role="presentation" id="UserOrder">
        <router-link :to="{ name: 'UserOrder' }">我的订单</router-link>
      </li>
      <!--<li>
        <li @click="toggle">
          <a class="dropdown-toggle">我的宝贝
            <span class="caret"></span>
          </a>
        </li>
        <ul class="nav nav-pills nav-stacked mini hide">
          <li role="presentation" id="GoodPublish">
            <router-link :to="{ name: 'GoodPublish' }">我要发布</router-link>
          </li>
          <li role="presentation" id="UserPublish">
            <router-link :to="{ name: 'UserPublish' }">发布成功</router-link>
          </li>
        </ul>
      </li>
      <li role="presentation" id="UserEval">
        <router-link :to="{ name: 'UserEval' }">我的评价</router-link>
      </li>
      <li role="presentation" id="UserComment">
        <router-link :to="{ name: 'UserComment' }">我的评论</router-link>
      </li>-->
    </ul>
    <div class="row">
      <div class="col-xs-4 col-md-2"></div>
      <div class="col-xs-7 col-md-8">
        <router-view/>
      </div>
    </div>
  </section>
</template>

<script>
import TopNav from '@/components/components/top-nav'

export default {
  name: 'user-info',
  components: {
    TopNav
  },
  methods: {
    toggle () {
      var ul = document.getElementsByClassName('hide')[0]
      if (ul) {
        ul.classList.remove('hide')
      } else {
        ul = document.getElementsByClassName('mini')[0]
        ul.classList.add('hide')
      }
    }
  },
  mounted () {
    var list = document.getElementsByTagName('li')
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      if (item.getAttribute('role')) {
        item.onclick = function () {
          var temp = document.getElementsByClassName('active')
          for (const item of temp) {
            if (item.getAttribute('role')) {
              item.classList.remove('active')
            }
          }
          item.classList.add('active')
        }
      }
    }
    document.getElementById(this.$route.name).classList.add('active')
  },
  watch: {
    '$route.name': function () {
      var temp = document.getElementsByClassName('active')
      for (var item of temp) {
        if (item.getAttribute('role')) {
          item.classList.remove('active')
        }
      }
      document.getElementById(this.$route.name).classList.add('active')
    }
  }
}
</script>

<style scoped>
img {
  width: 140px;
  height: 140px;
}
.nav-stacked {
  padding-right: 5%;
}
.mini li a {
  color: purple;
  font-size: smaller;
}
.col-sm-8 {
  margin-top: 30px;
}
.navbar-fixed-left {
  position: fixed;
  left: 0;
}
</style>
