<template>
    <div>
        <form @submit="onSubmit">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega la informacion</span>
            <label for="evaluator" class="font-semibold w-24">evaluator</label>
            <input type="string"  name="evaluator" id="evaluator" v-model="evaluations">
            <div class="flex items-center gap-4 mb-4">
                <label for="Empleados" class="font-semibold w-24">Empleados</label>
                <select name="employees" id="employees" required v-model="employeeIdx" v-bind="employeeIdx">
                    <option value="46c20549-5cb1-4152-8728-dd480595bd3b">Miguel</option>
                    <option value="46c20549-5cb1-4152-8728-dd480595bd34">Juan</option>

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
    </div>
</template>

<script src="./evaluationForm.ts" lang="ts">

</script>

<style scoped>

</style>