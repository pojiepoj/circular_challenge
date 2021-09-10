<template lang="pug">
.container
  .logo Login
  .alert.alert-danger(v-if='error') {{error}}
  .login-item
    form.form.form-login(action="#" @submit.prevent="submit")
      .form-field
        label.user(for='login-username')
          span.hidden Username
        input#login-username.form-input(type='text' placeholder='Email' name="email" required='')
      .form-field
        label.lock(for='login-password')
          span.hidden Password
        input#login-password.form-input(type='password' name='password' placeholder='Password' required='')
      .form-field
        input(type='submit' value='Log in')
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const auth = getAuth()
    const router = useRouter()
    const submit = async e => {
      const { email, password } = e.target.elements
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        router.push('/feed')
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
