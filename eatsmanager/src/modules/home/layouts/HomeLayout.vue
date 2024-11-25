<template>
  <!-- flex flex-col -->
  <div class="  text-gray-800 bg-white">

    <!-- Top Menu -->

    <TopMenu />

    <div class="flex">
    <!--Side Menu-->

      <SideMenu />

    <!-- RouterView -->

      <RouterView />

    </div>

  </div>
</template>

<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';


</script>

<style scoped>

</style>
