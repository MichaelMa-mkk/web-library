<template>
  <div></div>
</template>

<script>
export default {
  name: 'user-comment',
  data () {
    var comments = []
    for (var comment of this.datum.CommentList) {
      if (comment.userid === this.datum.LoginId) {
        comments.push(comment)
      }
    }
    return {
      comments: comments,
      goods: this.datum.GoodList
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
