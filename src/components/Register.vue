<template lang="pug">
.container
  .logo Register User
  .alert.alert-danger(v-if='error') {{error}}
  .login-item
    form.form.form-login(action="#" @submit.prevent="submit")
      .form-field
        label.user(for='login-email')
          span.hidden Email
        input#login-email.form-input(type='text' placeholder='Email' name="email" required='')
      .form-field
        label.lock(for='login-password')
          span.hidden Password
        input#login-password.form-input(type='password' name='password' placeholder='Password' required='')
      .form-field
        input(type='submit' value='Register')
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
export default {
  name: 'Register',
  setup () {
    const auth = getAuth()
    const router = useRouter()
    const submit = async e => {
      const { email, password } = e.target.elements
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        router.push('/')
      } catch (e) {
        alert(e.message)
      }
    }
    return { submit }
  }
}
</script>

<style lang="scss" scoped>

</style>
