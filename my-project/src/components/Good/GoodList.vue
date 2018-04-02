<template>
<section>
  <top-nav home="active"></top-nav>
  <router-view/>
</section>
</template>

<script>
import TopNav from '@/components/components/top-nav'

export default {
  name: 'good-list',
  components: {
    TopNav
  }
}
</script>

<style scoped>
section {
  margin-top: 100px;
}
.navbar-fixed-left {
  position: fixed;
  left: 0;
}
</style>
