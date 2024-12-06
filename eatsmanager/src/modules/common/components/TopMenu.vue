<template>
  <div class="bg-red-400 p-2 pb-0">

    <div class="flex justify-between">

        <h1 class="text-3xl text-white font-bold">Forajidos Speakeasy</h1>

      <Button label="Salir" icon="pi pi-sign-out" @click="onSubmit"/>

    </div>

    <div class="flex">

      <!-- <BreadCrumb /> -->
      <br>
    </div>

  </div>
</template>

<script setup lang="ts">
// import BreadCrumb from './BreadCrumb.vue';
import Button from 'primevue/button';
import { useAuthStore } from '../../auth/store/auth.store';
import { useRouter } from 'vue-router';


const autStore = useAuthStore();
const router = useRouter();


const onSubmit = async() => {

  if(!autStore.logout()) {
    router.replace('/auth');

  }

}
</script>

<style scoped>

</style>
