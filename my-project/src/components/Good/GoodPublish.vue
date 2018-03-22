<template>
<section class="container">
  <head-bar headtext="发布宝贝"></head-bar>
  <form class="form-horizontal" v-show="login">
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝名称</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="名称" id="name">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝描述</label>
      <div class="col-sm-10">
        <textarea class="form-control" rows="5" placeholder="描述" id="author"></textarea>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝价格</label>
      <div class="col-sm-10">
        <div class="input-group col-sm-2">
          <div class="input-group-addon">￥</div>
          <input type="text" class="form-control" placeholder="价格" id="price">
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
        <select class="form-control" id="category">
          <option value="" disabled selected>请选择</option>
          <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
        </select>
      </div>
    </div>
    <div class="form-group">
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
  name: 'good-publish',
  components: {
    HeadBar
  },
  data () {
    return {
      login: this.data.LoginId !== '',
      categories: this.data.CategoryList
    }
  },
  methods: {
    submit () {
      var name = document.getElementById('name').value
      var author = document.getElementById('author').value
      var price = document.getElementById('price').value
      var category = document.getElementById('category').value
      if (name === '' || author === '' || price === '' || category === '') {
        alert('信息填写有遗漏')
        return
      }
      this.data.GoodList.push({
        name: name,
        author: author,
        price: parseFloat(price),
        category: parseInt(category),
        id: this.data.GoodList.length,
        userid: this.data.LoginId,
        status: 0
      })
      var url = window.location.href
      url = url.substring(0, url.length - 12)
      window.location.href = url + 'user/publish'
    }
  }
}
</script>

<style scoped>
.form-group select {
  width: 11%;
}
</style>
