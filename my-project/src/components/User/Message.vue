<template>
<section>
  <top-nav news="active"></top-nav>
  <form class="form-horizontal container" v-show="login">
  <div class="form-group" @click="read(index)" v-for="(message, index) in messages" :key="index">
    <label class="col-sm-2 control-label" v-if="message.status">买家联系信息</label>
    <label class="col-sm-2 control-label" v-else>有买家联系
      <span class="label label-info">New</span>
    </label>
    <div class="col-sm-10">
      <table class="table table-hover">
        <tbody>
          <tr>
            <td class="col-sm-3">买家姓名：<router-link :to="{ name: 'UserView', params: {id: message.userid} }">{{ users[message.userid].name }}</router-link></td>
            <td class="col-sm-4">买家联系方式：{{ users[message.userid].contact }}</td>
            <td>相关宝贝：<router-link :to="{ name: 'GoodDetail', params: {id: message.goodid} }">{{ goods[message.goodid].name }}</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-11">
      <button type="button" @click="allread" class="btn btn-default">全部设为已读</button>
    </div>
  </div>
</form>
</section>
</template>

<script>
import TopNav from '@/components/components/top-nav'

export default {
  name: 'message',
  components: {
    TopNav
  },
  data () {
    var messages = []
    for (var message of this.datum.MessageList) {
      if (this.datum.GoodList[message.goodid].userid === this.datum.LoginId) {
        messages.push(message)
      }
    }
    return {
      messages: messages,
      goods: this.datum.GoodList,
      users: this.datum.UserList,
      login: this.datum.LoginId !== ''
    }
  },
  methods: {
    read (index) {
      this.datum.MessageList[index].status = 1
    },
    allread () {
      for (var message of this.datum.MessageList) {
        message.status = 1
      }
    }
  }
}
</script>

<style scoped>
#temp {
  color: black;
}
.container {
  padding-top: 30px;
}
.label-info {
  font-size: 50%;
}
.label-info:hover {
  cursor: pointer;
}
</style>
