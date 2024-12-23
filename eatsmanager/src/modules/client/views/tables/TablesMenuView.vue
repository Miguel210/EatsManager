<template>
        <div>
        <DataTable
            :is-add="true"
            routerLink="/ventas/mesas/"
            :is-delete="true"
            :function-delete="deleteTableById"
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
import { getClientsAction, deleteTableById} from '@/modules/client/actions/tables';
import type { Obj } from '@/modules/client/interfaces/tables.interface';
  import { useQuery } from '@tanstack/vue-query';
  import { computed, ref } from 'vue';

  
  const {
    data: clients,
    // isLoading,
    // isError,
  } = useQuery<Obj>({
    queryKey: ['table'],
    queryFn: () => getClientsAction(),
  });
  const dataTableInfo = ref<
    {
        id: string;
        description: string;
        status: string;
        isActive: boolean;
    }[]
    | undefined
  >([]);
  
  const datapaint = computed(() => {
    if (clients.value?.data && clients.value.data.length > 0) {
      
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      dataTableInfo.value = clients.value.data.map((e) => {

        
        return {
        id: e.id,
        description: e.description,
        status: e.status,
        isActive: e.isActive,
        };
      });
    }
    return [];
  });
  
  const column = [
    { data: 'description', title: 'Descripcion' },
    { data: 'status', title: 'Estatus' },
    { data: 'isActive', title: 'Esta Activiva?' },
  ];
</script>

<style scoped>

</style>