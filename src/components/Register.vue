<template lang="pug">
.container
  .logo Register User
  .alert.alert-danger(v-if='error') {{error}}
  .login-item
    form.form.form-login(action="#" @submit.prevent="submit")
      .form-field
        label.user(for='login-name')
          span.hidden Name
        input#login-name.form-input(type='text' placeholder='Name' name="name" required='' v-model="form.name")
      .form-field
        label.user(for='login-email')
          span.hidden Email
        input#login-email.form-input(type='text' placeholder='Email' name="email" required='' v-model="form.email")
      .form-field
        label.lock(for='login-password')
          span.hidden Password
        input#login-password.form-input(type='password' name='password' placeholder='Password' required='' v-model="form.password")
      .form-field
        input(type='submit' value='Register')
</template>

<script>
// import { firebase } from 'firebase/app'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth()

const router = useRouter()

export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    submit () {
      // firebase
      //  .auth()
      createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
        .then((data) => {
          console.log('Successfully registered!')
          router.push('/feed') // redirect to the feed
        })
        .catch(error => {
          console.log(error.code)
          alert(error.message)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
