<template lang="pug">
div.login-wrap
  Login(v-if='login')
  Register(v-if='!login')
div(v-if='login')
  | click here to
  span(@click='loginToggle') Register
div(v-if='!login')
  | click here to
  span(@click='loginToggle') Login
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'Home',
  components: {
    Login,
    Register
  },
  data () {
    return {
      login: true
    }
  },
  methods: {
    loginToggle () {
      this.login = !this.login
    }
  }
}
</script>

<style lang="scss" scoped>
span{
  cursor: pointer;
}
</style>
