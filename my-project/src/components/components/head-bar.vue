<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a onclick="history.back()" class="navbar-brand glyphicon glyphicon-menu-left"></a>
        <p class="navbar-text">{{headtext}}</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'head-bar',
  props: ['headtext']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-text {
  position: fixed;
  left: 43%;
  font-size: 120%;
}
.navbar-header{
  width: 100%;
}
</style>
