import type { RouteRecordRaw } from "vue-router";



export const categoryRoutes: RouteRecordRaw = {
  path: '/producto',
  name: 'producto',
  component: () => import('@/modules/movement/layouts/movementLayout.vue'),
  children: [
    {
      path: '',
      name: 'productoMenu',
      component: () => import('@/modules/product/views/productView.vue'),
    },
//todo product
    // {
    //   path: 'productos/:productId',
    //   name: 'productForm',
    //   props: true,
    //   component: () => import('@/modules/product/views/product/formProdView.vue')
    // },

//todo category
    {
      path: 'categorias/:categoryId',
      name: 'categoryForm',
      props: true,
      component: () => import('@/modules/product/views/category/fromCatView.vue')
    },
//todo product type
    // {
    //   path: 'tipos/:producttypeId',
    //   name: 'productTypeForm',
    //   props: true,
    //   component: () => import('@/modules/product/views/type/formTypeView.vue')
    // },
//todo inventory
    // {
    //   path: 'inventarios/:inventoryId',
    //   name: 'inventoryForm',
    //   props: true,
    //   component: () => import('@/modules/product/views/inventory/formInvView.vue')
    // },
//todo garrision
    // {
    //   path: 'guarniciones/:garrisiomId',
    //   name: 'garrisionForm',
    //   props: true,
    //   component: () => import('@/modules/product/views/garrision/formGarrView.vue')
    // },

  ]
}