import type { RouteRecordRaw } from "vue-router";



export const categoryRoutes: RouteRecordRaw = {
  path: '/producto',
  name: 'producto',
  component: () => import('@/modules/movement/layouts/movementLayout.vue'),
  children: [
    {
      path: '',
      name: 'productoMenu',
      component: () => import('@/modules/product/views/productMenuView.vue'),
    },
//todo category
    // {
    //   path: 'categorias/:categoryId',
    //   name: 'categoryForm',
    //   props: true,
    //   component: () => import('@/modules/product/views/category/formCatView.vue')
    // },

  ]
}