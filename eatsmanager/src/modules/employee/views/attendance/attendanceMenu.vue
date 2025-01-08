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
        <Button severity="danger" rounded label="Reporte" icon="pi pi-file-pdf" @click="generatePDF(dataTableInfo!,`Reporte-Movimientos-${ new Date() }`,'landscape')" />
      
        <DataTable
        :is-add="true"
        routerLink="/empleado/asistencias/"
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
  import type { Data } from '../../interfaces/attendance.interface';
import { getAttendancesAction } from '../../actions/attendance';
import { generatePDF } from '@/modules/common/jspdf/jsPdf.config';
import { Button } from 'primevue';

  const {
    data: employee,
    isLoading,
    isError,
  } = useQuery<Data>({
    queryKey: ['attendanceGets'],
    queryFn: () => getAttendancesAction(),
  });
  const dataTableInfo = ref<
    | {
        empoyee: string;
        date: string;
        hour: string;
        document: string
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
        
        console.log(e);
        return {
          empoyee: String(e.employeeId.person.fullname),
          date: date,
          hour: formattedTime,
          document: String(e.documentId.description),

        };
      });
    }
    return [];
  });
  
  const column = [
    { data: 'empoyee', title: 'Empleado' },
    {data: 'date', title: 'Fecha'},
    {data: 'hour', title: 'Hora'},
    {data: 'document', title: 'Documento'},
  
  ];
  </script>
  
  <style scoped></style>
  