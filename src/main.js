import Vue from 'vue'
import App from './App.vue'
import GdsButton from './components/GdsButton.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export { GdsButton }