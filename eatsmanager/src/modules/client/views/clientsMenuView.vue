<template>
    <Tabs value="0">
        <TabList>
            <Tab value="0">Gestion</Tab>
            <Tab value="1">Mesas</Tab>
        </TabList>
        <TabPanels>
            <TabPanel value="0">
                <ClientOrderMenuView />
            </TabPanel>
            <TabPanel value="1">
                <TablesMenuView />
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
import ClientOrderMenuView from './clientOrder/clientOrderMenuView.vue';
import TablesMenuView from './tables/TablesMenuView.vue';


</script>
    
    <style scoped>
    
    </style>