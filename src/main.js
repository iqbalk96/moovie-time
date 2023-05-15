import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.config.productionTip = false
Vue.use(Buefy, {
  defaultIconPack: 'mdi'
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
