import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App2.vue'

Vue.config.productionTip = false

Vue.use(VueAxios, axios) //追記

new Vue({
  render: h => h(App),
}).$mount('#app')
