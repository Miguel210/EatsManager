<template>
  <!-- component -->
  <!-- This is an example component -->
  <div id="wrapper" class="p-3  flex items-stretch	">
    <div class="w-80 h-25">


      <div class="flex flex-col justify-center px-4 py-4 bg-white border border-gray-300 rounded">
        <div>
          <p class="text-3xl font-semibold text-center text-gray-800 m-0"> {{ targetName }}</p>
          <p class="text-lg text-center text-gray-500">{{ displayValue }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


interface Props {
  data: DataObject[] | undefined,
  targetName: string;
}
export interface DataObject {
  count?: number | string;
  sum?: string
}

const props = defineProps<Props>();
const displayValue = computed(() => {
  if (props.data && props.data.length > 0) {
    const item = props.data[0];
    if (item.count !== undefined) {
      return typeof item.count === 'string' ? item.count : item.count.toLocaleString();
    } else if (item.sum !== undefined) {
      return item.sum;
    }
  }
  return 'No data available';
});
</script>

<style scoped></style>
