<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
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
.good-list div {
  padding: 0px 20px 20px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  box-shadow: 0px 0px 5px gray;
  margin-bottom: 5%;
  margin-left: 4%;
  margin-right: 4%;
  height: 30vw;
}
.good-list div img {
  height: 24vw;
  padding-top: 4%;
  width: 18vw;
}
.good-list div p {
  height: 10%;
  font-size: 130%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
}
.good-list div strong {
  font-size: 150%;
}
</style>
