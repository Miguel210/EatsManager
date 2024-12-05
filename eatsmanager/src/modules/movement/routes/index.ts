import type { RouteRecordRaw } from "vue-router";



export const movementRoutes: RouteRecordRaw = {
  path: '/movimiento',
  name: 'movimiento',
  component: () => import('@/modules/movement/layouts/movementLayout.vue'),
  children: [
    {
      path: '',
      name: 'movimientoMenu',
      component: () => import('@/modules/movement/views/movementView.vue'),
    },
//todo Document
    {
      path: 'documentos/:documentId',
      name: 'documentoForm',
      props: true,
      component: () => import('@/modules/movement/views/document/formDocView.vue')
    },

  ]
}