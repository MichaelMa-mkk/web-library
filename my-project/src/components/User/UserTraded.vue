<template>
<div>
  <h4><strong>买到的宝贝</strong></h4>
  <table class="table table-hover">
    <thead>
      <tr>
        <th class="col-sm-2">宝贝名称</th>
        <th class="col-sm-2">价格</th>
        <th class="col-sm-7">宝贝描述</th>
        <th></th>
      </tr>
    </thead>
  </table>
  <template v-for="good in buys">
    <table class="table table-hover" :key="good.id">
      <tbody>
        <tr>
          <th class="col-sm-2"><router-link :to="{ name: 'GoodDetail', params: {id: good.id} }">{{ good.name }}</router-link></th>
          <td class="col-sm-2">￥{{ good.price }}</td>
          <td class="col-sm-7 text-elipise">{{ good.author }}</td>
          <td>
            <button role="button" class="btn btn-default" @click="insert(good.id)">评价</button>
          </td>
        </tr>
      </tbody>
    </table>
    <form class="form-horizontal hidden" :id="'comment' + good.id" :key="good.id">
      <div class="form-group">
        <label class="control-label col-sm-2">
          给TA评价：<br/><router-link :to="{ name: 'UserView', params: {id: good.userid} }">{{ users[good.userid].name }}</router-link>
        </label>
        <div class="col-sm-8">
          <textarea class="form-control" rows="3" :id="'comment-content' + good.id" placeholder="不填就是默认好评了哦"></textarea>
        </div>
        <button type="button" @click="addcomment(good.id, 0)" class="btn btn-info btn-comment">发表<br/>评价</button>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2">总体评价</label>
        <div class="form-control-static col-sm-3">
          <span @click="addscore(1)" :id="'b1' + good.id" class="glyphicon glyphicon-star-empty"></span>
          <span @click="addscore(2)" :id="'b2' + good.id" class="glyphicon glyphicon-star-empty"></span>
          <span @click="addscore(3)" :id="'b3' + good.id" class="glyphicon glyphicon-star-empty"></span>
          <span @click="addscore(4)" :id="'b4' + good.id" class="glyphicon glyphicon-star-empty"></span>
          <span @click="addscore(5)" :id="'b5' + good.id" class="glyphicon glyphicon-star-empty"></span>
        </div>
        <div class="col-sm-3 alert alert-warning text-center hidden" role="alert" :id="'alert' + good.id">
          你还没有评分哦
        </div>
      </div>
    </form>
  </template>
  <h4><strong>卖出的宝贝</strong></h4>
  <table class="table table-hover">
    <thead>
      <tr>
        <th class="col-sm-2">宝贝名称</th>
        <th class="col-sm-2">价格</th>
        <th class="col-sm-7">宝贝描述</th>
        <th></th>
      </tr>
    </thead>
  </table>
  <template v-for="good in sells">
    <table class="table table-hover" :key="good.id">
      <tbody>
        <tr>
          <th class="col-sm-2"><router-link :to="{ name: 'GoodDetail', params: {id: good.id} }">{{ good.name }}</router-link></th>
          <td class="col-sm-2">￥{{ good.price }}</td>
          <td class="col-sm-7 text-elipise">{{ good.author }}</td>
          <td>
            <button role="button" class="btn btn-default" @click="insert(good.id)">评价</button>
          </td>
        </tr>
      </tbody>
    </table>
    <form class="form-horizontal hidden" :id="'comment' + good.id" :key="good.id">
      <div class="form-group">
        <label class="control-label col-sm-2">
          给TA评价：<br/><router-link :to="{ name: 'UserView', params: {id: good.to} }">{{ users[good.to].name }}</router-link>
        </label>
        <div class="col-sm-8">
          <textarea class="form-control" rows="3" :id="'comment-content' + good.id" placeholder="不填就是默认好评了哦"></textarea>
        </div>
        <button type="button" @click="addcomment(good.id, 1)" class="btn btn-info btn-comment">发表<br/>评价</button>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2">总体评价</label>
        <div class="form-control-static col-sm-3">
          <span @click="addscore(1)" :id="'b1' + good.id" class="glyphicon glyphicon-star-empty"></span>
          <span @click="addscore(2)" :id="'b2' + good.id" class="glyphicon glyphicon-star-empty"></span>
          <span @click="addscore(3)" :id="'b3' + good.id" class="glyphicon glyphicon-star-empty"></span>
          <span @click="addscore(4)" :id="'b4' + good.id" class="glyphicon glyphicon-star-empty"></span>
          <span @click="addscore(5)" :id="'b5' + good.id" class="glyphicon glyphicon-star-empty"></span>
        </div>
        <div class="col-sm-3 alert alert-warning text-center hidden" role="alert" :id="'alert' + good.id">
          你还没有评分哦
        </div>
      </div>
    </form>
  </template>
</div>
</template>

<script>
export default {
  name: 'user-traded',
  data () {
    var buys = []
    var sells = []
    for (var good of this.datum.GoodList) {
      if (good.to === this.datum.LoginId && good.status === 1) {
        buys.push(good)
      }
      if (good.userid === this.datum.LoginId && good.status === 1) {
        sells.push(good)
      }
    }
    return {
      buys: buys,
      sells: sells,
      score: 0,
      users: this.datum.UserList
    }
  },
  methods: {
    insert (id) {
      var element
      for (var good of this.buys) {
        element = document.getElementById('comment' + good.id)
        element.classList.add('hidden')
      }
      for (good of this.sells) {
        element = document.getElementById('comment' + good.id)
        element.classList.add('hidden')
      }
      for (element of document.getElementsByClassName('alert')) {
        element.classList.add('hidden')
      }
      element = document.getElementById('comment' + id)
      element.classList.remove('hidden')
      this.addscore(0)
    },
    addcomment (goodid, type) {
      var content = document.getElementById('comment-content' + goodid).value
      if (this.score === 0) {
        var element = document.getElementById('alert' + goodid)
        element.classList.remove('hidden')
        return
      }
      if (type === 0) {
        this.datum.EvalList.push({
          belong: this.datum.LoginId,
          to: this.datum.GoodList[goodid].userid,
          goodid: goodid,
          level: this.score,
          content: content
        })
      }
      if (type === 1) {
        this.datum.EvalList.push({
          belong: this.datum.LoginId,
          to: this.datum.GoodList[goodid].to,
          goodid: goodid,
          level: this.score,
          content: content
        })
      }
      var url = window.location.href
      url = url.substring(0, url.indexOf('#/'))
      window.location.href = url + '#/user/eval'
    },
    addscore (num) {
      var val = num
      var oldval = this.score
      this.score = num
      var element
      for (var i of [1, 2, 3, 4, 5]) {
        for (var good of this.buys) {
          if (i <= val && i > oldval) {
            element = document.getElementById('b' + i.toString() + good.id.toString())
            element.classList.remove('glyphicon-star-empty')
            element.classList.add('glyphicon-star')
          }
          if (i <= oldval && i > val) {
            element = document.getElementById('b' + i.toString() + good.id.toString())
            element.classList.remove('glyphicon-star')
            element.classList.add('glyphicon-star-empty')
          }
        }
        for (good of this.sells) {
          if (i <= val && i > oldval) {
            element = document.getElementById('b' + i.toString() + good.id.toString())
            element.classList.remove('glyphicon-star-empty')
            element.classList.add('glyphicon-star')
          }
          if (i <= oldval && i > val) {
            element = document.getElementById('b' + i.toString() + good.id.toString())
            element.classList.remove('glyphicon-star')
            element.classList.add('glyphicon-star-empty')
          }
        }
      }
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
table {
  margin-bottom: 0;
}
.form-horizontal {
  margin-top: 2%;
}
.btn-comment {
  font-size: 140%;
  padding: 1.3%;
  width: 12%;
}
.glyphicon-star {
  color: gold;
}
.glyphicon:hover {
  cursor: pointer;
}
.alert {
  padding: 0.7%;
  margin: 0;
}
</style>
