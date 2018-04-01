<template>
<section class="container">
  <head-bar headtext="用户注册"></head-bar>
  <form class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-2 control-label col-md-2">用户名</label>
    <div class="col-sm-10 col-md-8">
      <input type="email" class="form-control" id="username" placeholder="User">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-2 control-label col-md-2">密码</label>
    <div class="col-sm-10 col-md-8">
      <input type="password" class="form-control" id="password" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-2 control-label col-md-2">确认密码</label>
    <div class="col-sm-10 col-md-8">
      <input type="password" class="form-control" id="repeat" placeholder="Password Again">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10 col-md-8">
      <button type="button" @click="register" class="btn btn-default">提交</button>
    </div>
  </div>
</form>
</section>
</template>

<script>
import HeadBar from '@/components/components/head-bar'

export default {
  name: 'register',
  components: {
    HeadBar
  },
  methods: {
    register () {
      var pwd = document.getElementById('password').value
      var repeat = document.getElementById('repeat').value
      var name = document.getElementById('username').value
      if (repeat !== pwd) alert('两次密码输入不一致')
      else {
        if (pwd !== '' && name !== '') {
          var len = this.data.UserList.length
          this.data.UserList.push({
            id: len,
            name: name,
            pwd: pwd,
            phone: '',
            buy: []
          })
          var url = window.location.href
          url = url.substring(0, url.length - 8)
          window.location.href = url + 'login'
        }
      }
    },
    keyListener (e) {
      if (e.keyCode === 13) {
        this.button.click()
      }
    }
  },
  mounted () {
    document.onkeydown = this.keyListener
    var buttons = document.getElementsByTagName('button')
    for (var button of buttons) {
      if (button.innerHTML === '提交') {
        this.button = button
        break
      }
    }
  }
}
</script>

<style scoped>
</style>
