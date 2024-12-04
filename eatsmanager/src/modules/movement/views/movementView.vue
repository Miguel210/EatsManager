<template>
    <Tabs value="0">
        <TabList>
            <Tab value="0">Movimientos</Tab>
            <Tab value="1">Documentos</Tab>
        </TabList>
        <TabPanels>
            <TabPanel value="0">
                <MovementMenuView />
            </TabPanel>
            <TabPanel value="1">
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
            <TabPanel value="2">        
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit unde iure, laborum id error in reprehenderit doloribus corrupti illo veritatis quis recusandae obcaecati, voluptatibus debitis aliquid ducimus. Dolores, quisquam cum.    
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
    
    </script>
    
    <style scoped>
    
    </style>