<template>
  <div class="w-[500px]">
    <!-- <button v-if="isAdd" @click="add">Add</button><br />
    <button v-if="isUpdate" @click="update">Update</button><br />
    <button v-if="isDelete" @click="remove">Delete</button> -->
    <DataTable
      :columns="columns"
      :data="data"
      class="display"
      width="100%"
      :options="optionsDt"
      ref="table"
      id="basic"
    >
      <thead>
        <tr>
          <th v-for=" (data) in columns" :key="data.data">{{ data.data }}</th>
          <!-- <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Extn.</th>
          <th>Start date</th>
          <th>Salary</th> -->
        </tr>
      </thead>
    </DataTable>
  </div>

</template>

<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import 'datatables.net-select';
import { ref } from 'vue';
import type { Data } from '@/modules/dashboard/interfaces/dashboard.interface';

DataTable.use(DataTablesCore);
interface Props {
  isAdd: boolean,
  isUpdate: boolean,
  isDelete: boolean,
  data: Data[] | undefined | never[],
  columns: {
    data: string;
  }[]
}
defineProps<Props>();

// let dt = ref();
const table = ref();


// onMounted(function () {
//   dt.value = table.value.dt;
// });

const optionsDt = {
  select: true,
  buttons: true,
  searching: false,
  paging: false,
};
// const localData = ref([...props.data]);
// function remove() {
//   dt.value.rows({ selected: true }).every(function () {
//     const idx: number = data.value.indexOf(this.data());
//     data.value.splice(idx, 1);
//   });
// }
// function update() {
//   dt.value.rows({ selected: true }).every(function () {
//     const idx: number = data.value.indexOf(this.data());
//     data.value[idx]['salary'] = '$50';
//   });
// }

// function add() {
//   localData.value.push({
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
