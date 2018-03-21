<template>
<table class="table table-hover">
  <thead>
    <tr>
      <th>宝贝名称</th>
      <th>价格</th>
      <th>宝贝描述</th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="star in stars" :key="star">
        <th class="col-sm-2"><router-link :to="{ name: 'GoodDetail', params: {id: star} }">{{ goods[star].name }}</router-link></th>
        <td class="col-sm-2"><router-link :to="{ name: 'GoodDetail', params: {id: star} }">￥{{ goods[star].price_sell }}</router-link></td>
        <td class="text-elipise col-sm-7"><router-link :to="{ name: 'GoodDetail', params: {id: star} }">{{ goods[star].advertising }}</router-link></td>
      </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: 'user-star',
  data () {
    return {
      stars: this.datum.UserList[this.datum.LoginId].star,
      goods: this.datum.GoodList
    }
  }
}
</script>

<style scoped>
.text-elipise {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 30vw;
}
td a {
  color: black;
}
</style>
