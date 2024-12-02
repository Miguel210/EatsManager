import type { RouteRecordRaw } from "vue-router";



export const dashboardRoutes: RouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('@/modules/dashboard/layouts/DashboardLayout.vue'),
  children: [
    {
      path: '',
      name: 'admin',
      component: () => import('@/modules/dashboard/views/AdminView.vue'),
    },
    {
      path: 'Dashempleado',
      name: 'Dashempleado',
      component: () => import('@/modules/dashboard/views/EmployeeView.vue'),
    },
    {
      path: 'supervisor',
      name: 'supervisor',
      component: () => import('@/modules/dashboard/views//SupervisorView.vue'),
    }
  ]
}
