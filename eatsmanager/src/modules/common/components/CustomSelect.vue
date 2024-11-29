<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div>
        <Select
        :v-model="modelValue"
        :options="option" 
        :optionLabel="labelOps"
        :placeholder="placeHolder" 
        :invalid="!modelValue" 
        class="w-full md:w-56" 
        />
    </div>
    
</template>

<script setup lang="ts">
import Select from 'primevue/select';

withDefaults(defineProps<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    modelValue?: any | boolean,
    option: Array<{ id: string; name?: string; description?: string}> | unknown[],
    placeHolder: string,
    labelOps: string
}>(),{

});


</script>

<style scoped>

</style>