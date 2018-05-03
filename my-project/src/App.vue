<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.$http.post('/loginstatus')
      .then((response) => {
        console.log(response)
        this.data.LoginUser.id = response.data.id === 0 ? null : response.data.id
      })
  }
}
</script>

<style>
a:link,
a:visited,
a:hover {
  text-decoration: none;
  cursor: pointer;
}
section {
  margin-top: 90px;
}
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", sans-serif;
}
textarea {
  resize: none;
}
</style>
