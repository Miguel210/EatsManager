<template>
    <div>
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

<style scoped>

</style>