<template>
<div>

  <div v-if="isToast === false">
    <Button :severity="typeButton" rounded :label="labelData" :icon="iconButton" />
  </div>
  
  <div v-if="isToast === true">
    <Toast  />
    <Button :severity="typeButton" rounded :label="labelData" :icon="iconButton" @click=" show()"/>
  </div>
</div>

</template>

<script setup lang="ts">
import { Button } from 'primevue';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast'

interface Props {
  typeButton: string
  labelData: string
  isToast: boolean
  iconButton?: string 
  toastSeverity?: "info" | "success" | "warn" | "error" | "secondary" | "contrast" | undefined
  toastSummary?: string 
  toastDetail?: string 
}

const props = defineProps<Props>()

const toast = useToast();
const show = () => {
    toast.add({ severity: props.toastSeverity , summary: props.toastSummary, detail: props.toastDetail, life: 3000 });
};

</script>

<style scoped>

</style>
