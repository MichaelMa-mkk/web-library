<template>
  <div>
    <input type="text" v-model="tip" />
    <input type="button" @click="aa" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tip: ''
    }
  },
  methods: {
    aa () {
      this.$http.post('/getsales')
        .then(function (response) {
          console.log(response)
          if (response.status === 200) {
            alert(response.data.tip)
          }
        })
    }
  }
}
</script>
