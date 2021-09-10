<template lang="pug">
h1 Hello world
    button(@click='signOutUser')  Logout
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from '../firebase'
import { useRouter } from 'vue-router'
export default {
  name: 'Feed',
  setup () {
    const { user } = useAuthState()
    const auth = getAuth()
    const router = useRouter()
    const signOutUser = async () => {
      try {
        await signOut(auth)
        router.push('/')
      } catch (e) {
        alert(e.message)
      }
    }
    return { user, signOutUser }
  }
}
</script>

<style lang="scss" scoped>

</style>
