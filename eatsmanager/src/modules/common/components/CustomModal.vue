<template>
  <!-- Open the modal using ID.showModal() method -->
  <dialog class="modal" :open="open">
    <div class="modal-box">

      <div class="bg-indigo-500 text-white px-4 py-2 flex justify-between">
        <!--Header-->
        <slot name="header" />
      </div>

      <div class="ny-5">
        <slot name="body" />
      </div>

      <div class="border-5 border-blue-500 pt-2">
        <slot name="actions" />

      </div>
    </div>
  </dialog>

  <div v-if="open" class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-40 w-screen h-screen">s</div>

</template>

<script setup lang="ts">

interface Props {
  open?: boolean;
}

withDefaults(defineProps<Props>(), {
  open: false
})
</script>

<style scoped></style>
