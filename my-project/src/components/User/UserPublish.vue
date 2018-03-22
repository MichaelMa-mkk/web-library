<template>
<div>
  <h4><strong>在售宝贝</strong></h4>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>宝贝名称</th>
        <th>价格</th>
        <th>宝贝描述</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="good in goods" :key="good.id">
          <th><router-link :to="{ name: 'GoodDetail', params: {id: good.id} }">{{ good.name }}</router-link></th>
          <td>￥{{ good.price }}</td>
          <td class="text-elipise">{{ good.author }}</td>
          <td>
            <router-link :to="{ name: 'GoodEdit', params: {id: good.id} }" role="button" class="btn btn-info btn-sm">编辑</router-link>
          </td>
        </tr>
    </tbody>
  </table>
  <h4><strong>下架宝贝</strong></h4>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>宝贝名称</th>
        <th>价格</th>
        <th>宝贝描述</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="good in ugoods" :key="good.id">
          <th><router-link :to="{ name: 'GoodDetail', params: {id: good.id} }">{{ good.name }}</router-link></th>
          <td>￥{{ good.price }}</td>
          <td class="text-elipise">{{ good.author }}</td>
          <td>
            <router-link :to="{ name: 'GoodEdit', params: {id: good.id} }" role="button" class="btn btn-info btn-sm">查看</router-link>
          </td>
        </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'user-publish',
  data () {
    var goods = []
    var ugoods = []
    for (var good of this.datum.GoodList) {
      if (good.userid === this.datum.LoginId && good.status === 0) {
        goods.push(good)
      }
      if (good.userid === this.datum.LoginId && good.status === 1) {
        ugoods.push(good)
      }
    }
    return {
      goods: goods,
      ugoods: ugoods
    }
  }
}
</script>

<style scoped>
.text-elipise {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 40vw;
}
</style>
