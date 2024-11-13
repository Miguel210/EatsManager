<template>
  <div class="bg-red-400 p-2 pb-0">

    <div class="flex justify-between">

        <h1 class="text-3xl text-white font-bold">Forajidos Speakeasy</h1>

      <Button label="Salir" icon="pi pi-sign-out" />

    </div>

    <div class="flex">

      <BreadCrumb />

    </div>

  </div>
</template>

<script setup lang="ts">
import BreadCrumb from './BreadCrumb.vue';
import Button from 'primevue/button';


</script>

<style scoped>

</style>
