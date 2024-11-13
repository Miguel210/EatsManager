<template>
  <Breadcrumb :home="home" :model="items" class="bread">
  <template #item="{ item, props }" >
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a :href="href" v-bind="props.action" @click="navigate" >
                        <span :class="[item.icon, 'text-white']" />
                        <span class="text-white">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
                </a>
    </template>
</Breadcrumb>
</template>

<script setup lang="ts">
import { Breadcrumb } from 'primevue';
import { ref } from 'vue';


const home = ref({
    icon: 'pi pi-home',
    route: '/dashboard'
});
const items = ref([
    { label: 'Empleados', route: '/empleado'  },
]);
</script>
<style scoped>
.bread{
  background: var(--p-red-400)
}
</style>
