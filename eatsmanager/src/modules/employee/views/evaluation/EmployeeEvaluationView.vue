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
      routerLink="/empleado/evaluaciones/"
      :is-delete="false"
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
import { getEvaluationsAction } from '../../actions/evaluation/get-evaluations.actions';
import type { DataTableDt } from '../../interfaces/evaluation.interface';

const {
  data: employee,
  isLoading,
  isError,
} = useQuery<DataTableDt>({
  queryKey: ['evaluation'],
  queryFn: () => getEvaluationsAction(),
});
const dataTableInfo = ref<
  | {
      id: string;
      employeeId: string;
      date: string;
    }[]
  | undefined
>([]);

const datapaint = computed(() => {
  console.log(employee);
  if (employee.value?.data && employee.value.data.length > 0) {
    
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    dataTableInfo.value = employee.value.data.map((e) => {
      return {
        id: e.id,
        employeeId: e.employeeId,
        date: e.date,
      };
    });
  }
  return [];
});

const column = [
    { data: 'id', title: 'Nombre' },
    {data: 'employeeId', title: 'Empleado'},
    {data: 'date', title: 'Fecha'},

];
</script>

<style scoped></style>
