import Vue from 'vue'
import App from './App.vue'
import store from './components/store/index'
import vuetify from './plugins/vuetify';
import router from './components/router/index'



Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,

  render: h => h(App)
}).$mount('#app')
