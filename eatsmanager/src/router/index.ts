import { authRoutes } from '@/modules/auth/routes'
import { dashboardRoutes } from '@/modules/dashboard/routes'
import { employeeRoutes } from '@/modules/employee/routes'
import { movementRoutes } from '@/modules/movement/routes'
import { categoryRoutes } from '@/modules/product/routes'
import { supplierRoutes } from '@/modules/supplier/routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/modules/home/layouts/HomeLayout.vue'),
      children: [
        dashboardRoutes,
        supplierRoutes,
        employeeRoutes,
        movementRoutes,
        categoryRoutes
      ]
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },*/
    authRoutes
  ],
})

export default router
