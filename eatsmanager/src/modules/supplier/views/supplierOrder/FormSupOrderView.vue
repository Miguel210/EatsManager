<template>
    <div>
        <form @submit="onSubmit">
            
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega la informacion</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="description" class="font-semibold w-24">Nombre del Documento</label>
                <!-- <input type="text" name="fullname" id="fullname" v-model="fullname" v-bind="fullnameAttrs"> -->
                <input v-model="description" v-bind="descriptionAttrs" required />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="folio" class="font-semibold w-24">Folio</label>
                <input v-model="folio" v-bind="folioAttrs" required  disabled/>
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="isActive" class="font-semibold w-24">Estatus</label>
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

<script src="./supplierOrderView.ts" lang="ts">

</script>

<style scoped>

</style>