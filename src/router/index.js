import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/trainer',
    name: 'Trainer',
    component: () => import('../views/Trainer.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
