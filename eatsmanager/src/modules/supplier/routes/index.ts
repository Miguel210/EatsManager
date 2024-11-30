import type { RouteRecordRaw } from "vue-router";



export const supplierRoutes: RouteRecordRaw = {
  path: '/proveedor',
  name: 'supplier',
  component: () => import('@/modules/supplier/layouts/supplierLayout.vue'),
  children: [
    {
      path: '',
      name: 'supplierMenu',
      component: () => import('@/modules/supplier/views/suppliersView.vue'),
    },
    {
      path: 'proveedores/:supplierId',
      name: 'admin-proveedor',
      props: true,
      component: () => import('@/modules/supplier/views/modalSupplier.vue')
    }
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
