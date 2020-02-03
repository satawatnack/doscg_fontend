import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/FindingXYZ',
      name: 'FindingXYZ',
      component: () => import('./views/FindingXYZ')
    },
    {
      path: '/FindingBC',
      name: 'FindingBC',
      component: () => import('./views/FindingBC')
    },
    {
      path: '/FindingDistance',
      name: 'FindingDistance',
      component: () => import('./views/FindingDistance')
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: () => import('./views/AboutMe')
    }
  ],
  scrollBehavior () {
    document.getElementById('app').scrollIntoView()
  }
})
