<template>
    <Tabs value="0">
        <TabList>
            <Tab value="0">Productos</Tab>
            <Tab value="1">Categorias</Tab>
            <Tab value="2">Tipos de productos</Tab>
            <Tab value="3">Inventario</Tab>
            <Tab value="4">Guarniciones</Tab>

        </TabList>
        <TabPanels>
            <TabPanel value="0">
                <ProductMenuView />
            </TabPanel>
            <TabPanel value="1">
                <CategoryMenuVIew />
            </TabPanel>
            <TabPanel value="2">
                <h1>Tipos de productos</h1>
            </TabPanel>
            <TabPanel value="3">
                <h1>Inventario</h1>
            </TabPanel>
            <TabPanel value="4">
                <h1>Guarniciones</h1>
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
    
    </script>
    
    <style scoped>
    
    </style>