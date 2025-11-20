import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/views/ProductList.vue'

const routes = [
  { path: '/', redirect: '/products' },
  { path: '/products', name: 'ProductList', component: ProductList }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
