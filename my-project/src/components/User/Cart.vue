<template>
  <section class="container">
    <top-nav cart="active" :tot="tot"></top-nav>
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
          <tr v-for="item in items" :key="item.bookid">
            <th>
              <router-link :to="{ name: 'GoodDetail', params: {id: item.bookid} }" class="textelli">{{ goods[item.bookid].name }}</router-link>
            </th>
            <td>
              <router-link :to="{ name: 'GoodDetail', params: {id: item.bookid} }">{{ goods[item.bookid].author }}</router-link>
            </td>
            <td>
              <router-link :to="{ name: 'GoodDetail', params: {id: item.bookid} }">￥{{ goods[item.bookid].price }}</router-link>
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group-btn">
                  <button type="button" class="btn btn-default" @click="changeAmount(-1,item.bookid)">-</button>
                </div>
                <input type="text" class="form-control" readonly :value="item.amount">
                <div class="input-group-btn">
                  <button type="button" class="btn btn-default" @click="changeAmount(1,item.bookid)">+</button>
                </div>
              </div>
            </td>
            <td>
              <a class="glyphicon glyphicon-trash" @click="deleteItem(item.bookid)"></a>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <th>总价： ￥{{totPrice}}</th>
            <td>
              <button v-if="items.length !== 0" type="button" class="btn btn-warning" @click="buy">
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
    return {
      goods: [],
      items: [],
      login: this.data.LoginUser.id !== null,
      totPrice: 0,
      tot: 0
    }
  },
  methods: {
    changeAmount (delta, id) {
      for (let item of this.items) {
        if (item.bookid === id) {
          // decrease item stock not published
          this.$http.post('/addcart', { bookid: item.bookid, amount: item.amount + delta })
            .then((response) => {
              item.amount += delta
            })
        }
        if (item.amount < 1) {
          item.amount = 1
        }
      }
    },
    deleteItem (id) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].bookid === id) {
          this.$http.post('/deletecart', { bookid: id })
            .then((response) => {
              this.items.splice(i, 1)
            })
        }
      }
    },
    buy () {
      this.$http.post('/addorder', { userid: this.data.LoginUser.id, items: this.items })
        .then((response) => {
          this.data.LoginUser.cart = []
          this.items = []
          this.tot = 0
          var url = window.location.href
          url = url.substring(0, url.indexOf('#/'))
          window.location.href = url + '#/user/order'
        })
        .catch((error) => {
          if (error.response) {
            if (error.response === 400) {
              alert('请重新登录')
            }
          }
        })
    }
  },
  mounted () {
    if (this.data.GoodList.length === 0 && this.data.LoginUser.id) {
      this.$http.get('/getgoods')
        .then((response) => {
          this.data.GoodList = response.data.goods
          this.goods = this.data.GoodList
          this.totPrice = 0
          for (let item of this.items) {
            this.totPrice += Number(this.data.GoodList[item.bookid].price) * item.amount
          }
        })
    }
    this.goods = this.data.GoodList
    if (this.data.LoginUser.id !== null) {
      // add getcart backend
      this.items = this.data.LoginUser.cart
      this.tot = this.data.LoginUser.cart.length
    }
    if (this.data.GoodList.length !== 0) {
      this.totPrice = 0
      for (let item of this.items) {
        this.totPrice += Number(this.data.GoodList[item.bookid].price) * item.amount
      }
    }
  },
  watch: {
    'items': {
      handler: function (val, oldval) {
        this.totPrice = 0
        for (let item of val) {
          this.totPrice += Number(this.data.GoodList[item.bookid].price) * item.amount
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
