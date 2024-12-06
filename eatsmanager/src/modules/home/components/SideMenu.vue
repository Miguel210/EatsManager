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
      <MenuItem v-for="module in dataTableInfo" :key="module.id" :name="module.name"/>
    </template>  
    {{ datapaint }}
  </div>

</aside>
</template>

<script setup lang="ts">
import MenuItem from '@/modules/common/components/MenuItem.vue';
import { getModulesAction } from '../actions/get-modules.actions';
import { useQuery } from '@tanstack/vue-query';
import type { Obj } from '../interface/modules.inerface';
import { computed, ref } from 'vue';
// import { ref } from 'vue'

const {
    data: modules,
    isLoading,
    isError,
} = useQuery<Obj>({
    queryKey: ['getModules'],
    queryFn: () => getModulesAction(),
  });

  const dataTableInfo = ref<
    {
    id:   string;
    name: string;
    }[]
    | undefined
  >([]);

  const datapaint = computed(() => {
    if (modules.value?.data && modules.value.data.length > 0) {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      dataTableInfo.value = modules.value.data.map((e) => {
        console.log(e);
        return {
        id: e.id,
        name: e.name,
        };
      });
    }
    return [];
  });
  

</script>

<style scoped>

</style>
