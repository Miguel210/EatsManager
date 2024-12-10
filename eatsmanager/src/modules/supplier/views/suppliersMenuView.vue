<template>
    <Tabs value="0">
        <TabList>
            <Tab value="0">Proveedores</Tab>
            <Tab value="1">Ordenes</Tab>
        </TabList>
        <TabPanels>
            <TabPanel value="0">
                <SupplierView />
            </TabPanel>
            <TabPanel value="1">
                <SupplierOrderMenuView />
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
    import SupplierView from './supplier/suppliersView.vue';
import SupplierOrderMenuView from './supplierOrder/supplierOrderMenuView.vue';
    
    </script>
    
    <style scoped>
    
    </style>