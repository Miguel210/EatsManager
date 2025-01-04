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
      component: () => import('@/modules/client/views/tables/formTableView.vue')
    },
    {
      path: 'orden/:tableId',
      name: 'clientOrder',
      props: true,
      component: () => import('@/modules/client/views/clientOrder/FormClientOrderMenu.vue'),
    }
  ]
}
