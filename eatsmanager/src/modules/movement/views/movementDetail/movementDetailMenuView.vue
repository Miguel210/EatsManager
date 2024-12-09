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
z
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
import type { Obj } from '../../interfaces/movementDetail.interface';
import { getMovementDetailsAction } from '../../actions/movementDetail/get-movementDetails.action';
  
  const {
    data: movement,
    isLoading,
    isError,
  } = useQuery<Obj>({
    queryKey: ['movementDt'],
    queryFn: () => getMovementDetailsAction(),
  });
  const dataTableInfo = ref<
    {
        id: string,
        document: string,
        folio: string,
        quantity: number,
        productId: string,
        priceUnit: string,
        subTotal: string,
        tax: string,
        total: string,
        costUnit: string,
        isActive: boolean
    }[]
    | undefined
  >([]);
  
  const datapaint = computed(() => {
    if (movement.value?.data && movement.value.data.length > 0) {
      
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      dataTableInfo.value = movement.value.data.map((e) => {
        return {
        id: e.id,
        document: e.movementId.document.description,
        folio: e.movementId.document.folio,
        quantity: e.quantity,
        productId: e.productId.description,
        priceUnit: e.priceUnit,
        subTotal: e.subTotal,
        tax: e.tax,
        total: e.total,
        costUnit: e.costUnit,
        isActive: e.isActive
        };
      });
    }
    return [];
  });
  
  const column = [
    { data: 'document', title: 'Documento' },
    { data: 'folio', title: 'Folio' },
    { data: 'quantity', title: 'cantidad' },
    { data: 'productId', title: 'preoducto' },
    { data: 'priceUnit', title: 'precio unitario' },
    { data: 'subTotal', title: 'SubTotal' },
    { data: 'tax', title: 'Taxas' },
    { data: 'total', title: 'total' },
    { data: 'costUnit', title: 'consto unitario' },
    { data: 'isActive', title: 'Estatus' },
  
];
  </script>
  
<style scoped></style>
  