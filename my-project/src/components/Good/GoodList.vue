<template>
<section>
  <top-nav home="active"></top-nav>
  <ul class="nav nav-pills nav-stacked navbar-fixed-left">
    <li role="presentation" class="active">
      <router-link :to="{ name: 'GoodAll' }">所有宝贝</router-link>
    </li>
    <li role="presentation" v-for="category in categories" :key="category.id">
      <router-link :to="{ name: 'Category', params: {category: category.id} }">{{ category.name }}</router-link>
    </li>
  </ul>
  <div class="col-sm-2"></div>
  <div class="col-sm-10">
    <router-view/>
  </div>
</section>
</template>

<script>
import TopNav from '@/components/components/top-nav'

export default {
  name: 'good-list',
  data () {
    return {
      categories: this.datum.CategoryList
    }
  },
  components: {
    TopNav
  },
  mounted () {
    var list = document.getElementsByTagName('li')
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      if (item.getAttribute('role')) {
        item.onclick = function () {
          var temp = document.getElementsByClassName('active')
          for (const item of temp) {
            if (item.getAttribute('role')) {
              item.classList.remove('active')
            }
          }
          item.classList.add('active')
        }
      }
    }
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
