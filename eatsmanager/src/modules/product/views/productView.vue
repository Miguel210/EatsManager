<template>
    <Tabs value="0">
        <TabList>
            <Tab value="0">Productos</Tab>
            <Tab value="1">Categorias</Tab>
            <Tab value="2">Tipos de productos</Tab>
            <Tab value="3">Movimientos de Inventario</Tab>

        </TabList>
        <TabPanels>
            <TabPanel value="0">
                <ProductMenuView />
            </TabPanel>
            <TabPanel value="1">
                <CategoryMenuVIew />
            </TabPanel>
            <TabPanel value="2">
                <ProductTypeMenuView />
            </TabPanel>
            <TabPanel value="3">
                <InventoryMenuView />
            </TabPanel>
        </TabPanels>
    </Tabs>
    </template>
    
    <script setup lang="ts">
    import Tabs from 'primevue/tabs';
    import TabList from 'primevue/tablist';
    import Tab from 'primevue/tab';
    import TabPanels from 'primevue/tabpanels';
    import TabPanel from 'primevue/tabpanel';
import ProductMenuView from './product/productMenuView.vue';
import CategoryMenuVIew from './category/categoryMenuVIew.vue';
import ProductTypeMenuView from './produtType/productTypeMenuView.vue';
import InventoryMenuView from './inventory/inventoryMenuView.vue';
    
    </script>
    
    <style scoped>
    
    </style>