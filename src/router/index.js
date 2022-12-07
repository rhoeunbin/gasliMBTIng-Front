import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'

import Mbit from '../views/dashboard/Mbti.vue'
import AddMbit from '../views/dashboard/AddMbti.vue'

import Communities from '../views/dashboard/Communities.vue'
import AddCommunity from '../views/dashboard/AddCommunity.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/mbti',
    name: 'Mbti',
    component: Mbit,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/communities',
    name: 'Communities',
    component: Communities,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/mbti/add',
    name: 'AddMbti',
    component: AddMbit,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/communities/add',
    name: 'AddCommunity',
    component: AddCommunity,
    meta: {
      requireLogin: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/log-in')
  } else {
    next()
  }
})

export default router
