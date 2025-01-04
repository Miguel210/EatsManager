<template>
    <div>
        <form @submit="onSubmit">
            
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega la informacion</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="description" class="font-semibold w-24">Nombre de la Mesa</label>
                <input v-model="description" v-bind="descriptionAttrs" required />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="status" class="font-semibold w-24">Estatus</label>
                <!-- !COLOCAR :DESABLE PARA BLOQUEAR A LOS DE COLOR ROJO CUANDO ESTEN GUARDADOS EN LA BD-->
                <select name="status" id="status" v-model="status" requerid :disabled="statusModiefied()">
                    <!--? VERDE -->
                    <option value="Disponible/Vacia">Disponible/Vacía</option>
                    <!--? AMARILLO -->
                    <option value="Esperando Cuenta">Esperando Cuenta</option>
                    <option value="Cuenta Pagada">Cuenta Pagada</option>
                    <option value="En Limpieza">En Limpieza</option>

                    <!--? ROJO -->
                    <option value="Ocupada" disabled>Ocupada</option>
                    <option value="Esperando Orden" disabled>Esperando Orden</option>
                    <option value="Orden Tomada" disabled>Orden Tomada</option>
                    <option value="Combinada" disabled>Combinada</option>
                    <option value="En Mantenimiento">En Mantenimiento</option>
                    <option value="No Disponible">No Disponible</option>


                </select>
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="isActive" class="font-semibold w-24">Esta Activa?</label>
                <select name="isActive" id="isActive" v-model="isActive" :model="isActive" required>
                    <option :value="true">Activo</option>
                    <option :value="false">Inactivo</option>
                </select>
            </div>
            <div class="flex justify-end gap-2">
                <button type="submit" :disabled="isPending"
                    class="disabled:bg-gray-200 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Guardar
                </button>
            </div>
        </form>
    </div>
</template>

<script src="./FormTableView.ts" lang="ts">

</script>

<style scoped>

</style>