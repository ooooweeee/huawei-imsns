import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import im from './im'

Vue.config.productionTip = false

im.login('1000000000000')

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
