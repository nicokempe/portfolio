import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
      return import('../views/ContactView.vue')
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: function () {
      return import('../views/ProjectsView.vue')
    },
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: function () {
      return import('../views/ImprintView.vue')
    }
  },
  {
    path: '/policies',
    name: 'Policies',
    component: function () {
      return import('../views/PoliciesView.vue')
    }
  },
  {
    path: '/404',
    name: '404',
    component: function () {
      return import('../views/404View.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
