<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-3 col-md-1">
        <button class="btn btn-primary" @click="jsonDownload">导出json</button>
      </div>
      <div class="col-xs-2 col-md-1" style="margin-left: 1%;">
        <button class="btn btn-primary" @click="search(0)">重置列表</button>
      </div>
      <div class="col-xs-9 col-md-6 pull-right">
        <div class="input-group">
          <input v-if="selectid === 0" type="text" class="form-control" placeholder="搜索">
          <input v-if="selectid !== 0" type="text" class="form-control" id="first">
          <span v-if="selectid !== 0" class="input-group-addon">~</span>
          <input v-if="selectid !== 0" type="text" class="form-control" id="second">
          <div class="input-group-btn">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ select }}
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a @click="update(0)">全部商品</a>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <a @click="update(1)">出版年份</a>
              </li>
              <li>
                <a @click="update(2)">价格</a>
              </li>
            </ul>
          </div>
          <span class="input-group-btn">
            <button class="btn btn-default" type="button" @click="search">搜索</button>
          </span>
        </div>
      </div>
    </div>
    <p> </p>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>书名
              <a>
                <span class="glyphicon glyphicon-triangle-top" @click="nameClickUp"></span>
                <span class="glyphicon glyphicon-triangle-bottom" @click="nameClickDown"></span>
              </a>
            </th>
            <th>作者名
              <a>
                <span class="glyphicon glyphicon-triangle-top" @click="authorClickUp"></span>
                <span class="glyphicon glyphicon-triangle-bottom" @click="authorClickDown"></span>
              </a>
            </th>
            <th>出版年份
              <a>
                <span class="glyphicon glyphicon-triangle-top" @click="yearClickUp"></span>
                <span class="glyphicon glyphicon-triangle-bottom" @click="yearClickDown"></span>
              </a>
            </th>
            <th>价格
              <a>
                <span class="glyphicon glyphicon-triangle-top" @click="priceClickUp"></span>
                <span class="glyphicon glyphicon-triangle-bottom" @click="priceClickDown"></span>
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in goods" :key="item.id">
            <th scope="row">{{index+1}}</th>
            <td>
              <router-link :to="{ name: 'GoodDetail', params: {id: item.id} }">{{item.name}}</router-link>
            </td>
            <td>{{item.author}}</td>
            <td>{{item.year}}</td>
            <td>￥{{item.price}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'good-all',
  data () {
    return {
      goods: this.data.GoodList,
      select: '全部商品',
      selectid: 0,
      button: ''
    }
  },
  methods: {
    sortNameUp (a, b) {
      return a.name < b.name ? -1 : 1
    },
    sortAuthorUp (a, b) {
      return a.author < b.author ? -1 : 1
    },
    sortPriceUp (a, b) {
      return Number(a.price) - Number(b.price)
    },
    sortPriceDown (a, b) {
      return Number(b.price) - Number(a.price)
    },
    sortYearUp (a, b) {
      return Number(a.year) - Number(b.year)
    },
    sortYearDown (a, b) {
      return Number(b.year) - Number(a.year)
    },
    sortNameDown (a, b) {
      return a.name < b.name ? 1 : -1
    },
    sortAuthorDown (a, b) {
      return a.author < b.author ? 1 : -1
    },
    nameClickUp () {
      this.goods.sort(this.sortNameUp)
    },
    nameClickDown () {
      this.goods.sort(this.sortNameDown)
    },
    yearClickUp () {
      this.goods.sort(this.sortYearUp)
    },
    yearClickDown () {
      this.goods.sort(this.sortYearDown)
    },
    authorClickUp () {
      this.goods.sort(this.sortAuthorUp)
    },
    authorClickDown () {
      this.goods.sort(this.sortAuthorDown)
    },
    priceClickUp () {
      this.goods.sort(this.sortPriceUp)
    },
    priceClickDown () {
      this.goods.sort(this.sortPriceDown)
    },
    funDownload (content, filename) {
      var eleLink = document.createElement('a')
      eleLink.download = filename
      eleLink.style.display = 'none'
      var blob = new Blob([content])
      eleLink.href = URL.createObjectURL(blob)
      document.body.appendChild(eleLink)
      eleLink.click()
      document.body.removeChild(eleLink)
    },
    jsonDownload () {
      var json = JSON.stringify(this.goods)
      this.funDownload(json, 'goods.json')
    },
    update (id) {
      this.selectid = id
    },
    search (mode) {
      var key = document.getElementsByTagName('input')[0].value
      this.goods = []
      if (key === '' || mode === 0) {
        document.getElementsByTagName('input')[0].value = ''
        for (var good of this.data.GoodList) {
          this.goods.push(good)
        }
        return
      }
      if (this.selectid === 0) {
        for (good of this.data.GoodList) {
          if (good.name.indexOf(key) >= 0 || good.author.indexOf(key) >= 0) {
            this.goods.push(good)
          }
        }
      } else if (this.selectid === 1) {
        key = document.getElementById('first').value
        var key2 = document.getElementById('second').value
        for (good of this.data.GoodList) {
          if (Number(good.year) >= Number(key) && Number(good.year) <= Number(key2)) {
            this.goods.push(good)
          }
        }
      } else {
        key = document.getElementById('first').value
        key2 = document.getElementById('second').value
        for (good of this.data.GoodList) {
          if (Number(good.price) >= Number(key) && Number(good.price) <= Number(key2)) {
            this.goods.push(good)
          }
        }
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
        this.select = '全部商品'
      }
      if (val === 1) {
        this.select = '出版年份'
      }
      if (val === 2) {
        this.select = '价格'
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
a {
  color: black;
}
</style>
