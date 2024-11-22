<template>
  <div>
    <DataTable
      :is-add="true"
      :is-delete="true"
      :is-update="true"
      :columns="column"
      :data=" dataTableInfo"
      table-width="full"
      :search="true"
      :pagination="true"
    />
    <div>
      {{ supplier?.data }}
      {{ dataDewgloce }}
    </div>

    <ButtonCustom
      @click="customModalOpen = true"
      type-button="danger"
      label-data="Eliminar"
    >
  </ButtonCustom>
  </div>

    <CustomModal :open="customModalOpen">
      <template #header>
        <h2 class="text-lg font-semibold">Modal Title</h2>


      </template>

      <template #body>
        <P>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem itaque deleniti ea deserunt maiores voluptas.
        Expedita iusto sequi consectetur fugit odit libero quam quod id, ad a voluptates quisquam quas!
      </P>
      </template>


      <template #actions>
        <div class=" flex justify-end border-t px-4 py-2">
          <button @click="customModalOpen = false" class="btn mr-4">Close</button>
          <button @click="customModalOpen = false" class="btn-primary">Aceptar</button>

        </div>
      </template>
    </CustomModal>


</template>

<script setup lang="ts">
import DataTable from '@/modules/common/components/DataTableBsic.vue';
import { useQuery } from '@tanstack/vue-query';
import { getSuppliersAction } from '../actions/get-suppliers.action';
import type { Supplier } from '../interfaces/supplier.interface';
import { computed, ref } from 'vue';
import ButtonCustom from '@/modules/common/components/ButtonCustom.vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';


const customModalOpen = ref(false);
const module = 'Proveedor/getAll';
const {data: supplier } = useQuery<Supplier>({
  queryKey: ['supplier', {module: module}],
  queryFn: () => getSuppliersAction(module)
});
const dataTableInfo = ref<({id:string,fullname: string, description: string, status: boolean}[]| undefined)>([]);
const dataDewgloce = computed(() => {
  if(supplier.value?.data && supplier.value.data.length > 0) {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    dataTableInfo.value = supplier.value.data.map( e => {

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

<style scoped>

</style>
