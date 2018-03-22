<template>
  <div>
    <div class="table-responsive container">
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
            <td>{{item.price}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container text-right">
      <button class="btn btn-primary" @click="jsonDownload">导出json</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'good-all',
  data () {
    var goods = []
    for (var good of this.datum.GoodList) {
      if (good.status === 0) {
        goods.push(good)
      }
    }
    return {
      goods: goods
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
    }
  }
}
</script>

<style scoped>
a {
  color: black;
}
</style>
