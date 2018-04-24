<template>
  <section>
    <top-nav></top-nav>
    <div class="container table-responsive">
      <table class="table table-hover">
        <thead>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{user.id}}</th>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.phone}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import TopNav from '@/components/components/top-nav'

export default {
  name: 'user-list',
  components: {
    TopNav
  },
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.$http.post('/getusers')
      .then((response) => {
        this.users = response.data.users
      })
  }
}
</script>
