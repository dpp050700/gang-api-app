import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/config',
    name: 'Config',
    component: () => import(/* webpackChunkName: "about" */ '../views/config.vue')
  },
  {
    path: '/api',
    name: 'Api',
    component: () => import(/* webpackChunkName: "about" */ '../views/apiManage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
