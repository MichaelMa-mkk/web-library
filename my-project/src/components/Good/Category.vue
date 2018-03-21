<template>
<div>
  <div class="good-list row">
    <div v-for="item in goods" class="col-sm-4 text-center" :key="item.id">
      <router-link :to="{ name: 'GoodDetail', params: {id: item.id}}">
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
    var list = this.datum.GoodList
    var goods = []
    for (var good of list) {
      if (good.category === parseInt(this.$route.params.category) && good.status === 0) {
        goods.push(good)
      }
    }
    return {
      goods: goods
    }
  },
  watch: {
    '$route.params.category': function (val, oldval) {
      var list = this.datum.GoodList
      this.goods = []
      for (var good of list) {
        if (good.category === parseInt(this.$route.params.category) && good.status === 0) {
          this.goods.push(good)
        }
      }
    }
  }
}
</script>
