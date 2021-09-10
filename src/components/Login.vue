<template lang="pug">
.container
  .logo Login
  .alert.alert-danger(v-if='error') {{error}}
  .login-item
    form.form.form-login(action="#" @submit.prevent="submit")
      .form-field
        label.user(for='login-username')
          span.hidden Username
        input#login-username.form-input(type='text' placeholder='Email' name="email" required='' v-model="form.email")
      .form-field
        label.lock(for='login-password')
          span.hidden Password
        input#login-password.form-input(type='password' name='password' placeholder='Password' required='' v-model="form.password")
      .form-field
        input(type='submit' value='Log in')
</template>

<script>
import * as firebase from 'firebase/app'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    submit () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: 'Dashboard' })
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
