<template>
  <!-- <h1>Graphic</h1> -->
  <div>

    <div class="flex flex-row flex-wrap content-start mb-20">
      <StatCard v-for="n in 4" :key="n" />

    </div>

    <div class="flex justify-between">

      <BasicGraphic class="mr-10" />
      <BasicGraphic />

    </div>
    <DataTableBsic :is-add="true" :is-delete="false" :is-update="false" :columns="column" :data="data"/>
  </div>

</template>

<script setup lang="ts">
import StatCard from '@/modules/common/components/StatCard.vue';
import BasicGraphic from '../components/BasicGraphic.vue';
import DataTableBsic from '@/modules/common/components/DataTableBsic.vue';
import { ref } from 'vue';


// const column = [
//   { data: 'name' },
//   { data: 'position' },
//   { data: 'office' },
//   { data: 'extn' },
//   { data: 'start_date' },
//   { data: 'salary' },
// ];

// const data = ref([
//   {
//     name: 'Tiger Nixon',
//     position: 'System Architect',
//     salary: '$3,120',
//     start_date: '2011/04/25',
//     office: 'Edinburgh',
//     extn: 5421,
//   },
//   {
//     name: 'Garrett Winters',
//     position: 'Director',
//     salary: '5300',
//     start_date: '2011/07/25',
//     office: 'Edinburgh',
//     extn: '8422',
//   },
// ]);

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
