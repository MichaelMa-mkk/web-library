<template>
  <form class="form-horizontal">
    <div class="form-group">
      <label class="col-md-2 control-label">头像</label>
      <img v-if="user.icon === ''" src="../../../static/default.svg" alt="140x140" class="img-circle" />
      <img v-else :src="user.icon" alt="140x140" class="img-circle" />
      <input type="file" class="inline hide" id="icon">
    </div>
    <div class="form-group">
      <label class="col-md-2 control-label">用户名</label>
      <div class="col-md-10">
        <input type="text" class="form-control" id="username" :value="user.name">
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-2 control-label">新密码</label>
      <div class="col-md-10">
        <input type="password" class="form-control" id="password" placeholder="留空则不更改">
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-2 control-label">手机号码</label>
      <div class="col-md-10">
        <input type="text" class="form-control" id="phone" :value="user.phone" @change="checkPhone">
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-2 control-label">电子邮箱</label>
      <div class="col-md-10">
        <input type="email" class="form-control" id="email" :value="user.email" @change="checkEmail">
      </div>
    </div>
    <div class="form-group">
      <div class="col-md-offset-2 col-md-10">
        <a tabindex="0" data-trigger="focus" data-toggle="popover" data-container="body" id="dialog" data-placement="bottom" data-content="保存成功">
          <button type="button" class="btn btn-default" @click="save">保存</button>
        </a>
        <button type="button" class="btn btn-danger inline" @click="quit">退出登录</button>
      </div>
    </div>
  </form>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'user-info',
  data () {
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
    return {
      user: this.data.UserList[this.data.LoginId]
    }
  },
  methods: {
    quit () {
      this.data.LoginId = ''
      var url = window.location.href
      url = url.substring(0, url.length - 9)
      window.location.href = url + 'login'
    },
    checkPhone () {
      var phone = document.getElementById('phone').value
      if (isNaN(Number(phone))) {
        document.getElementById('phone').value = ''
      }
    },
    checkEmail () {
      // eslint-disable-next-line
      var re = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
      var email = document.getElementById('email').value
      if (!re.test(email)) {
        document.getElementById('email').value = ''
      }
    },
    save () {
      var pwd = document.getElementById('password').value
      var name = document.getElementById('username').value
      var phone = document.getElementById('phone').value
      var email = document.getElementById('email').value
      var icon = document.getElementById('icon').value
      if (phone.length !== 11) {
        $('#dialog').popover('hide')
        alert('手机号码格式错误')
      } else {
        if (pwd !== '') {
          var alphabet = /[a-z]/i
          var number = /[0-9]/
          if (!alphabet.test(pwd) || !number.test(pwd)) {
            $('#dialog').popover('hide')
            alert('密码必须包含字母和数字')
          } else this.data.UserList[this.data.LoginId].pwd = pwd
        }
        if (icon !== '') {
          this.data.UserList[this.data.LoginId].icon = icon
          this.user.icon = icon
        }
        this.data.UserList[this.data.LoginId].name = name
        this.data.UserList[this.data.LoginId].phone = phone
        this.data.UserList[this.data.LoginId].email = email
        this.user.name = name
        this.user.phone = phone
        this.user.email = email
        document.getElementById('password').value = ''
      }
    }
  },
  beforeCreate () {
    if (this.data.LoginId === '') {
      var url = window.location.href
      url = url.substring(0, url.length - 9)
      window.location.href = url + 'login'
    }
  }
}
</script>

<style scoped>
.inline {
  float: right;
}
</style>
