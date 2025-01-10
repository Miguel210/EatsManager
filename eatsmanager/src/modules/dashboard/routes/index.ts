import type { RouteRecordRaw } from "vue-router";



export const dashboardRoutes: RouteRecordRaw = {
  path: '/',
  name: 'dashboard',
  component: () => import('@/modules/dashboard/layouts/DashboardLayout.vue'),
  children: [
    {
      path: 'dashboardAdm',
      name: 'admin',
      component: () => import('@/modules/dashboard/views/AdminView.vue'),
    },
    {
      path: 'dashboardEmp',
      name: 'dashboardEmp',
      component: () => import('@/modules/dashboard/views/EmployeeView.vue'),
    },
    {
      path: 'dashboardSup',
      name: 'dashboardSup',
      component: () => import('@/modules/dashboard/views//SupervisorView.vue'),
    }
  ]
}
