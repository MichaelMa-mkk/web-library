<template>
<section class="container">
  <top-nav search="active"></top-nav>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="搜索">
    <div class="input-group-btn">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{ select }}
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li><a @click="update(0)">全部宝贝</a></li>
        <li role="separator" class="divider"></li>
        <li v-for="category in categories" :key="category.id">
          <a @click="update(category.id)">{{ category.name }}</a>
        </li>
      </ul>
    </div>
    <span class="input-group-btn">
      <button class="btn btn-default" type="button" @click="search">搜索</button>
    </span>
  </div>
  <div class="alert alert-warning " role="alert" v-show="show">
    没有搜索到相关宝贝QAQ。&emsp;&emsp;&emsp;&emsp;&emsp;您可以试试<router-link :to="{ name: 'Index' }" class="alert-link">浏览所有宝贝</router-link>
  </div>
  <div class="good-list row">
    <div v-for="item in goods" class="col-sm-4 text-center" :key="item.id">
      <router-link :to="{ name: 'GoodDetail', params: {id: item.id} }">
        <img :src="'../../../static/' + item.name + '.jpg'">
        <p>{{ item.name }}</p>
      </router-link>
      <strong>￥{{ item.price }}</strong>
    </div>
  </div>
</section>
</template>

<script>
import TopNav from '../components/top-nav'

export default {
  name: 'search-page',
  data () {
    return {
      categories: this.datum.CategoryList,
      select: '全部宝贝',
      selectid: 0,
      goods: [],
      button: '',
      show: false
    }
  },
  components: {
    TopNav
  },
  methods: {
    update (id) {
      this.selectid = id
    },
    search () {
      var key = document.getElementsByTagName('input')[0].value
      this.goods = []
      this.show = false
      if (key === '') return
      if (this.selectid === 0) {
        for (var good of this.datum.GoodList) {
          if (good.name.indexOf(key) >= 0 || good.author.indexOf(key) >= 0) {
            this.goods.push(good)
          }
        }
      } else {
        for (good of this.datum.GoodList) {
          if (good.category === this.selectid) {
            if (good.name.indexOf(key) >= 0 || good.author.indexOf(key) >= 0) {
              this.goods.push(good)
            }
          }
        }
      }
      if (this.goods.length === 0) {
        this.show = true
      }
    },
    keyListener (e) {
      if (e.keyCode === 13) {
        this.button.click()
      }
    }
  },
  watch: {
    selectid: function (val, oldval) {
      if (val === 0) {
        this.select = '全部宝贝'
      } else {
        this.select = this.categories[val - 1].name
      }
    }
  },
  mounted () {
    document.onkeydown = this.keyListener
    var buttons = document.getElementsByTagName('button')
    for (var button of buttons) {
      if (button.innerHTML === '搜索') {
        this.button = button
        break
      }
    }
  }
}
</script>

<style scoped>
.input-group {
  margin-bottom: 5%;
}
.col-sm-4 {
  margin-left: 7%;
  margin-right: 7%;
}
</style>
