import type { RouteRecordRaw } from "vue-router";



export const clientRoutes: RouteRecordRaw = {
  path: '/ventas',
  name: 'ventas',
  component: () => import('@/modules/client/layouts/clientLayout.vue'),
  children: [
    {
      path: '',
      name: 'clientMenu',
      component: () => import('@/modules/client/views/clientsMenuView.vue'),
    },
    {
      path: 'mesas/:tableId',
      name: 'admin-mesas',
      props: true,
      component: () => import('@/modules/client/views/clientOrder/formTableView.vue')
    },
    // {
    //   path: 'orden/:suppierOrderId',
    //   name: 'supplierOrder',
    //   props: true,
    //   component: () => import('@/modules/supplier/views/supplierOrder/FormSupOrderView.vue'),
    // }
  ]
}
