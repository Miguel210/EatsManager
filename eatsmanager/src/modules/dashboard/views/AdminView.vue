<template>
  <!-- <h1>Graphic</h1> -->
  <div>

    <div class="flex flex-row flex-wrap content-start mb-20">
      <StatCard
      :data="dashboard?.data.Venta_Total"
      target-name="Total Pedidos"
      />

    </div>

    <div class="flex justify-between">

      <BasicGraphic class="mr-10" />
      <BasicGraphic />

    </div>
  </div>

</template>

<script setup lang="ts">
import StatCard from '@/modules/common/components/StatCard.vue';
import BasicGraphic from '../components/BasicGraphic.vue';
import { useQuery } from '@tanstack/vue-query';
import type { Dashboard } from '../interfaces/dashboard.interface';
import { getDashboardsAction } from '../actions/get-dashboards.action';

const module = 'dashboardAdm';
const {data: dashboard } = useQuery<Dashboard>({
  queryKey: ['dashboards', {module: module}],
  queryFn: () => getDashboardsAction(module)
});

// function remove() {
//   dt.value.rows({ selected: true }).every(function () {
//     const idx: number = data.value.indexOf(this.data());
//     data.value.splice(idx, 1);
//   });
// }
// function update() {
//   data.value.every(function() {
//     console.log(data.value);
//     const idx: number = data.value.indexOf(this.data());

//   })
// }
// function add() {
//   data.value.push({
//     name: 'Garrett Winters',
//     position: 'Director',
//     salary: '$5,300',
//     start_date: '2011/07/25',
//     office: 'Edinburgh',
//     extn: '8422',
//   });
// }
</script>

<style scoped></style>
