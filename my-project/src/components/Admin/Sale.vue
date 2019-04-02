<template>
  <section>
    <top-nav></top-nav>
    <div class="container">
      <div class="row">
        <div class="col-xs-9 col-md-6 pull-right">
          <div class="input-group">
            <input v-if="selectid < 4 && selectid >= 0" type="text" class="form-control" placeholder="搜索" v-model="key">
            <input v-if="selectid == 4" type="text" class="form-control" v-model="first">
            <span v-if="selectid == 4" class="input-group-addon">~</span>
            <input v-if="selectid == 4" type="text" class="form-control" v-model="second">
            <div class="input-group-btn dropdown">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="$('.dropdown-toggle').dropdown();">
                {{ select }}
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a @click="update(0)">全部订单</a>
                </li>
                <li>
                  <a @click="update(1)">用户</a>
                </li>
                <li>
                  <a @click="update(2)">作者</a>
                </li>
                <li>
                  <a @click="update(3)">书名</a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a @click="update(4)">订单时间</a>
                </li>
              </ul>
            </div>
            <span class="input-group-btn">
              <button class="btn btn-default" type="button" @click="search">搜索</button>
            </span>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>书名</th>
              <th>作者</th>
              <th>数量</th>
              <th>单价</th>
              <th>总价</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in show_order" :key="item.id">
              <td>
                <router-link :to="{ name: 'GoodDetail', params: {id: item.book.id} }">{{item.book.name}}</router-link>
              </td>
              <td>{{item.book.author}}</td>
              <td>{{item.amount}}</td>
              <td>￥{{item.book.price}}</td>
              <td>￥{{item.book.price * item.amount}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import TopNav from '@/components/components/top-nav'

export default {
  name: 'sale',
  components: {
    TopNav
  },
  data () {
    return {
      orders: [],
      select: '全部订单',
      selectid: 0,
      key: '',
      first: '',
      second: '',
      show_order: []
    }
  },
  methods: {
    copy (source) {
      var res = {}
      for (var key in source) {
        res[key] = typeof source[key] === 'object' ? this.copy(source[key]) : source[key]
      }
      return res
    },
    update (id) {
      this.selectid = id
      this.key = ''
      this.first = ''
      this.second = ''
    },
    keyListener (e) {
      if (e.keyCode === 13) {
        this.search()
      }
    },
    search () {
      var order
      var item
      var thisItem
      var flag
      this.show_order = []
      if (this.selectid === 0) {
        for (order of this.orders) {
          for (item of order.items) {
            flag = 0
            for (thisItem of this.show_order) {
              if (thisItem.bookid === item.bookid) {
                thisItem.amount += item.amount
                flag = 1
                break
              }
            }
            if (flag === 0) {
              this.show_order.push(this.copy(item))
            }
          }
        }
      } else if (this.selectid === 1) {
        for (order of this.orders) {
          if (order.user[0].name.indexOf(this.key) < 0) continue
          for (item of order.items) {
            flag = 0
            for (thisItem of this.show_order) {
              if (thisItem.bookid === item.bookid) {
                thisItem.amount += item.amount
                flag = 1
                break
              }
            }
            if (flag === 0) {
              this.show_order.push(this.copy(item))
            }
          }
        }
      } else if (this.selectid === 2) {
        for (order of this.orders) {
          for (item of order.items) {
            if (item.book.author.indexOf(this.key) < 0) continue
            flag = 0
            for (thisItem of this.show_order) {
              if (thisItem.bookid === item.bookid) {
                thisItem.amount += item.amount
                flag = 1
                break
              }
            }
            if (flag === 0) {
              this.show_order.push(this.copy(item))
            }
          }
        }
      } else if (this.selectid === 3) {
        for (order of this.orders) {
          for (item of order.items) {
            if (item.book.name.indexOf(this.key) < 0) continue
            flag = 0
            for (thisItem of this.show_order) {
              if (thisItem.bookid === item.bookid) {
                thisItem.amount += item.amount
                flag = 1
                break
              }
            }
            if (flag === 0) {
              this.show_order.push(this.copy(item))
            }
          }
        }
      } else if (this.selectid === 4) {
        for (order of this.orders) {
          if (order.time.slice(0, 10) < this.first || order.time.slice(0, 10) > this.second) continue
          for (item of order.items) {
            flag = 0
            for (thisItem of this.show_order) {
              if (thisItem.bookid === item.bookid) {
                thisItem.amount += item.amount
                flag = 1
                break
              }
            }
            if (flag === 0) {
              this.show_order.push(this.copy(item))
            }
          }
        }
      }
    }
  },
  watch: {
    selectid: function (val, oldval) {
      if (val === 0) {
        this.select = '全部订单'
      }
      if (val === 1) {
        this.select = '用户'
      }
      if (val === 2) {
        this.select = '作者'
      }
      if (val === 3) {
        this.select = '书名'
      }
      if (val === 4) {
        this.select = '订单时间'
      }
    }
  },
  mounted () {
    this.$http.get('/getsales')
      .then((response) => {
        this.orders = response.data.orders
        this.search()
      })
    document.onkeydown = this.keyListener
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
