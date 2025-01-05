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
      empoyee: string;
      evaluator: string;
      date: string;
    }[]
  | undefined
>([]);

const datapaint = computed(() => {
  // console.log(employee);
  if (employee.value?.data && employee.value.data.length > 0) {
    
    
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    dataTableInfo.value = employee.value.data.map((e) => {

      const datetime = String(e.date);
        const [date, time] = datetime.split("T");
        const formattedTime = time.split(".")[0]; // Elimina los milisegundos
      return {
        id: e.id,
        empoyee: e.empoyee.person.fullname,
        evaluator: e.evaluator.person.fullname,
        date: String(date +' | '+ formattedTime),
      };
    });
  }
  return [];
});

const column = [
  {data: 'evaluator', title: 'Evaluador'},
    { data: 'empoyee', title: 'Empleado' },
    {data: 'date', title: 'Fecha'},

];
</script>

<style scoped></style>
