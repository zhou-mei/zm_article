import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import router from './router/index'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

import 'element-ui/lib/theme-chalk/index.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
