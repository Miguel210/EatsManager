<template>
    <!-- :functionDelete="deleteemployeeById" -->
    <div>
      <template v-if="isLoading">
        <p>Cargando datos...</p>
      </template>
      <template v-else-if="isError">
        <p>Error al cargar los datos</p>
      </template>
      
      <template v-else>

        <DataTable
        :is-add="false"
        :is-delete="false"
        :is-update="false"
        :columns="column"
        :data="dataTableInfo"
        table-width="full"
        :search="true"
        :pagination="true"
        />
        {{ datapaint }}
          
        
      </template>
    </div>
  </template>
  
  <script setup lang="ts">
  import DataTable from '@/modules/common/components/DataTableBsic.vue';
  import { useQuery } from '@tanstack/vue-query';
  import { computed, ref } from 'vue';
  import type { Obj } from '../../interfaces/product.interface';
  import { getProductsAction } from '../../actions/product';

  
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<Obj>({
    queryKey: ['product'],
    queryFn: () => getProductsAction(),
  });
  const dataTableInfo = ref<
    {
    id:            string;
    code:          string;
    description:   string;
    existence:     number;
    price:         string;
    productTypeId: string;
    categoryId:    string;
    viewMenu:      boolean;
    isActive:      boolean;
    image:         string | 'S/N';
    }[]
    | undefined
  >([]);
  
  const datapaint = computed(() => {
    if (product.value?.data && product.value.data.length > 0) {
      
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      dataTableInfo.value = product.value.data.map((e) => {
        return {
        id: e.id,
        code:          e.code,
        description:   e.description,
        existence:     e.existence,
        price:         e.price,
        productTypeId: e.productTypeId.description,
        categoryId:    e.categoryId.categoryName,
        viewMenu:      e.viewMenu,
        isActive:      e.isActive,
        image:         e.image ,
        };
      });
    }
    return [];
  });
  
  const column = [
    { data: 'code', title: 'Codigo' },
    { data: 'description', title: 'Nombre' },
    { data: 'existence', title: 'Existencia' },
    { data: 'price', title: 'Precio' },
    { data: 'productTypeId', title: 'Tipo' },
    { data: 'categoryId', title: 'Categoria' },
    { data: 'viewMenu', title: 'Esta en menu?' },
    { data: 'isActive', title: 'Estatus' },
    { data: 'image', title: 'Imagen' },

  ];
  </script>
  
  <style scoped></style>
  