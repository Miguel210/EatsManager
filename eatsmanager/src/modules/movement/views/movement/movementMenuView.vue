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
        <div class="flex flex-row-reverse">

            <ButtonCustom 
            type-button="success"
            label-data="Compra"
            icon-button="pi pi-truck"
            :is-toast="false"
            />
            <ButtonCustom 
            type-button="success"
            label-data="Venta"
            icon-button="pi pi-shopping-cart"
            :is-toast="false"
            />
    
            <ButtonCustom 
            type-button="warn"
            label-data="Devolucion de Compra"
            icon-button="pi pi-arrow-left"
            :is-toast="false"
            />
    
            <ButtonCustom 
            type-button="danger"
            label-data="Devolucion de Venta"
            icon-button="pi pi-refresh"
            :is-toast="false"
            />
        </div>


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
import { getMovementAction } from '../../actions';
import type { Obj } from '../../interfaces/movement.interface';
import ButtonCustom from '@/modules/common/components/ButtonCustom.vue';

  
  const {
    data: movement,
    isLoading,
    isError,
  } = useQuery<Obj>({
    queryKey: ['movement'],
    queryFn: () => getMovementAction(),
  });
  const dataTableInfo = ref<
    {
        id: string;
        document: string;
        folio: number;
        date: string,
        elaborate: string | undefined;
        person: string | undefined; 
        amount: string;
        status: string;
        isActive: boolean;
    }[]
    | undefined
  >([]);
  
  const datapaint = computed(() => {
    if (movement.value?.data && movement.value.data.length > 0) {
      
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      dataTableInfo.value = movement.value.data.map((e) => {
        return {
        id: e.id,
        document: e.documentId.description,
        folio: e.documentId.folio,
        date: e.date,
        elaborate: e.elaborateId?.person.fullname,
        person: e.personId.fullname ,
        amount: e.amount,
        status: e.status,
        isActive: e.isActive,
        };
      });
    }
    return [];
  });
  
  const column = [
    { data: 'document', title: 'Documento' },
    { data: 'folio', title: 'folio' },
    { data: 'date', title: 'Fecha' },
    { data: 'elaborate', title: 'Elaborado' },
    { data: 'person', title: 'Cliente' },
    { data: 'amount', title: 'Cantidad' },
    { data: 'isActive', title: 'Estatus' },
  ];
  </script>
  
<style scoped></style>
  