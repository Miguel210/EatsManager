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
      routerLink="/empleado/empleados/"
      :is-delete="true"
      :functionDelete="deleteEmployeeById"
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
import { getEmployeesAction, deleteEmployeeById } from '../../actions/employee/index'; 
import { computed, ref } from 'vue';
import type { Obj } from '../../interfaces/employee.interface';

const {
  data: employee,
  isLoading,
  isError,
} = useQuery<Obj>({
  queryKey: ['employee'],
  queryFn: () => getEmployeesAction(),
});
const dataTableInfo = ref<
  | {
      id: string;
      fullname: string;
      profile: string;
      salary: string;
      input: string;
      hireDate: string;
      isActive: boolean;
    }[]
  | undefined
>([]);

const datapaint = computed(() => {
  console.log(employee);
  if (employee.value?.data && employee.value.data.length > 0) {
    
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    dataTableInfo.value = employee.value.data.map((e) => {
      const input = String(e.input);
      const output = String(e.output);
      const [ timeInput] = input.split("T");
      const formattedTimeInput = timeInput.split(".")[0]; // Elimina los milisegundos

      const [ timeOutput] = output.split("T");
      const formattedTimeOutput = timeOutput.split(".")[0]; // Elimina los milisegundos

      return {
        id: e.id,
        fullname: e.person.fullname,
        profile: e.person.profile.name,
        salary: e.salary,
        input: formattedTimeInput.toString(),
        hireDate: formattedTimeOutput.toString(),
        isActive: e.isActive,
      };
    });
  }
  return [];
});

const column = [
  { data: 'fullname', title: 'Nombre' },
  { data: 'profile', title: 'Perfil' },
  { data: 'salary', title: 'Salario' },
  { data: 'input', title: 'Entrada' },
  { data: 'hireDate', title: 'Fecha de entrada' },
  { data: 'isActive', title: 'Estatus' },
];
</script>

<style scoped></style>
