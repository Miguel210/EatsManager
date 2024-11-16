<template>
  <div class="w-[500px]">
    <button @click="add">Add</button><br />
    <!-- <button @click="update">Update</button><br /> -->
    <button @click="remove">Delete</button>

    <DataTable
      :columns="columns"
      :data="data"
      class="display"
      width="100%"
      :options="{ select: true }"
      ref="table"

    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Extn.</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </thead>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net';
import Select from 'datatables.net-select';
import Editor from 'datatables.net-editor';
import { onMounted, ref } from 'vue';
import { create } from 'datatables.net-editor/types/core/api';

DataTable.use(DataTablesCore);
DataTable.use(Select);
DataTable.use(new Editor({
  ['create']: create
}));
let dt = ref();
const table = ref();

// let editor = new Editor({
//   ['create']: create}
// );
const columns = [
  { data: 'name' },
  { data: 'position' },
  { data: 'office' },
  { data: 'extn' },
  { data: 'start_date' },
  { data: 'salary' }
];

const data = ref([
  {
    name: 'Tiger Nixon',
    position: 'System Architect',
    salary: '$3,120',
    start_date: '2011/04/25',
    office: 'Edinburgh',
    extn: 5421
  },
  {
    name: 'Garrett Winters',
    position: 'Director',
    salary: '5300',
    start_date: '2011/07/25',
    office: 'Edinburgh',
    extn: '8422'
  }
])
onMounted(function () {
  dt.value = table.value.dt;

});


function remove() {
  dt.value.rows({ selected: true }).every(function () {
    const idx: number = data.value.indexOf(this.data());
    data.value.splice(idx, 1);
  });
}
function add() {
  data.value.push( {
            name: 'Garrett Winters',
            position: 'Director',
            salary: '$5,300',
            start_date: '2011/07/25',
            office: 'Edinburgh',
            extn: '8422'
        } );
}
</script>

<style scoped></style>
