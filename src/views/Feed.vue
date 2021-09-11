<template lang="pug">
.login-wrap
  .box
    h1 Welcome {{ user?.email }}
        span.myButton(@click='signOutUser')  Logout
    .button__wrapper
        span.button__pokemon(@click='randomPokemon')  Generate Pokemon
    form.example(action="#" @submit.prevent="submit")
      .wrapper
        label(for='text') Search Pokemon
        input#text(type='text')
        input(type='submit' value='Send')
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
      api: 'https://pokeapi.co/api/v2/pokemon/',
      pokemon: []
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
    },
    submit () {
      this.ranNum = Math.floor((Math.random() * 898) + 1)
      this.axios.get(this.api + this.ranNum).then((response) => {
        console.log(response.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: inherit;
  height: inherit;
}

.example{
  width: 100%;
  height: 100%;
}

.example label{
    margin: 0;
    font-size: 1.2em;
    font-weight: normal;
    padding: 10px;
    background-color: #666;
    color: #fff;
}

.button__wrapper{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 0 10px 0;
}

.button__pokemon{
    appearance: auto;
    user-select: none;
    white-space: pre;
    align-items: flex-start;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    background-color: rgba(96, 139, 168,1);
    color: #fff;
    border-radius: 0.25rem;
    padding: 1rem;
}

.button__pokemon:hover {
  background-color:rgba(96, 139, 168,1);
}
.button__pokemon:active {
  position:relative;
  top:1px;
}

.wrapper {
  display: flex;
}

.wrapper input[type="submit"] {
    appearance: auto;
    user-select: none;
    white-space: pre;
    align-items: flex-start;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    background-color: rgba(96, 139, 168,1);
    color: #fff;
    border-radius: 0.25rem;
    padding: 1rem;
}

.wrapper input[type="text"] {
    background-color: rgba(96, 139, 168,.5);
    border-right: 1px solid rgb(96, 139, 168);
    flex: 1 1 auto;
        margin: 0;
    font-size: 1.2em;
    font-weight: normal;
    padding: 10px;
}

.myButton {
  box-shadow:inset 0px 39px 0px -24px #e67a73;
  background:linear-gradient(to bottom, #e4685d 5%, #eb675e 100%);
  background-color:#e4685d;
  border-radius:4px;
  border:1px solid #ffffff;
  display:inline-block;
  cursor: pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:15px;
  padding:6px 15px;
  text-decoration:none;
  text-shadow:0px 1px 0px #b23e35;
}
.myButton:hover {
  background:linear-gradient(to bottom, #eb675e 5%, #e4685d 100%);
  background-color:#eb675e;
}
.myButton:active {
  position:relative;
  top:1px;
}
</style>
