<template>
  <div>
    <div class="flex flex-row-reverse">
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
      
    </div>
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
      <br><br>
      <h1>dddd ******</h1>
      {{ typeProfile }}
    </div>

  </div>
  <div class="card flex justify-center bg-white">
      <Dialog v-model:visible="visible" modal header="Crear Proveedor" :style="{ width: '25rem' }" >
          <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega la informacion</span>
          <div class="flex items-center gap-4 mb-4">
              <label for="Nombre" class="font-semibold w-24">Nombre Completo</label>
              <InputText id="username" class="flex-auto" autocomplete="off" v-model="value" :invalid="!value"  />
          </div>
          <div class="flex items-center gap-4 mb-4">
              <label for="genero" class="font-semibold w-24">Genero</label>
              <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />

          </div>
          <div class="flex items-center gap-4 mb-4">
              <label for="profile" class="font-semibold w-24">Perfil</label>
              <Select v-model="selectedCity" :options="typeProfile?.data" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />

          </div>
          <div class="flex items-center gap-4 mb-8">
              <label for="typeProfile" class="font-semibold w-24">Tipo de Persona</label>
              <Select v-model="selectedCity" :options="profile?.data" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
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
import Select from 'primevue/select';
import { getUtilsAction } from '@/modules/common/actions/getUtils.actions';
import type { Main } from '@/modules/common/interfaces/utils.interface';

const visible = ref(false);
const module = 'Proveedor/getAll';
const { data: supplier } = useQuery<Supplier>({
  queryKey: ['supplier', { module: module }],
  queryFn: () => getSuppliersAction(module)
});
const { data: profile } = useQuery<Main>({
  queryKey: ['profile', { module: 'autocomplete/profile/name' }],
  queryFn: () => getUtilsAction('autocomplete/profile/name' )
});
const { data: typeProfile } = useQuery<Supplier>({
  queryKey: ['typeProfile', { module: 'autocomplete/typeperson/description'  }],
  queryFn: () => getUtilsAction('autocomplete/typeperson/description' )
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
const value = ref('');
const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>
<style scoped></style>
