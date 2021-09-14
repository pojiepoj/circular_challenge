<template lang="pug">
div.login-wrap
  SubHome(v-if='home')
  Login(v-if='login')
  Register(v-if='register')
br
div(v-if='home')
  | click here to
  span(@click='loginToggle')  Login
  |  or to
  span(@click='registerToggle')  Register
div(v-if='login')
  | click here to
  span(@click='registerToggle')  Register
  |  or back to
  span(@click='homeToggle')  Home
div(v-if='register')
  | click here to
  span(@click='loginToggle')  Login
  |  or back to
  span(@click='homeToggle')  Home
</template>

<script>
// @ is an alias to /src
import SubHome from '@/components/SubHome.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'Home',
  components: {
    SubHome,
    Login,
    Register
  },
  data () {
    return {
      login: false,
      register: false,
      home: true
    }
  },
  methods: {
    loginToggle () {
      this.login = true
      this.home = false
      this.register = false
    },
    registerToggle () {
      this.login = false
      this.home = false
      this.register = true
    },
    homeToggle () {
      this.login = false
      this.home = true
      this.register = false
    }
  }
}
</script>

<style lang="scss" scoped>
span{
  cursor: pointer;
}
</style>
