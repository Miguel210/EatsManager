<template>
<aside class="w-72 bg-red-400 min-h-full h-screen flex flex-col items-center pt-5 pb-2 space-y-7">

<!-- menu items -->
  <div class="w-full pr-3 flex flex-col gap-y-1 text-white fill-white text-sm">

    <div class="font-QuicksandMedium pl-4 text-black text-xs text-[11px] uppercase">Menu</div>

    <template v-if="isLoading">
      <p>Cargando datos...</p>
    </template>
    
    <template v-else-if="isError">
      <p>Error al cargar los datos</p>
      <p>Porfavor de loguearse</p>
    </template>

    <template v-else>
      <MenuItem v-for="module in dataInfo" :key="module.id" :name="module.name"/>
    </template>  
  </div>

</aside>
</template>

<script setup lang="ts">
import MenuItem from '@/modules/common/components/MenuItem.vue';

interface Props {
  isLoading: boolean,
  isError: boolean,
  dataInfo: {
    id:   string;
    name: string;
    }[] | undefined
}
defineProps<Props>();

</script>

<style scoped>

</style>
