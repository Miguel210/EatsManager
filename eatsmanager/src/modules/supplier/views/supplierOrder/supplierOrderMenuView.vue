<template>
    <div>
      <Button severity="danger" rounded label="Reporte" icon="pi pi-file-pdf" @click="generatePDF(dataTableInfo!,`Reporte-Movimientos-${ new Date() }`,'landscape')" />

        <DataTable
            :is-add="true"
            routerLink="/Proveedor/orden/"
            :is-delete="false"
            :is-update="true"
            :columns="column"
            :data="dataTableInfo"
            table-width="full"
            :search="true"
            :pagination="true"
        />
        <div>
            {{ datapaint }}
        </div>
        
    </div>
</template>

<script setup lang="ts">
import DataTable from '@/modules/common/components/DataTableBsic.vue';
import { getMovementAction } from '@/modules/movement/actions';
import type { Obj } from '@/modules/movement/interfaces/movement.interface';
  import { useQuery } from '@tanstack/vue-query';
  import { computed, ref } from 'vue';
import { generatePDF } from '@/modules/common/jspdf/jsPdf.config';
import { Button } from 'primevue';

  
  const {
    data: movement,
    // isLoading,
    // isError,
  } = useQuery<Obj>({
    queryKey: ['movement'],
    queryFn: () => getMovementAction(true),
  });
  const dataTableInfo = ref<
    {
        id: string;
        document: string;
        invoiceFolio: string ;
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

        const input = String(e.date);
      const [ timeInput] = input.split("T");
      const formattedTimeInput = timeInput.split(".")[0]; // Elimina los milisegundos

        return {
        id: e.id,
        document: e.documentId.description,
        invoiceFolio: e.supplierOrders?.[0]?.invoiceFolio || 'S/N',
        date: formattedTimeInput.toString(),
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
    { data: 'invoiceFolio', title: 'folio' },
    { data: 'date', title: 'Fecha' },
    { data: 'elaborate', title: 'Elaborado' },
    { data: 'person', title: 'Proveedor' },
    { data: 'amount', title: 'Cantidad' },
    { data: 'isActive', title: 'Estatus' },
  ];
</script>

<style scoped>

</style>