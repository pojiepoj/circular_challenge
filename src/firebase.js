import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref, computed, onMounted, onUnmounted } from 'vue'

import { initializeApp } from 'firebase/app'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCuGHDwAT2WqmdSgxF4mU4CLp9izQkLa1U',
  authDomain: 'pokemon-challange.firebaseapp.com',
  projectId: 'pokemon-challange',
  storageBucket: 'pokemon-challange.appspot.com',
  messagingSenderId: '98622271907',
  appId: '1:98622271907:web:92c27240933f1428acaa16',
  measurementId: 'G-78L9VKWJNM'
})

export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  )

export const useAuthState = () => {
  const user = ref(null)
  const error = ref(null)

  const auth = getAuth()
  let unsubscribe
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      u => (user.value = u),
      e => (error.value = e)
    )
  })
  onUnmounted(() => unsubscribe())

  const isAuthenticated = computed(() => user.value != null)

  return { user, error, isAuthenticated }
}
