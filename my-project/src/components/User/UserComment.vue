<template>
  <div></div>
</template>

<script>
export default {
  name: 'user-comment',
  data () {
    var comments = []
    for (var comment of this.data.CommentList) {
      if (comment.userid === this.data.LoginId) {
        comments.push(comment)
      }
    }
    return {
      comments: comments,
      goods: this.data.GoodList
    }
  }
}
</script>

<style scoped>
.text-elipise {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 50vw;
}
a {
  color: black;
}
</style>
