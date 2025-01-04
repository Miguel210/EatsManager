<template>
  <div class="flex flex-wrap gap-3 overflow-y-auto" style="height: 500px">
    <div
      v-for="n in dataTableInfo"
      :key="n.id"
      :class="[
        'relative flex flex-col rounded-xl mt-8 bg-clip-border text-gray-700 shadow-md w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4',
        n.status === 'Disponible/Vacia'
          ? 'bg-green-200'
          : n.status === 'Esperando Cuenta'
            ? 'bg-yellow-200'
            : n.status === 'Cuenta Pagada'
              ? 'bg-yellow-200'
              : n.status === 'En Limpieza'
                ? 'bg-yellow-200'
                : n.status === 'Ocupada'
                  ? 'bg-red-200'
                  : n.status === 'Esperando Orden'
                    ? 'bg-red-200'
                    : n.status === 'Orden Tomada'
                      ? 'bg-red-200'
                      : n.status === 'En Mantenimiento'
                        ? 'bg-red-200'
                        : n.status === 'Combinada'
                          ? 'bg-red-200'
                          : n.status === 'No Disponible'
                            ? 'bg-red-200'
                            : 'bg-gray-200',
      ]"
    >
      <div
        class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 flex justify-center items-center"
      >
        <img
          src="../../../../../public/images/table_restaurant.png"
          width="150px"
          alt="Mi imagen"
        />
      </div>
      <div class="p-6">
        <h5
          class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
        >
          Mesa {{ n.description }}
        </h5>
        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          Nombre del comensal: {{ n.description || '---' }}
        </p>
        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          Estatus: {{ n.status }}
        </p>
      </div>
      <div class="p-6 pt-0">
        <div
          v-if="
            n.status === 'Esperando Cuenta' ||
            n.status === 'Cuenta Pagada' ||
            n.status === 'En Limpieza' ||
            n.status === 'Ocupada' ||
            n.status === 'Esperando Orden' ||
            n.status === 'Orden Tomada' ||
            n.status === 'Combinada' ||
            n.status === 'No Disponible' ||
            n.status === 'En Mantenimiento'
          "
        >
          <RouterLink
            :to="`/ventas/orden/${n.id}`">
            <button
              data-ripple-light="true"
              type="button"
              class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              :disabled="n.status === 'No Disponible' || n.status === 'En Mantenimiento'" 
            >
              Ver Comanda
            </button>
          </RouterLink>
        </div>
        <div v-else>
          <router-link 
          :to="`/ventas/orden/${n.id}`"
          >
            
            <button
            data-ripple-light="true"
            type="button"
            class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            :disabled="n.status === 'No Disponible' || n.status === 'En Mantenimiento'"
            >
            Crear comanda
          </button>
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getClientsAction } from '@/modules/client/actions/tables';
import type { Obj } from '@/modules/client/interfaces/tables.interface';
import { useQuery } from '@tanstack/vue-query';
import { ref, watchEffect } from 'vue';

const { data: clients } = useQuery<Obj>({
  queryKey: ['table'],
  queryFn: () => getClientsAction(),
});
const dataTableInfo = ref<
  | {
      id: string;
      description: string;
      status: string;
      isActive: boolean;
    }[]
  | undefined
>([]);

watchEffect(() => {
  if (clients.value?.data && clients.value.data.length > 0) {
    dataTableInfo.value = clients.value.data
      .filter((e) => e.isActive === true)
      .map((e) => {
        return {
          id: e.id,
          description: e.description,
          status: e.status,
          isActive: e.isActive,
        };
      });
  }
  return [];
});
</script>

<style scoped></style>
