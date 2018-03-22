<template>
<section class="container">
  <head-bar headtext="用户信息"></head-bar>
  <form class="form-inline">
    <div class="form-group">
      <label class="control-label">用户名</label>
    </div>
    <div class="form-group">
    </div>
    <div class="form-group">
      <p class="form-control-static">{{ user.name }}</p>
    </div>
    <div class="form-group" style="width: 10%;">
    </div>
    <div class="form-group">
      <label class="control-label">联系方式</label>
    </div>
    <div class="form-group">
      <p class="form-control-static">{{ user.contact }}</p>
    </div>
  </form>
  <h4><strong>TA的评价</strong></h4>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>评价人</th>
        <th>评价等级</th>
        <th>评价内容</th>
        <th>相关宝贝</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="(evalitem, index) in evals" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td><router-link :to="{ name: 'UserView', params: {id: evalitem.to} }">{{ users[evalitem.to].name }}</router-link></td>
          <td class="star"><i v-for="index in new Array(evalitem.level)" class="glyphicon glyphicon-star" :key="index"></i></td>
          <td class="text-elipise" v-if="evalitem.content !== ''">{{ evalitem.content }}</td>
          <td class="text-elipise" v-else>系统默认好评</td>
          <td><router-link :to="{ name: 'GoodDetail', params: {id: evalitem.goodid} }">{{ goods[evalitem.goodid].name }}</router-link></td>
        </tr>
    </tbody>
  </table>
</section>
</template>

<script>
import HeadBar from '../components/head-bar'

export default {
  name: 'info-view',
  components: {
    HeadBar
  },
  data () {
    var evals = []
    for (var evalitem of this.data.EvalList) {
      if (evalitem.belong === parseInt(this.$route.params.id)) {
        evals.push(evalitem)
      }
    }
    return {
      evals: evals,
      user: this.data.UserList[this.$route.params.id],
      users: this.data.UserList,
      goods: this.data.GoodList
    }
  },
  watch: {
    '$route.params.id': function () {
      this.user = this.data.UserList[this.$route.params.id]
      this.evals = []
      console.log(this.data.EvalList)
      for (var evalitem of this.data.EvalList) {
        if (evalitem.belong === parseInt(this.$route.params.id)) {
          this.evals.push(evalitem)
        }
      }
    }
  }
}
</script>

<style scoped>
.star {
  color: gold;
}
</style>
