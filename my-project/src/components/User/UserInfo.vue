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
    <label class="col-sm-2 control-label">联系方式</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="contact" :value="user.contact">
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
      user: this.datum.UserList[this.datum.LoginId]
    }
  },
  methods: {
    save () {
      var pwd = document.getElementById('password').value
      var name = document.getElementById('username').value
      var contact = document.getElementById('contact').value
      if (contact === '') alert('联系方式不能为空')
      else {
        if (pwd !== '') {
          this.datum.UserList[this.datum.LoginId].pwd = pwd
        }
        this.datum.UserList[this.datum.LoginId].name = name
        this.datum.UserList[this.datum.LoginId].contact = contact
        this.user.name = name
        this.user.contact = contact
        document.getElementById('password').value = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
