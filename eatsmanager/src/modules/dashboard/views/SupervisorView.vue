<template>
  <!-- <h1>Graphic</h1> -->
  <div>

    <div class="flex flex-row flex-wrap content-start mb-20">
      <StatCard
      :data="dashboard?.data.Ordenes_Pendientes"
      target-name="Ordenes Pendientes"
      />
      <StatCard
      :data="dashboard?.data.Ordenes_del_Dia"
      target-name="Ordenes del Dia"
      />

    </div>

    <div class=" justify-between w-full">
      <DataTable
      :is-add="true"
      :is-delete="true"
      :is-update="true"
      :columns="column"
      :data=" dashboard?.data.Ordenes "
      table-width="fit"
      :search="false"
      :pagination="false"
    />
      <!-- <DataTable
      :is-add="true"
      :is-delete="true"
      :is-update="true"
      :columns="column2"
      :data=" dashboard?.data.Empleados_Asistidos "
      table-width="full"
    /> -->
    </div>
  </div>


</template>

<script setup lang="ts">
import StatCard from '@/modules/common/components/StatCard.vue';
import DataTable from '@/modules/common/components/DataTableBsic.vue';
import { useQuery } from '@tanstack/vue-query';
import type { Dashboard } from '../interfaces/dashboard.interface';
import { getDashboardsAction } from '../actions/get-dashboards.action';
// import { computed } from 'vue';

const module = 'dashboardSup';

const {  data: dashboard } = useQuery<Dashboard>({
  queryKey: ['dashboards', {module: module}],
  queryFn: async() => await getDashboardsAction(module)
});

const column = [
  { data: 'id' },
  { data: 'elaborateId', title: "elaborado" },
  { data: 'status', title: 'estatus'},
];
// const column2 = [
//   { data: 'date', title: "date" },
//   { data: 'status', title: 'estatus'},
// ];
</script>

<style scoped></style>
