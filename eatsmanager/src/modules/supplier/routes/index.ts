import type { RouteRecordRaw } from "vue-router";



export const supplierRoutes: RouteRecordRaw = {
  path: '/proveedor',
  name: 'supplier',
  component: () => import('@/modules/supplier/layouts/supplierLayout.vue'),
  children: [
    {
      path: '',
      name: 'supplierMenu',
      component: () => import('@/modules/supplier/views/suppliersMenuView.vue'),
    },
    {
      path: 'proveedores/:supplierId',
      name: 'admin-proveedor',
      props: true,
      component: () => import('@/modules/supplier/views/supplier/modalSupplier.vue')
    },
    {
      path: 'orden/:suppierOrderId',
      name: 'supplierOrder',
      props: true,
      component: () => import('@/modules/supplier/views/supplierOrder/FormSupOrderView.vue'),
    },
    // {
    //   path: 'supervisor',
    //   name: 'supervisor',
    //   component: () => import('@/modules/dashboard/views//SupervisorView.vue'),
    // }
  ]
}
