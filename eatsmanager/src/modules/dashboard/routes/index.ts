import type { RouteRecordRaw } from "vue-router";



export const dashboardRoutes: RouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('@/modules/dashboard/layouts/DashboardLayout.vue'),
  children: [
    {
      path: 'admin',
      name: 'admin',
      component: () => import('@/modules/dashboard/views/AdminView.vue'),
    }
  ]
}
