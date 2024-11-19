<template>
  <!-- <h1>Graphic</h1> -->
  <div>
    <div class="flex flex-row flex-wrap content-start mb-20">

      <StatCard v-for="n in 4" :key="n" />

    </div>

    <div class="flex justify-between">
      <!-- DataTable -->
    </div>
    <DataTable
      :is-add="true"
      :is-delete="true"
      :is-update="true"
    />
  </div>
</template>

<script setup lang="ts">
import StatCard from '@/modules/common/components/StatCard.vue';
import DataTable from '@/modules/common/components/DataTableBsic.vue';

</script>

<style scoped></style>
