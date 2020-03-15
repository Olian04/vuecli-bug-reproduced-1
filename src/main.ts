import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { greet } from './workers/greeting.worker'

async function demo () {
  console.log(await greet('dog'))
}
demo()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
