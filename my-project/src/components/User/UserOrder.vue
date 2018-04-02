<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-8 pull-right">
        <div class="input-group">
          <input v-if="selectid === 0" type="text" class="form-control" placeholder="搜索">
          <input v-if="selectid !== 0" type="text" class="form-control" id="first">
          <span v-if="selectid !== 0" class="input-group-addon">~</span>
          <input v-if="selectid !== 0" type="text" class="form-control" id="second">
          <div class="input-group-btn dropdown">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="$('.dropdown-toggle').dropdown()">
              {{ select }}
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a @click="update(0)">全部商品</a>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <a @click="update(1)">出版年份</a>
              </li>
              <li>
                <a @click="update(2)">价格</a>
              </li>
            </ul>
          </div>
          <span class="input-group-btn">
            <button class="btn btn-default" type="button" @click="search">搜索</button>
          </span>
        </div>
      </div>
    </div>
    <p> </p>
    <div class="table-responsive">
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <th>总价：￥{{order.tot}}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-order',
  data () {
    var orders = []
    for (let order of this.data.OrderList) {
      if (order.userid === this.data.LoginId) {
        order.date = order.time.toLocaleDateString()
        order.tot = 0
        for (let item of order.buy) {
          order.tot += this.data.GoodList[item.id].price
        }
        orders.push(order)
      }
    }
    return {
      orders: orders,
      items: this.data.GoodList,
      select: '全部商品',
      selectid: 0,
      button: ''
    }
  },
  methods: {
    update (id) {
      this.selectid = id
    },
    search (mode) {
      var key = document.getElementsByTagName('input')[0].value
      this.goods = []
      if (key === '' || mode === 0) {
        document.getElementsByTagName('input')[0].value = ''
        for (var good of this.data.GoodList) {
          this.goods.push(good)
        }
        return
      }
      if (this.selectid === 0) {
        for (good of this.data.GoodList) {
          if (good.name.indexOf(key) >= 0 || good.author.indexOf(key) >= 0) {
            this.goods.push(good)
          }
        }
      } else if (this.selectid === 1) {
        key = document.getElementById('first').value
        var key2 = document.getElementById('second').value
        for (good of this.data.GoodList) {
          if (Number(good.year) >= Number(key) && Number(good.year) <= Number(key2)) {
            this.goods.push(good)
          }
        }
      } else {
        key = document.getElementById('first').value
        key2 = document.getElementById('second').value
        for (good of this.data.GoodList) {
          if (Number(good.price) >= Number(key) && Number(good.price) <= Number(key2)) {
            this.goods.push(good)
          }
        }
      }
    },
    keyListener (e) {
      if (e.keyCode === 13) {
        this.button.click()
      }
    }
  },
  watch: {
    selectid: function (val, oldval) {
      if (val === 0) {
        this.select = '全部商品'
      }
      if (val === 1) {
        this.select = '出版年份'
      }
      if (val === 2) {
        this.select = '价格'
      }
    }
  },
  mounted () {
    document.onkeydown = this.keyListener
    var buttons = document.getElementsByTagName('button')
    for (var button of buttons) {
      if (button.innerHTML === '搜索') {
        this.button = button
        break
      }
    }
  }
}
</script>

<style scoped>
a {
  color: black;
}
.container {
  width: 100%;
}
</style>
