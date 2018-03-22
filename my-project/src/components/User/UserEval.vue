<template>
<div>
  <h4><strong>Ta对你的评价</strong></h4>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>评价人</th>
        <th>评价等级</th>
        <th>评价内容</th>
        <th>相关商品</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="(evalitem, index) in froms" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td><router-link :to="{ name: 'UserView', params: {id: evalitem.belong} }">{{ users[evalitem.belong].name }}</router-link></td>
          <td class="star"><i v-for="index in new Array(evalitem.level)" class="glyphicon glyphicon-star" :key="index"></i></td>
          <td class="text-elipise" v-if="evalitem.content !== ''">{{ evalitem.content }}</td>
          <td v-else>系统默认好评</td>
          <td><router-link :to="{ name: 'GoodDetail', params: {id: evalitem.goodid} }">{{ goods[evalitem.goodid].name }}</router-link></td>
        </tr>
    </tbody>
  </table>
  <h4><strong>你对TA的评价</strong></h4>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>被评价人</th>
        <th>评价等级</th>
        <th>评价内容</th>
        <th>相关商品</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="(evalitem, index) in tos" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td><router-link :to="{ name: 'UserView', params: {id: evalitem.to} }">{{ users[evalitem.to].name }}</router-link></td>
          <td class="star"><i v-for="index in new Array(evalitem.level)" class="glyphicon glyphicon-star" :key="index"></i></td>
          <td class="text-elipise" v-if="evalitem.content !== ''">{{ evalitem.content }}</td>
          <td v-else>系统默认好评</td>
          <td><router-link :to="{ name: 'GoodDetail', params: {id: evalitem.goodid} }">{{ goods[evalitem.goodid].name }}</router-link></td>
        </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'user-eval',
  data () {
    var froms = []
    var tos = []
    for (var evalitem of this.data.EvalList) {
      if (evalitem.to === this.data.LoginId) {
        froms.push(evalitem)
      }
      if (evalitem.belong === this.data.LoginId) {
        tos.push(evalitem)
      }
    }
    return {
      froms: froms,
      tos: tos,
      users: this.data.UserList,
      goods: this.data.GoodList
    }
  }
}
</script>

<style scoped>
.star {
  color: gold;
}
</style>
