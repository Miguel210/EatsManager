<template>
  <div class="w-[500px]">
    <button v-if="isAdd" @click="add">Add</button><br />
    <button v-if="isUpdate" @click="update">Update</button><br />
    <button v-if="isDelete" @click="remove">Delete</button>
    <DataTable
      :columns="columns"
      :data="data"
      class="display"
      width="100%"
      :options="optionsDt"
      ref="table"
      id="basic"
      :paginator="false"
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
import 'datatables.net-buttons';
import { onMounted, ref } from 'vue';

DataTable.use(DataTablesCore);

interface Props {
  isAdd: boolean,
  isUpdate: boolean,
  isDelete: boolean
}

defineProps<Props>();

let dt = ref();
const table = ref();

const columns = [
  { data: 'name' },
  { data: 'position' },
  { data: 'office' },
  { data: 'extn' },
  { data: 'start_date' },
  { data: 'salary' },
];

const data = ref([
  {
    name: 'Tiger Nixon',
    position: 'System Architect',
    salary: '$3,120',
    start_date: '2011/04/25',
    office: 'Edinburgh',
    extn: 5421,
  },
  {
    name: 'Garrett Winters',
    position: 'Director',
    salary: '5300',
    start_date: '2011/07/25',
    office: 'Edinburgh',
    extn: '8422',
  },
]);
onMounted(function () {
  dt.value = table.value.dt;
});

const optionsDt = {
  select: true,
  buttons: true,
  
};

function remove() {
  dt.value.rows({ selected: true }).every(function () {
    const idx: number = data.value.indexOf(this.data());
    data.value.splice(idx, 1);
  });
}
function update() {
  dt.value.rows({ selected: true }).every(function () {
    const idx: number = data.value.indexOf(this.data());
    data.value[idx]['salary'] = '$50';
  });
}

function add() {
  data.value.push({
    name: 'Garrett Winters',
    position: 'Director',
    salary: '$5,300',
    start_date: '2011/07/25',
    office: 'Edinburgh',
    extn: '8422',
  });
}
</script>

<style scoped></style>
