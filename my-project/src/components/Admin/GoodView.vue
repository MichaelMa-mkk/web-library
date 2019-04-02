<template>
  <section>
    <top-nav></top-nav>
    <div class="container">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>书名</th>
              <th>作者名</th>
              <th>库存</th>
              <th>价格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in goods" :key="item.id">
              <th scope="row">{{index+1}}</th>
              <td>
                <router-link :to="{ name: 'GoodEdit', params: {id: item.id} }">{{item.name}}</router-link>
              </td>
              <td>{{item.author}}</td>
              <td>{{item.stock}}</td>
              <td>￥{{item.price}}</td>
              <td>
                <button class="btn btn-danger" @click="delete_book(item.id)">delete</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <router-link :to="{ name: 'GoodPublish' }">
                  <button class="btn btn-info">add</button>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import TopNav from '@/components/components/top-nav'

export default {
  name: 'good-view',
  components: {
    TopNav
  },
  data () {
    return {
      goods: []
    }
  },
  methods: {
    delete_book (id) {
      this.$http.post('/deletebook', { id: id })
        .then((response) => {
          alert('success')
          this.$http.get('/getgoods')
            .then((response) => {
              this.goods = response.data.goods
              this.data.GoodList = this.goods
            })
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert('fail')
          }
        })
    }
  },
  mounted () {
    this.$http.get('/getgoods')
      .then((response) => {
        this.goods = response.data.goods
        this.data.GoodList = this.goods
      })
  }
}
</script>

<style scoped>
a {
  color: black;
}
.container {
  width: 100%;
}
</style>
