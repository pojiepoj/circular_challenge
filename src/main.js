import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase/app'

//  Firebase Configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCuGHDwAT2WqmdSgxF4mU4CLp9izQkLa1U',
  authDomain: 'pokemon-challange.firebaseapp.com',
  projectId: 'pokemon-challange',
  storageBucket: 'pokemon-challange.appspot.com',
  messagingSenderId: '98622271907',
  appId: '1:98622271907:web:92c27240933f1428acaa16'
}

firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')