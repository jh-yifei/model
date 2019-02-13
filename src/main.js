import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import Store from './store'
import 'common/stylus/index.styl'
import fastclick from 'fastclick'

fastclick.attach(document.body)
Vue.use(VueResource)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router: router,
  store: Store,
  render: h => h(App)
})
