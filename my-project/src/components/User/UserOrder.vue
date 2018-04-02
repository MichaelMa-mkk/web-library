<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>订单时间</th>
        <th>书名</th>
        <th>作者</th>
        <th>价格</th>
      </tr>
    </thead>
      <tbody v-for="order in orders" :key="order.id">
        <tr v-for="(item, iIndex) in order.buy" :key="item.id">
          <td v-if="iIndex === 0">
            {{order.date}}
          </td>
          <td v-else></td>
          <td>
            <router-link :to="{ name: 'GoodDetail', params: {id: item.id} }">{{items[item.id].name}}</router-link>
          </td>
          <td>{{items[item.id].author}}</td>
          <td>￥{{items[item.id].price}}</td>
        </tr>
      </tbody>
  </table>
</template>

<script>
export default {
  name: 'user-order',
  data () {
    var orders = []
    for (let order of this.data.OrderList) {
      if (order.userid === this.data.LoginId) {
        order.date = order.time.toLocaleDateString()
        orders.push(order)
      }
    }
    return {
      orders: orders,
      items: this.data.GoodList
    }
  }
}
</script>

<style scoped>
a{
  color: black;
}
</style>
