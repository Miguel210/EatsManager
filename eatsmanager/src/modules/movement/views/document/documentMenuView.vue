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
        :is-add="true"
        router-link="movimiento/documentos/"
        :is-delete="true"
        :is-update="true"
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
import { getDocumentsAction } from '../../actions';
import type { Obj } from '../../interfaces/document.interface';
  
  const {
    data: document,
    isLoading,
    isError,
  } = useQuery<Obj>({
    queryKey: ['document'],
    queryFn: () => getDocumentsAction(),
  });
  const dataTableInfo = ref<
    {
        id: string;
        description: string;
        folio: number;
        isActive: boolean;
    }[]
    | undefined
  >([]);
  
  const datapaint = computed(() => {
    if (document.value?.data && document.value.data.length > 0) {
      
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      dataTableInfo.value = document.value.data.map((e) => {
        return {
        id: e.id,
        description: e.description,
        folio: e.folio,
        isActive: e.isActive,
        };
      });
    }
    return [];
  });
  
  const column = [
    { data: 'description', title: 'Documento' },
    { data: 'folio', title: 'Folio' },
    { data: 'isActive', title: 'Estatus' },
  ];
  </script>
  
  <style scoped></style>
  