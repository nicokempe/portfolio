import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: function () {
      return import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
    }
  },
  {
    path: '/policies',
    name: 'Policies',
    component: function () {
      return import(/* webpackChunkName: "policies" */ '../views/PoliciesView.vue')
    }
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: function () {
      return import(/* webpackChunkName: "imprint" */ '../views/ImprintView.vue')
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: function () {
      return import(/* webpackChunkName: "projects" */ '../views/ProjectsView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
