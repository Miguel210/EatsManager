<template>
  <!-- component -->
  <!-- This is an example component -->
  <div id="wrapper" class="max-w-xl p-3 ">
    <div class="">


      <div class="flex flex-col justify-center px-4 py-4 bg-white border border-gray-300 rounded">
        <div>
          <p class="text-3xl font-semibold text-center text-gray-800"> ${{ "data" }}</p>
          <p class="text-lg text-center text-gray-500">{{ data?.[0].count }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  data: DataObject[] | undefined,
}
export interface DataObject {
  count: number | string;
}

defineProps<Props>();
// console.log(JSON.stringify(data));

</script>

<style scoped></style>
