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
import { getCategoriesAction } from '../../actions/category';
import type { Obj } from '../../interfaces/category.interface';
  
  const {
    data: category,
    isLoading,
    isError,
  } = useQuery<Obj>({
    queryKey: ['category'],
    queryFn: () => getCategoriesAction(),
  });
  const dataTableInfo = ref<
    {
    id:           string;
    categoryName: string;
    isActive:     boolean;
    }[]
    | undefined
  >([]);
  
  const datapaint = computed(() => {
    if (category.value?.data && category.value.data.length > 0) {
      
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      dataTableInfo.value = category.value.data.map((e) => {
        return {
        id: e.id,
        categoryName: e.categoryName,
        isActive: e.isActive,
        };
      });
    }
    return [];
  });
  
  const column = [
    { data: 'categoryName', title: 'Nombre' },
    { data: 'isActive', title: 'Estatus' },
  ];
  </script>
  
  <style scoped></style>
  