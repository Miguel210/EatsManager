<template>
    <!-- :functionDelete="deleteemployeeById" -->
    <div>
      <template v-if="isLoading">
        <p>Cargando datos...</p>
      </template>
      <template v-else-if="isError">
        <p>Error al cargar los datos</p>
      </template>
      
      <template v-else>
        <div class="flex flex-row-reverse">

            <ButtonCustom 
            type-button="success"
            label-data="Compra"
            icon-button="pi pi-truck"
            :is-toast="false"
            />
            <ButtonCustom 
            type-button="success"
            label-data="Venta"
            icon-button="pi pi-shopping-cart"
            :is-toast="false"
            />
    
            <ButtonCustom 
            type-button="warn"
            label-data="Devolucion de Compra"
            icon-button="pi pi-arrow-left"
            :is-toast="false"
            />
    
            <ButtonCustom 
            type-button="danger"
            label-data="Devolucion de Venta"
            icon-button="pi pi-refresh"
            :is-toast="false"
            />
        </div>


        <DataTable
        :is-add="false"
        :is-delete="false"
        :is-update="false"
        :columns="column"
        :data="dataTableInfo"
        table-width="full"
        :search="true"
        :pagination="true"
        />
        {{ datapaint }}
          
        
      </template>
    </div>
  </template>
  
  <script setup lang="ts">
  import DataTable from '@/modules/common/components/DataTableBsic.vue';
  import { useQuery } from '@tanstack/vue-query';
  import { computed, ref } from 'vue';
import ButtonCustom from '@/modules/common/components/ButtonCustom.vue';
import { getCategoriesAction } from '../../actions/category';
import type { Obj } from '../../interfaces/category.interface';
  
  const {
    data: category,
    isLoading,
    isError,
  } = useQuery<Obj>({
    queryKey: ['category'],
    queryFn: () => getCategoriesAction(),
  });
  const dataTableInfo = ref<
    {
    id:           string;
    categoryName: string;
    isActive:     boolean;
    }[]
    | undefined
  >([]);
  
  const datapaint = computed(() => {
    if (category.value?.data && category.value.data.length > 0) {
      
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      dataTableInfo.value = category.value.data.map((e) => {
        return {
        id: e.id,
        categoryName: e.categoryName,
        isActive: e.isActive,
        };
      });
    }
    return [];
  });
  
  const column = [
    { data: 'categoryName', title: 'Nombre' },
    { data: 'isActive', title: 'Estatus' },
  ];
  </script>
  
  <style scoped></style>
  