import type { RouteRecordRaw } from "vue-router";



export const supplierRoutes: RouteRecordRaw = {
  path: '/supplier',
  name: 'supplier',
  component: () => import('@/modules/supplier/layouts/supplierLayout.vue'),
  children: [
    {
      path: '',
      name: 'supplierMenu',
      component: () => import('@/modules/supplier/views/supplierView.vue'),
    },
    // {
    //   path: 'empleado',
    //   name: 'empleado',
    //   component: () => import('@/modules/dashboard/views/EmployeeView.vue'),
    // },
    // {
    //   path: 'supervisor',
    //   name: 'supervisor',
    //   component: () => import('@/modules/dashboard/views//SupervisorView.vue'),
    // }
  ]
}
