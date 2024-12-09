<template>
  <div :class="`w-${tableWidth}`">
    <div class="flex flex-row-reverse">

      <RouterLink :to="`${routerLink}create`">
          <ButtonCustom v-if="isAdd" type-button="success" label-data="Crear" icon-button="pi pi-file-plus" :is-toast="false" ></ButtonCustom>
        </RouterLink>
        <RouterLink :to="`${routerLink}${ idData }`">
          <ButtonCustom v-if="isUpdate" @click="update" type-button="warn" label-data="Actualizar" icon-button="pi pi-pencil" :is-toast="false"></ButtonCustom>
        </RouterLink>
      <ConfirmDialogCostum
          v-if="isDelete"
          type-button="danger" 
          label-data="Eliminar" 
          icon-button="pi pi-trash"
          :is-toast="false"
          :funcion="remove"
          message="Estas seguro de eliminar el registro?"
          header="Alerta"
          icon="pi pi-info-circle"
          reject-label="Cancelar"
          :reject-props= "{ label: 'Cancelar', severity: 'secondary', outlined: true }"
          :acceptProps="{label: 'Eliminar', severity: 'danger'}"
        ></ConfirmDialogCostum>
    </div>
    <DataTable
      :columns="columns"
      :data="data"
      class="display"
      width="100%"
      :options="optionsDt"
      ref="table"
      id="basic"
      >
      <thead>
        <tr>
          <th v-for="data in columns" :key="data.data">{{ data.data }}</th>
        </tr>
      </thead>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import 'datatables.net-select';
import { onMounted, ref, watch } from 'vue';
import ConfirmDialogCostum from '@/modules/common/components/ConfirmDialogCostum.vue';
import ButtonCustom from '@/modules/common/components/ButtonCustom.vue';

DataTable.use(DataTablesCore);
interface Props {
  //buttons
  isAdd: boolean;
  routerLink?: string;
  isUpdate: boolean;
  isDelete: boolean;
  functionDelete?: (id: string) => void
  //data
  data: unknown[] | undefined;
  columns: {
    data: string;
  }[];
  tableWidth: string | number;
  search: boolean;
  pagination: boolean;
  //tableWidth: string | number,
}
const props = defineProps<Props>();

const dt = ref();
const table = ref();
const idData = ref();
//Store

onMounted(function () {
  dt.value = table.value.dt;
});

const optionsDt = {
  select: true,
  buttons: true,
  searching: props.search,
  paging: props.pagination,
};

watch(props.data, (newData) => {
  if (dt.value) {
    dt.value.clear().rows.add(newData).draw();
  }
});
function remove() {
  dt.value.rows({ selected: true }).every(function () {
    const rowIndex = this.index();
    const rowData = this.data();
    
    if( props.functionDelete ){
      props.functionDelete(rowData['id'])

      props.data.splice(rowIndex, 1);
      dt.value.row(rowIndex).remove().draw(false);
    }
  });
}

function update() {
  dt.value.rows({ selected: true }).every(function () {
    const rowData = this.data();
    idData.value = rowData['id']
  });
}

</script>

<style>
  input[type='search'] {
    border: 1px solid black
  }
</style>
