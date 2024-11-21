<template>
  <!-- <h1>Graphic</h1> -->
  <div>
    <div class="flex flex-row flex-wrap content-start mb-20">

      <StatCard
      :data="dashboard?.data.Ordenes_Pendientes"
      />

    </div>

    <div class="flex justify-between">
      <!-- DataTable -->
    </div>
    <DataTable
      :is-add="true"
      :is-delete="true"
      :is-update="true"
      :columns="column"
      :data=" dashboard?.data.Ordenes "
    />
  </div>
  <div>
    {{ dashboard?.data.Ordenes_Pendientes}}
  </div>
</template>

<script setup lang="ts">
import StatCard from '@/modules/common/components/StatCard.vue';
import DataTable from '@/modules/common/components/DataTableBsic.vue';
import { getDashboardsAction } from '../actions/get-dashboards.action';
import { useQuery } from '@tanstack/vue-query';
import type {  Dashboard } from '../interfaces/dashboard.interface';

const {data: dashboard } = useQuery<Dashboard>({
  queryKey: ['dashboards'],
  queryFn: () => getDashboardsAction()
});

const column = [
  { data: 'id' },
  { data: 'elaborateId', title: "elaborado" },
  { data: 'status', title: 'estatus'},
];

</script>

<style scoped></style>
