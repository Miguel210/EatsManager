<template>
  <div>
    <!-- <div class="flex flex-row-reverse">
      <RouterLink to="/proveedor/proveedores/create">
        <ButtonCustom @click="visible = true" type-button="success" label-data="Crear" icon-button="pi pi-file-plus" :is-toast="false" ></ButtonCustom>
      </RouterLink>
      <RouterLink to="/proveedor/proveedores/6e454d68-6349-4f21-91e4-490cc9de097b" >
        <ButtonCustom @click="visible = true" type-button="warn" label-data="Actualizar" icon-button="pi pi-pencil" :is-toast="false"></ButtonCustom>
      </RouterLink>
      <ConfirmDialogCostum
        type-button="danger" 
        label-data="Eliminar" 
        icon-button="pi pi-trash"
        :is-toast="false"

        message="Estas seguro de eliminar el registro?"
        header="Alerta"
        icon="pi pi-info-circle"
        reject-label="Cancelar"
        :reject-props= "{ label: 'Cancelar', severity: 'secondary', outlined: true }"
        :acceptProps="{label: 'Eliminar', severity: 'danger'}"
      ></ConfirmDialogCostum>
    </div> -->
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
import { getSuppliersAction } from '../actions/get-suppliers.action';
import type { Obj } from '../interfaces/supplier.interface';
import { computed, ref } from 'vue';
import { deleteSupplierById } from '../actions/delete-supplier-by-id.actions';
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
