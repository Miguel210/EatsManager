<template>
  <div>
        
    <ButtonCustom @click="visible = true" type-button="success" label-data="Crear" icon-button="pi pi-file-plus" :is-toast="false" ></ButtonCustom>
    <ButtonCustom @click="visible = true" type-button="warn" label-data="Actualizar" icon-button="pi pi-pencil" :is-toast="false"></ButtonCustom>
    <ButtonCustom 
      type-button="danger" 
      label-data="Eliminar" 
      icon-button="pi pi-trash"
      :is-toast="true"
      toast-severity="error"
      toast-summary="Producto Eliminado"
      toast-detail="Se elimino"
    ></ButtonCustom>
    
    <DataTable 
      :is-add="true" 
      :is-delete="true" 
      :is-update="true" 
      :columns="column" 
      :data="dataTableInfo"
      table-width="full" 
      :search="true" 
      :pagination="true" 
      />
    <div>
      {{ supplier?.data }}
      {{ dataDewgloce }}
    </div>

  </div>
  <div class="card flex justify-center bg-white">
      <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }" >
          <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
          <div class="flex items-center gap-4 mb-4">
              <label for="username" class="font-semibold w-24">Username</label>
              <InputText id="username" class="flex-auto" autocomplete="off" />
          </div>
          <div class="flex items-center gap-4 mb-8">
              <label for="email" class="font-semibold w-24">Email</label>
              <InputText id="email" class="flex-auto" autocomplete="off" />
          </div>
          <div class="flex justify-end gap-2">
              <ButtonCustom type="button" label-data="Cancel" type-button="danger" @click="visible = false" :is-toast="false"></ButtonCustom>
              <ButtonCustom type="button" label-data="Save" type-button="success" @click="visible = false"  :is-toast="false"></ButtonCustom>
          </div>
      </Dialog>
  </div>

</template>

<script setup lang="ts">
import DataTable from '@/modules/common/components/DataTableBsic.vue';
import { useQuery } from '@tanstack/vue-query';
import { getSuppliersAction } from '../actions/get-suppliers.action';
import type { Supplier } from '../interfaces/supplier.interface';
import { computed, ref } from 'vue';
import ButtonCustom from '@/modules/common/components/ButtonCustom.vue';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';

const visible = ref(false);
const module = 'Proveedor/getAll';
const { data: supplier } = useQuery<Supplier>({
  queryKey: ['supplier', { module: module }],
  queryFn: () => getSuppliersAction(module)
});
const dataTableInfo = ref<({ id: string, fullname: string, description: string, status: boolean }[] | undefined)>([]);
const dataDewgloce = computed(() => {
  if (supplier.value?.data && supplier.value.data.length > 0) {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    dataTableInfo.value = supplier.value.data.map(e => {

      return {
        id: e.id,
        fullname: e.person.fullname,
        description: e.person.typeperson.description,
        status: e.person.isActive
      }
    })
  }
  return [];
})

const column = [
  { data: 'id' },
  { data: 'fullname', title: "Nombre" },
  { data: 'description', title: "Tipo" },
  { data: 'status', title: "Estatus" },
];

</script>
<style scoped></style>
