import Vue from 'vue'
import Router from 'vue-router'
import indexView from '../views/indexView.vue'
import HomeView from '../views/HomeView.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: indexView,
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView
        }
      ]
    }
  ]
})
