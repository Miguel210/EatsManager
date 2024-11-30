<!-- eslint-disable vue/no-mutating-props -->
<template>
    <Select
      :v-model="modelValue"
      :options="option"
      :optionLabel="labelOps"
      :placeholder="placeHolder"
      class="w-full md:w-56"
    />
</template>

<script setup lang="ts">
import Select from 'primevue/select';

 withDefaults(
  defineProps<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    modelValue?: any;
    option: Array<{ id: string; name?: string; description?: string }>;
    placeHolder: string;
    labelOps: string;
  }>(),
  {},
);

</script>

<style scoped></style>
