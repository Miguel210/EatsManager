<template>
  <Button :severity="typeButton" rounded :label="labelData" />
</template>

<script setup lang="ts">
import { Button } from 'primevue';


interface Props {
  typeButton: string
  labelData: string

}

defineProps<Props>()
</script>

<style scoped>

</style>
