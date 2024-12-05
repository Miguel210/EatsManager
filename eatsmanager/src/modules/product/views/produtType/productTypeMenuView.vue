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
import { getProductTypesAction } from '../../actions/productType';
import type { Obj } from '../../interfaces/productType.interface';
  
  const {
    data: productType,
    isLoading,
    isError,
  } = useQuery<Obj>({
    queryKey: ['productType'],
    queryFn: () => getProductTypesAction(),
  });
  const dataTableInfo = ref<
    {
        id:          string;
        description: string;
        isActive:    boolean;
        useStock:    boolean;
    }[]
    | undefined
  >([]);
  
  const datapaint = computed(() => {
    if (productType.value?.data && productType.value.data.length > 0) {
      
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      dataTableInfo.value = productType.value.data.map((e) => {
        return {
        id: e.id,
        description: e.description,
        isActive: e.isActive,
        useStock: e.useStock,
        };
      });
    }
    return [];
  });
  
  const column = [
    { data: 'description', title: 'Nombre' },
    { data: 'useStock', title: 'Usa Stock?' },
    { data: 'isActive', title: 'Estatus' },
  ];
  </script>
  
  <style scoped></style>
  