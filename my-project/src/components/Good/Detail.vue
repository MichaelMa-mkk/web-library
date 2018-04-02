<template>
  <section>
    <head-bar headtext="图书详情"></head-bar>
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <p><img class="col-xs-12 col-md-5" :src="'../../../static/' + item.name + '.jpg'" /></p>
          <div class="col-xs-12 col-md-7" id="row">
            <h1>{{item.name}}</h1>
            <p>
              <strong>作者:</strong>
              {{item.author}}
            </p>
            <p>
              <strong>价格:</strong>
              ￥{{item.price}}
            </p>
            <p>
              <strong>摘要：</strong>{{item.abstract}}
            </p>
            <div class="input-group">
              <span class="input-group-addon">剩余库存:</span>
              <input class="form-control" readonly :value="item.stock">
            </div>
            <a tabindex="0" id="addcart" class="btn btn-lg btn-warning" role="button" @click="buy" data-trigger="focus" data-placement="bottom" data-content="添加成功">添加至购物车
              <span class="glyphicon glyphicon-shopping-cart"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeadBar from '../components/head-bar'
import $ from 'jquery'

export default {
  name: 'detail',
  components: {
    HeadBar
  },
  data () {
    return {
      item: this.data.GoodList[this.$route.params.id],
      flag1: 0,
      flag2: 0
    }
  },
  methods: {
    buy () {
      if (this.data.LoginId === '') alert('请先登录')
      else if (this.item.stock === 0) {
        if (this.flag1 === 0) {
          $('#addcart').popover('destroy')
          $('#row').after('<div class="alert alert-danger alert-dismissible fade in col-xs-10 col-md-3" style="margin-top: 2%; margin-left: 13px;" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '<strong>已经没有库存了哦</strong>' +
            '</div>')
          $('.alert').alert()
          this.flag1 = 1
        }
      } else {
        var buys = this.data.UserList[this.data.LoginId].buy
        for (let item of buys) {
          if (item.id === this.$route.params.id) {
            item.amount += 1
            if (item.amount > this.item.stock) {
              $('#addcart').popover('destroy')
              if (this.flag2 === 0) {
                $('#row').after('<div class="alert alert-danger alert-dismissible fade in col-xs-10 col-md-3" style="margin-top: 2%; margin-left: 13px;" role="alert">' +
                  '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                  '<span aria-hidden="true">&times;</span>' +
                  '</button>' +
                  '<strong>购买数量超过库存了哦</strong>' +
                  '</div>')
                $('.alert').alert()
                this.flag2 = 1
              }
              item.amount = this.item.stock
            } else {
              $('#addcart').popover('show')
            }
            return
          }
        }
        buys.push({
          id: Number(this.$route.params.id),
          amount: 1
        })
        $('#addcart').popover('show')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  background-color: white;
}
h1 {
  font-size: 300%;
  margin-bottom: 10%;
}
.form-control {
  width: 50px;
}
.btn {
  margin-top: 4%;
  font-size: 125%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
