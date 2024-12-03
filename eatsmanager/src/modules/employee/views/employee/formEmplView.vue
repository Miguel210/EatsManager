<template>
    <div>
        <form @submit="onSubmit">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega la informacion</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="fullname" class="font-semibold w-24">Nombre Completo</label>
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
                    <option value="14588c57-ee54-4c01-bc7f-8c445e643ee5">Empleado</option>
                </select>
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="typeperson" class="font-semibold w-24">Tipo de Persona</label>
                <select name="typeperson" id="typeperson" v-model="typePerson" :model="typePerson" required>
                    <option value="6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4">Empleado</option>
                </select>
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="isActive" class="font-semibold w-24">Estatus</label>
                <select name="isActive" id="isActive" v-model="isActive" :model="isActive" required>
                    <option :value="true">Activo</option>
                    <option :value="false">Inactivo</option>
                </select>
            </div>

        <!--todo EMPLOYEE DATA  -->

            <div class="flex items-center gap-4 mb-4">
                <label for="Entrada" class="font-semibold w-24">Entrada</label>
                <input type="date" name="Entrada de trabajo" id="input" v-model="input">
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="Salida" class="font-semibold w-24">Salida</label>
                <input type="date" name="salida de trabajo" id="output" v-model="output">
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="Salario" class="font-semibold w-24">Salario</label>
                <input type="number" name="salario" id="salary" v-model="salary">
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

<script src="./employeeForm.ts" lang="ts">

</script>

<style scoped>

</style>