<template>
    <div>
        <form @submit="onSubmit">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega la informacion</span>
          
            <div class="flex items-center gap-4 mb-4">
                <label for="Empleados" class="font-semibold w-24">Empleados</label>
                <select name="employees" id="employees" required v-model="employeeId" >

                    <option v-for="e in employeeList" :key="e.value" :value="e.value">{{ e.label }}</option>

                </select>
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="puntual" class="font-semibold w-24">Puntualidad</label>
                <input type="number" min="0" max="10" name="punctuality" id="punctuality" v-model="punctuality">
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="calidad" class="font-semibold w-24">Calidad</label>
                <input type="number" min="0" max="10" name="attitude" id="attitude" v-model="attitude">
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="calidad" class="font-semibold w-24">Calidad</label>
                <input type="number" min="0" max="10" name="puntual" id="quality" v-model="quality">
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="Eficiencia" class="font-semibold w-24">Eficiencia</label>
                <input type="number" min="0" max="10" name="efficiency" id="efficiency" v-model="efficiency">
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="Iniciativa" class="font-semibold w-24">Iniciativa</label>
                <input type="number" min="0" max="10" name="initiative" id="initiative" v-model="initiative">
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="Higiene" class="font-semibold w-24">Higiene</label>
                <input type="number" min="0" max="10" name="hygiene" id="hygiene" v-model="hygiene">
            </div>
            <div class="flex justify-end gap-2">
                <button type="submit"  
                    :disabled="isPending"
                    class="disabled:bg-gray-200 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Guardar
                </button>
            </div>
        </form>
        <div class="grid grid-cols-2">
            <pre class="bg-blue-200">
                {{ JSON.stringify(values, null, 2) }}
            </pre>
            <pre class="bg-red-200">
                {{ JSON.stringify(errors, null, 2) }}
            </pre>
            <pre class="bg-green-200 col-span-2">
                {{ JSON.stringify(meta, null, 2) }}
            </pre>
        </div>
    </div>
</template>

<script src="./evaluationForm.ts" lang="ts">

</script>

<style scoped>

</style>