<template>
    <div>

        <div class="flex flex-row-reverse">
      <router-link to="/proveedor/orden/">
        <ButtonCustom 
              type-button="success"
              label-data="Nuevo Pedido"
              icon-button="pi pi-truck"
              :is-toast="false"
        />

      </router-link>
    </div>
    </div>
</template>

<script setup lang="ts">
import ButtonCustom from '@/modules/common/components/ButtonCustom.vue';

</script>

<style scoped>

</style>