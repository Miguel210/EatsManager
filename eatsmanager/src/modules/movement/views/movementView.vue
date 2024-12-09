<template>
    <Tabs value="0">
        <TabList>
            <Tab value="0">Movimientos</Tab>
            <Tab value="1">Documentos</Tab>
            <Tab value="2">Detalles</Tab>
        </TabList>
        <TabPanels>
            <TabPanel value="0">
                <MovementMenuView />
            </TabPanel>
            <TabPanel value="1">
                <DocumentMenuView />
            </TabPanel>
            <TabPanel value="2">
                <MovementDetailMenuView />
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
import MovementMenuView from './movement/movementMenuView.vue';
import MovementDetailMenuView from './movementDetail/movementDetailMenuView.vue';

import DocumentMenuView from './document/documentMenuView.vue';
    
    </script>
    
    <style scoped>
    
    </style>