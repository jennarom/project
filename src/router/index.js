import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/listado',
    name: 'Listado',    
    component: () => import('../views/Listado.vue')
  },
  {
    path: '/proximo',
    name: 'Proximo',
    component: () => import('../views/Proximo.vue')
  },
  {
    path: '/vencido',
    name: 'Vencido',
    component: () => import ('../views/Vencido.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
