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

  </div>

</template>

<script setup lang="ts">
import StatCard from '@/modules/common/components/StatCard.vue';
import BasicGraphic from '../components/BasicGraphic.vue';
</script>

<style scoped></style>
