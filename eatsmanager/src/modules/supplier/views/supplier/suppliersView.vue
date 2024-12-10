<template>
  <div>
    <DataTable
      :is-add="true"
      routerLink="/proveedor/proveedores/"
      :is-delete="true"
      :functionDelete="deleteSupplierById"
      :is-update="true"
      :columns="column"
      :data="dataTableInfo"
      table-width="full"
      :search="true"
      :pagination="true"
    />
    <div>
      {{ dataDewgloce }}
    </div>
  </div>
</template>

<script setup lang="ts">
import DataTable from '@/modules/common/components/DataTableBsic.vue';
import { useQuery } from '@tanstack/vue-query';
import { getSuppliersAction } from '../../actions/get-suppliers.action';
import type { Obj } from '../../interfaces/supplier.interface';
import { computed, ref } from 'vue';
import { deleteSupplierById } from '../../actions/delete-supplier-by-id.actions';


const module = 'Proveedor/getAll';
const { data: supplier } = useQuery<Obj>({
  queryKey: ['supplier', { module: module }],
  queryFn: () => getSuppliersAction(module),
});

const dataTableInfo = ref<
  { id: string; fullname: string; description: string; status: boolean }[] | undefined
>([]);
const dataDewgloce = computed(() => {
  console.log(supplier);
  
  if (supplier.value?.data && supplier.value.data.length > 0) {

    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    dataTableInfo.value = supplier.value.data.map((e) => {
      return {
        id: e.id,
        fullname: e.person.fullname,
        description: e.person.typeperson.description,
        status: e.person.isActive,
      };
    });
  }
  return [];
});

const column = [
  // { data: 'id' },
  { data: 'fullname', title: 'Nombre' },
  { data: 'description', title: 'Tipo' },
  { data: 'status', title: 'Estatus' },
];
</script>
<style scoped></style>
