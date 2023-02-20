import Vue from 'vue'
import store from "./store";
import App from './App.vue'
import router from './router'
import Paginate from 'vuejs-paginate'

import './assets/main.css'
Vue.component('paginate', Paginate)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
