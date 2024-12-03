<template>
<Tabs value="0">
    <TabList>
        <Tab value="0">Empleados</Tab>
        <Tab value="1">Asistencia</Tab>
        <Tab value="2">Evaluaciones</Tab>
    </TabList>
    <TabPanels>
        <TabPanel value="0">
            <EmployeeMenu />>
        </TabPanel>
        <TabPanel value="1">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </TabPanel>
        <TabPanel value="2">            
            <EmployeeEvaluationView />
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

import EmployeeMenu from './employee/employeeMenu.vue';
import EmployeeEvaluationView from './evaluation/EmployeeEvaluationView.vue';
</script>

<style scoped>

</style>