// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'
import './utils/rem'
import { Swipe, SwipeItem, Lazyload, Tabbar, TabbarItem, Icon } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  beforeCreate () {
    Vue.prototype.$bus = this
  }
})
