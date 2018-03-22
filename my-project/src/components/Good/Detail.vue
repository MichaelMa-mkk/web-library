<template>
  <section>
    <head-bar headtext="宝贝详情"></head-bar>
    <div class="box">
      <h1>{{ good.name }}</h1>
      <h2>{{ good.author }}</h2>
      <p class="inline">￥{{ good.price }}</p>
      <span>左右</span>
      <router-link :to="{ name: 'UserView', params: {id: good.userid} }">
        <button type="button" class="btn btn-info pull-right">卖家信息</button>
      </router-link>
      <a v-if="good.status === 0" onclick="$('#dialog').popover('show');" data-trigger="focus" class="pull-right" data-toggle="popover" data-container="body" id="dialog" data-placement="bottom" :data-content="text">
        <button type="button" class="btn btn-default pull-right" @click="addmessage">联系卖家</button>
      </a>
      <a v-else class="btn btn-default disabled pull-right" role="button">已出售</a>
      <button v-if="isstar" type="button" class="btn btn-warning pull-right active" @click="star">已收藏</button>
      <button v-else type="button" class="btn btn-warning pull-right" @click="star">收藏
        <i class="glyphicon glyphicon-star"></i>
      </button>
    </div>
    <div class="container">
      <img :src="'../../../static/' + good.name + '.jpg'" class="center-block">
      <div class="comment">
        <h1>
          <strong>评论</strong>
        </h1>
      </div>
      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-1 control-label">我说一句</label>
          <div class="col-sm-8">
            <textarea class="form-control" rows="3" id="comment-content" placeholder="请文明评论"></textarea>
          </div>
          <button type="button" @click="addcomment" class="btn btn-info col-sm-1 btn-comment">发表<br/>评论</button>
        </div>
      </form>
      <table class="table table-hover">
        <tbody>
          <tr v-for="comment in comments" :key="comment">
            <td class="name">{{ users[comment.userid].name }}</td>
            <td>{{ comment.content }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import HeadBar from '../components/head-bar'
export default {
  name: 'detail',
  components: {
    HeadBar
  },
  data () {
    var comments = []
    var isstar = false
    for (var comment of this.datum.CommentList) {
      if (comment.goodid === this.$route.params.id) {
        comments.push(comment)
      }
    }
    if (this.datum.LoginId !== '') {
      for (var goodid of this.datum.UserList[this.datum.LoginId].star) {
        if (goodid === parseInt(this.$route.params.id)) {
          isstar = true
          break
        }
      }
    }
    return {
      text: this.datum.LoginId !== '' ? '已经向卖家发送站内私信啦' : '请先登录',
      good: this.datum.GoodList[this.$route.params.id],
      comments: comments,
      users: this.datum.UserList,
      isstar: isstar
    }
  },
  methods: {
    addcomment () {
      if (this.datum.LoginId === '') alert('请先登录')
      else {
        var content = document.getElementById('comment-content')
        if (content.value !== '') {
          this.comments.push({
            userid: this.datum.LoginId,
            content: content.value
          })
          this.datum.CommentList.push({
            userid: this.datum.LoginId,
            content: content.value,
            goodid: this.good.id
          })
          content.value = ''
        }
      }
    },
    star () {
      if (this.datum.LoginId === '') alert('请先登录')
      else {
        this.isstar = !this.isstar
        if (!this.isstar) {
          for (var index in this.users[this.datum.LoginId].star) {
            if (this.users[this.datum.LoginId].star[index] === this.good.id) {
              this.users[this.datum.LoginId].star.splice(index, 1)
            }
          }
        } else {
          this.users[this.datum.LoginId].star.push(this.good.id)
        }
      }
    },
    addmessage () {
      this.datum.MessageList.push({
        userid: this.datum.LoginId,
        goodid: this.good.id,
        status: 0
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  margin: 20px auto;
  width: 90%;
  min-height: 100px;
  padding: 15px;
  padding-left: 5%;
  padding-right: 5%;
  position: relative;
  background: -webkit-gradient(
    linear,
    100% 100%,
    50% 10%,
    from(#fff),
    to(#f3f3f3),
    color-stop(0.1, #fff)
  );
  border: 1px solid #ccc;
}
.box p {
  color: orange;
  font-size: 200%;
}
.box h2 {
  color: gray;
  font-size: large;
}
.inline {
  display: inline;
  margin-right: 1%;
}
.comment {
  width: 100%;
  border-bottom: 1px solid grey;
}
.name {
  width: 15%;
}
.form-group {
  margin-top: 15px;
}
.form-group label {
  margin-left: 15px;
}
.btn-comment {
  font-size: 120%;
  padding: 1.3%;
}
td {
  word-wrap: break-word;
  margin-top: 10px;
}
#dialog,
.disabled {
  margin-left: 2%;
  margin-right: 2%;
}
img {
  height: 50%;
  width: 50%;
}
</style>
