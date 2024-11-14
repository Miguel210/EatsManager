<template>
  <div class="w-[500px]">
    <DataTable
      :data="data"
      class="display"
      :options="{select: true}"
    >
      <thead>
        <tr>
          <th>A</th>
          <th>B</th>
        </tr>
      </thead>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net';
import Select from 'datatables.net-select';

DataTable.use(DataTablesLib);
DataTable.use(Select);

const data = [
  [1, 2],
  [3, 4],
  [3, 4],
  [3, 4],
];
</script>

<style scoped></style>
