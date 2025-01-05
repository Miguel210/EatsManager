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
            <AttendanceMenu />
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
import AttendanceMenu from './attendance/attendanceMenu.vue';
</script>

<style scoped>

</style>