import type { RouteRecordRaw } from "vue-router";



export const dashboardRoutes: RouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('@/modules/dashboard/layouts/DashboardLayout.vue'),
  /*children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/modules/auth/views/LoginView.vue'),
    }
  ]*/
}
