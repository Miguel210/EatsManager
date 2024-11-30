<template>
    <div class="card bg-white">
        <form @submit="onSubmit">


            <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega la informacion</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="fullname" class="font-semibold w-24">Nombre Completo</label>
                <!-- <input type="text" name="fullname" id="fullname" v-model="fullname" v-bind="fullnameAttrs"> -->
                <input v-model="fullname" v-bind="fullnameAttrs" required />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="gender" class="font-semibold w-24">Genero</label>
                <select name="genderId" id="genderId" v-model="gender" :model="gender" required>
                    <option value="f83dac87-cae3-433e-909f-89b7cb865ff1">Masculino</option>
                    <option value="2ffbc2df-7f6f-4c7a-bf4c-88eee010644f">Femenino</option>
                    <option value="a674eeeb-cd0f-4794-a35b-e321b33344a0">Otro</option>

                </select>
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="profile" class="font-semibold w-24">Perfil</label>
                <select name="perfil" id="perfil" v-model="profile" :model="profile" required>
                    <option value="0402cc9c-0992-4ad8-ab70-142522d2815f">Proveedor</option>
                </select>
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="typeperson" class="font-semibold w-24">Tipo de Persona</label>
                <select name="typeperson" id="typeperson" v-model="typePerson" :model="typePerson" required>
                    <option value="682155b3-a3da-43ec-845d-024a1e0b8a70">Proveedor</option>
                </select>
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

<script src="../views/SupplierView.ts" lang="ts">


</script>

<style scoped></style>
