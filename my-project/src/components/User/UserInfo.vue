<template>
  <form class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-2 control-label">用户名</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="username" :value="user.name">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">新密码</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="password" placeholder="留空则不更改">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">手机号码</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="phone" :value="user.phone" @change="checkPhone">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">电子邮箱</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="email" :value="user.email" @change="checkEmail">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <a onclick="$('#dialog').popover('show');" data-trigger="focus" data-toggle="popover" data-container="body" id="dialog" data-placement="bottom" data-content="保存成功">
          <button type="button" class="btn btn-default" @click="save">保存</button>
        </a>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'user-info',
  data () {
    return {
      user: this.data.UserList[this.data.LoginId]
    }
  },
  methods: {
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
      if (phone === '') alert('手机号码不能为空')
      if (phone.length !== 11) alert('手机号码格式错误')
      else {
        if (pwd !== '') {
          this.data.UserList[this.data.LoginId].pwd = pwd
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
  }
}
</script>

<style scoped>

</style>
