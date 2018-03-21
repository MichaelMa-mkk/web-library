<template>
<div>
  <div class="good-list row">
    <div v-for="item in goods" class="col-sm-4 text-center" :key="item.id">
      <router-link :to="{ name: 'GoodDetail', params: {id: item.id} }">
        <img :src="'../../../static/' + item.name + '.jpg'">
        <p>{{ item.name }}</p>
      </router-link>
      <strong>￥{{ item.price_sell }}</strong>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'good-all',
  data () {
    var goods = []
    for (var good of this.datum.GoodList) {
      if (good.status === 0) {
        goods.push(good)
      }
    }
    return {
      goods: goods
    }
  }
}
</script>
