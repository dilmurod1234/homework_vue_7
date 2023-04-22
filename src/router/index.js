import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from "../views/LoginApp.vue"
import Clients from "../views/Clients.vue"
import Suppliers from "../views/Suppliers.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/clients',
    name: "clients",
    component: Clients
  },
  {
    path: '/suppliers',
    name: "suppliers",
    component: Suppliers
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
