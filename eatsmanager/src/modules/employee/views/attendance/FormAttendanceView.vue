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
                <label for="Empleados" class="font-semibold w-24">Estatus</label>
                <select name="employees" id="employees" required v-model="documentId" >
                    <option value="7f27a133-2391-4896-946f-07d0545256e6">Entrada</option>
                    <option value="5605ff8d-b6b2-4822-9937-254de77b3045">Salida</option>
                    <option value="7d86a30a-4986-4aeb-9acc-b389c760cc3b">Falta</option>
                    <option value="c95c3801-ab84-44a0-842f-3aab888aaf3f">Retardo</option>
                    <option value="9f32dea6-8a1d-4093-a873-73365a9b5b91">Horas extra</option>
                    <option value="b8bf6180-ea9d-4233-8a6e-0fa59b9b0275">Salida antes (permiso)</option>
                    <option value="de7ca9a4-8387-4cd0-b2e6-b57c002a9cdc">Entrada tardoa (permiso)</option>
                </select>
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="puntual" class="font-semibold w-24">Hora y fecha</label>
                <input type="datetime-local" name="timeAttendace" id="timeAttendace" disabled v-model="timeAttendace">
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

<script src="./attendanceForm" lang="ts">

</script>

<style scoped>

</style>