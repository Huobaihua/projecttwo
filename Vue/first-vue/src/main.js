import Vue from 'vue'
import App from './App.vue'


//导入bootstrap样式
import '../node_modules/bootstrap/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
