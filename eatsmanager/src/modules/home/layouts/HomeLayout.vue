<template>
  <!-- flex flex-col -->
  <div class="  text-gray-800 bg-white">

    <!-- Top Menu -->

    <TopMenu />

    <div class="flex">
    <!--Side Menu-->

      <SideMenu 
        :is-error="isError"
        :is-loading="isLoading"
        :data-info="dataInfo"
      />

    <!-- RouterView -->

      <RouterView />

    </div>
    {{ datapaint }}
  </div>
</template>

<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';
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

  const dataInfo = ref<
    {
    id:   string;
    name: string;
    }[]
    | undefined
  >([]);

  const datapaint = computed(() => {
    if (modules.value?.data && modules.value.data.length > 0) {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      dataInfo.value = modules.value.data.map((e) => {
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
