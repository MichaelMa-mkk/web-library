<template>
  <section class="container">
    <head-bar :headtext="mode"></head-bar>
    <p><img v-if="id != null" class="col-xs-12 col-md-5" :src="'../../../static/' + id + '.jpg'" /></p>
    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-sm-2 control-label">图书名称</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="名称" v-model="name">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">图书作者</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="作者" v-model="author">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">图书年份</label>
        <div class="col-sm-2">
          <input type="text" class="form-control" placeholder="年份" aria-describedby="year-help" v-model="year" id="year">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">图书摘要</label>
        <div class="col-sm-10">
          <textarea class="form-control" rows="5" placeholder="摘要" v-model="summary"></textarea>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">图书价格</label>
        <div class="col-sm-10">
          <div class="input-group col-sm-2" id="price">
            <div class="input-group-addon">￥</div>
            <input type="text" class="form-control" placeholder="价格" aria-describedby="price-help" v-model="price">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">图书库存</label>
        <div class="col-sm-2">
          <input type="text" class="form-control" placeholder="库存" aria-describedby="stock-help" v-model="stock" id="stock">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default" @click="submit">提交</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import HeadBar from '../components/head-bar'
import $ from 'jquery'

export default {
  name: 'good-edit',
  components: {
    HeadBar
  },
  data () {
    return {
      name: '',
      author: '',
      price: '',
      summary: '',
      stock: '',
      year: '',
      mode: '',
      id: this.$route.params.id
    }
  },
  mounted () {
    if (this.$route.params.hasOwnProperty('id')) {
      this.mode = '编辑图书'
      this.$http.get('/getitem', { params: { id: this.$route.params.id } })
        .then((response) => {
          this.name = response.data.name
          this.author = response.data.author
          this.price = response.data.price
          this.summary = response.data.summary
          this.stock = response.data.stock
          this.year = response.data.year
        })
    } else {
      this.mode = '发布图书'
    }
  },
  methods: {
    submit () {
      $('.has-error').removeClass('has-error')
      $('.help-block').remove()
      var flag = true
      if (this.name === '' || this.author === '' || this.price === '' || this.summary === '' || this.stock === '' || this.year === '') {
        alert('信息填写有遗漏')
        return
      }
      if (isNaN(Number(this.price)) || Number(this.price) <= 0) {
        $('#price').parent().parent().addClass('has-error')
        $('#price').after('<span id="price-help" class="help-block">价格错误</span>')
        flag = false
      }
      if (isNaN(Number(this.stock)) || Number(this.stock) < 0) {
        $('#stock').parent().parent().addClass('has-error')
        $('#stock').after('<span id="stock-help" class="help-block">库存错误</span>')
        flag = false
      }
      if (isNaN(Number(this.year)) || Number(this.year) < 1901 || Number(this.year) > 2155) {
        $('#year').parent().parent().addClass('has-error')
        $('#year').after('<span id="year-help" class="help-block">年份错误</span>')
        flag = false
      }
      if (flag) {
        if (this.$route.params.hasOwnProperty('id')) {
          this.$http.post('/updatebook', { name: this.name, author: this.author, summary: this.summary, stock: this.stock, price: this.price, year: this.year, id: this.$route.params.id })
            .then((response) => {
              if (response.data.id >= 0) {
                this.data.GoodList = []
                var url = window.location.href
                url = url.substring(0, url.indexOf('#/'))
                window.location.href = url + '#/admin/book'
                alert('success')
              } else {
                alert('fail')
              }
            })
        } else {
          this.$http.post('/addbook', { name: this.name, author: this.author, summary: this.summary, stock: this.stock, price: this.price, year: this.year })
            .then((response) => {
              if (response.data.id >= 0) {
                this.data.GoodList = []
                var url = window.location.href
                url = url.substring(0, url.length - 4)
                window.location.href = url
                alert('success')
              } else {
                alert('fail')
              }
            })
        }
      }
    }
  }
}
</script>

<style scoped>
.form-group select {
  width: 11%;
}
</style>
