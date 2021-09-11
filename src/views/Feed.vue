<template lang="pug">
h1 Welcome {{ user?.email }}
    button(@click='signOutUser')  Logout
    button(@click='randomPokemon')  Random Pokemon
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from '../firebase'
import { useRouter } from 'vue-router'
export default {
  name: 'Feed',
  data () {
    return {
      ranNum: '',
      loadNum: '',
      api: ''
    }
  },
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
  },
  mounted () {
    this.ranNum = Math.floor((Math.random() * 898) + 1)
    this.axios.get(this.api + this.ranNum).then((response) => {
      console.log(response.data)
    })
  },
  methods: {
    randomPokemon () {
      this.ranNum = Math.floor((Math.random() * 898) + 1)
      this.axios.get(this.api + this.ranNum).then((response) => {
        console.log(response.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
