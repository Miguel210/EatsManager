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
        <!-- {{ datapaint }} -->
          
        
      </template>
    </div>
  </template>
  
  <script setup lang="ts">
  import DataTable from '@/modules/common/components/DataTableBsic.vue';
  import { useQuery } from '@tanstack/vue-query';
  import {  ref, watchEffect } from 'vue';
import type { Obj } from '../../interfaces/inventory.interface';
import { getInvenotoriesAction } from '../../actions/inventory';

  
  const {
    data: inventory,
    isLoading,
    isError,
  } = useQuery<Obj>({
    queryKey: ['inventory'],
    queryFn: () => getInvenotoriesAction(),
  });
  const dataTableInfo = ref<
    {
        id:       string;
        document: string;
        folio: string;
        product:  string;
        quantity: number;
    }[]
    | undefined
  >([]);
  watchEffect(() => {
    
      if (inventory.value?.data && inventory.value.data.length > 0) {
        
        dataTableInfo.value = inventory.value.data.map((e) => {
          console.log(e);
          
          return {
          id:       e.id,
          document: e.movement.document.description,
          folio:    e.movement.supplierOrders?.[0]?.invoiceFolio || 'S/N',
          product:  e.product.description,
          quantity: e.quantity,
          };
        });
      }
      return [];
    
  });
  
  const column = [
    { data: 'document', title: 'Documento' },
    { data: 'folio', title: 'Folio' },
    { data: 'product', title: 'Producto' },
    { data: 'quantity', title: 'Cantidad' },

  ];
  </script>
  
  <style scoped></style>
  