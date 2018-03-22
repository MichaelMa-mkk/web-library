<template>
<section class="container">
  <head-bar v-if="good.status === 0" headtext="编辑宝贝"></head-bar>
  <head-bar v-else headtext="查看宝贝"></head-bar>
  <form class="form-horizontal" v-show="login">
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝名称</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="名称" id="name" :value="good.name">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝描述</label>
      <div class="col-sm-10">
        <textarea class="form-control" rows="5" placeholder="描述" id="author" :value="good.author"></textarea>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝价格</label>
      <div class="col-sm-10">
        <div class="input-group col-sm-2">
          <div class="input-group-addon">￥</div>
          <input type="text" class="form-control" placeholder="价格" id="price" :value="good.price">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝图片</label>
      <div class="col-sm-10">
        <input type="file">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="button" class="btn btn-default">添加更多图片</button>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝分类</label>
      <div class="col-sm-10">
        <select class="form-control" id="category" :value="good.category">
          <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝状态</label>
      <div class="col-sm-10">
        <select class="form-control inline col-sm-5" id="status" v-model="selected">
          <option value="0">在售</option>
          <option value="1">下架</option>
        </select>
        <div v-show="parseInt(selected) === 1 && good.status === 0" class="col-sm-5 alert alert-danger text-center" role="alert">
          <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
          状态改为下架之后就不能对宝贝进行编辑了哦
        </div>
      </div>
    </div>
    <div v-show="parseInt(selected) === 1 && good.status === 0" class="form-group">
      <label class="col-sm-2 control-label">卖给谁了呢</label>
      <div class="col-sm-10">
        <select class="form-control" id="to">
          <option value="" disabled selected>请选择</option>
          <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }}</option>
        </select>
      </div>
    </div>
    <div class="form-group" v-show="good.status === 0">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="button" class="btn btn-info" @click="submit">提交</button>
      </div>
    </div>
  </form>
</section>
</template>

<script>
import HeadBar from '../components/head-bar'

export default {
  name: 'good-edit',
  components: {
    HeadBar
  },
  data () {
    var good = this.datum.GoodList[this.$route.params.id]
    var users = []
    for (var message of this.datum.MessageList) {
      if (message.goodid === good.id) {
        users.push(this.datum.UserList[message.userid])
      }
    }
    return {
      good: good,
      login: this.datum.LoginId === good.userid,
      selected: good.status,
      users: users,
      categories: this.datum.CategoryList
    }
  },
  methods: {
    submit () {
      var name = document.getElementById('name').value
      var author = document.getElementById('author').value
      var price = document.getElementById('price').value
      var category = document.getElementById('category').value
      var status = document.getElementById('status').value
      var to = document.getElementById('to').value
      if (name === '' || author === '' || price === '' || (parseInt(status) === 1 && to === '')) {
        alert('信息填写有遗漏')
        return
      }
      this.datum.GoodList[this.$route.params.id].name = name
      this.datum.GoodList[this.$route.params.id].author = author
      this.datum.GoodList[this.$route.params.id].price = parseFloat(price)
      this.datum.GoodList[this.$route.params.id].category = parseInt(category)
      this.datum.GoodList[this.$route.params.id].status = parseInt(status)
      this.datum.GoodList[this.$route.params.id].to = parseInt(to)
      var url = window.location.href
      url = url.substring(0, url.indexOf('#/'))
      window.location.href = url + '#/user/publish'
    }
  },
  mounted () {
    if (this.good.status === 1) {
      var att
      for (var element of document.getElementsByTagName('input')) {
        att = document.createAttribute('disabled')
        element.setAttributeNode(att)
      }
      for (element of document.getElementsByTagName('select')) {
        att = document.createAttribute('disabled')
        element.setAttributeNode(att)
      }
      att = document.createAttribute('disabled')
      document.getElementsByTagName('textarea')[0].setAttributeNode(att)
    }
  }
}
</script>

<style scoped>
.form-group select {
  width: 11%;
}
.inline {
  display: inline;
  margin-right: 3%;
}
.alert {
  padding: 0.7%;
  margin: 0;
}
#to {
  width: 20%;
}
</style>
