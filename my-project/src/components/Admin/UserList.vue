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
          <th>ban</th>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{user.id}}</th>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.phone}}</td>
            <td v-if="user.ban === 1">
              <button class="btn btn-default" @click="ban(user.id, 0)">unban</button>
            </td>
            <td v-else>
              <button class="btn btn-danger" @click="ban(user.id, 1)">ban</button>
            </td>
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
  methods: {
    ban (id, mode) {
      this.$http.post('/banuser', { id: id, ban: mode })
        .then((response) => {
          for (let user of this.users) {
            if (user.id === id) {
              user.ban = mode
              break
            }
          }
        })
    }
  },
  mounted () {
    this.$http.get('/getusers')
      .then((response) => {
        this.users = response.data.users
      })
  }
}
</script>
