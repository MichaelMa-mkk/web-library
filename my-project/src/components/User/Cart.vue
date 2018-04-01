<template>
  <section class="container">
    <top-nav cart="active"></top-nav>
    <div v-if="login" class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>书名</th>
            <th>作者名</th>
            <th>价格</th>
            <th style="width: 120px;">数量</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <th>
              <router-link :to="{ name: 'GoodDetail', params: {id: item.id} }" class="textelli">{{ goods[item.id].name }}</router-link>
            </th>
            <td>
              <router-link :to="{ name: 'GoodDetail', params: {id: item.id} }">{{ goods[item.id].author }}</router-link>
            </td>
            <td>
              <router-link :to="{ name: 'GoodDetail', params: {id: item.id} }">￥{{ goods[item.id].price }}</router-link>
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group-btn">
                  <button type="button" class="btn btn-default" @click="changeAmount(-1,item.id)">-</button>
                </div>
                <input type="text" class="form-control" readonly :value="item.amount">
                <div class="input-group-btn">
                  <button type="button" class="btn btn-default" @click="changeAmount(1,item.id)">+</button>
                </div>
              </div>
            </td>
            <td>
              <a class="glyphicon glyphicon-trash" @click="deleteItem(item.id)"></a>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <th>总价： ￥{{totPrice}}</th>
            <td>
              <button type="button" class="btn btn-warning">
                去结算
              </button>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import TopNav from '@/components/components/top-nav'

export default {
  name: 'cart',
  components: {
    TopNav
  },
  data () {
    var items = []
    if (this.data.LoginId !== '') {
      items = this.data.UserList[this.data.LoginId].buy
    }
    var totPrice = 0
    for (let item of items) {
      totPrice += Number(this.data.GoodList[item.id].price) * item.amount
    }
    return {
      goods: this.data.GoodList,
      items: items,
      login: this.data.LoginId !== '',
      totPrice: totPrice
    }
  },
  methods: {
    changeAmount (delta, id) {
      for (let item of this.items) {
        if (item.id === id) {
          item.amount += delta
        }
        if (item.amount < 1) {
          item.amount = 1
        }
      }
    },
    deleteItem (id) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id === id) {
          this.items.splice(i, 1)
        }
      }
    }
  },
  watch: {
    'items': {
      handler: function (val, oldval) {
        this.totPrice = 0
        for (let item of val) {
          this.totPrice += Number(this.data.GoodList[item.id].price) * item.amount
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
a {
  color: black;
  padding: 0;
}
.container {
  padding-top: 30px;
}
.form-control {
  padding: 0;
  text-align: center;
}
.input-group {
  width: 86px;
}
.textelli {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
