<template>
  <!-- <h1>Graphic</h1> -->
  <div>
    <div class="flex flex-row flex-wrap content-start mb-20">

      <StatCard
      :data="dashboard?.data.Ordenes_Pendientes"
      target-name="Ordenes Pendientes"
      />
      <StatCard
      :data="dashboard?.data.Ventas_Empleados"
      target-name="Ventas Empleados"
      />

    </div>

    <div class="flex justify-between">
      <!-- DataTable -->
    </div>
    <DataTable
      :is-add="false"
      :is-delete="false"
      :is-update="false"
      :columns="column"
      :data=" dashboard?.data.Ordenes "
      table-width="full"
      :search="false"
      :pagination="false"
    />
  </div>

</template>

<script setup lang="ts">
import StatCard from '@/modules/common/components/StatCard.vue';
import DataTable from '@/modules/common/components/DataTableBsic.vue';
import { getDashboardsAction } from '../actions/get-dashboards.action';
import { useQuery } from '@tanstack/vue-query';
import type {  Dashboard } from '../interfaces/dashboard.interface';

const module = 'dashboardEmp';
const {data: dashboard } = useQuery<Dashboard>({
  queryKey: ['dashboards', {module: module}],
  queryFn: () => getDashboardsAction(module)
});

const column = [
  { data: 'id' },
  { data: 'elaborateId', title: "elaborado" },
  { data: 'status', title: 'estatus'},
];

</script>

<style scoped></style>
