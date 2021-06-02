import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'Login',
  component: () => import('../views/login/login.vue')
}]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.name && to.path == '/') {
    next({
      name: 'Login'
    })
  }
  next()
})

export default router