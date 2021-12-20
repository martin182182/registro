import Vue from 'vue'
import VueRouter from 'vue-router'
import Crear from '../views/Crear.vue'
import Lista from '../views/Lista.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  },
  {
    path: '/lista',
    name: 'Lista',
    component: Lista
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
