<template>
  <div class="flex flex-col">

    <!-- Top Menu -->

    <TopMenu />

    <!--Side Menu-->

    <SideMenu />

    <!-- RouterView -->

    <RouterView />

  </div>
</template>

<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';


</script>

<style scoped>

</style>
