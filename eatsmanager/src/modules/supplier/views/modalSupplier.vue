<template>
    <div class="card bg-white">
        <form @submit="onSubmit">


            <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega la informacion</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="fullname" class="font-semibold w-24">Nombre Completo</label>
                <!-- <input type="text" name="fullname" id="fullname" v-model="fullname" v-bind="fullnameAttrs"> -->
                <input v-model="fullname" v-bind="fullnameAttrs" required />
            </div>
            <!-- <div class="flex items-center gap-4 mb-4">
                <label for="genero" class="font-semibold w-24">Genero</label>
                <CustomSelect v-model="gender" :model="gender" :option="genderDt?.data || []" placeHolder="Selecciona un genero" labelOps="name"/>
            </div> -->
            <div class="flex items-center gap-4 mb-4">
                <label for="profile" class="font-semibold w-24">Perfil</label>
                <select name="perfil" id="perfil" v-model="profile" :model="profile" required>
                    <option value="Proveedor">Proveedor</option>
                </select>
                <!-- <CustomSelect v-model="profile" :model="profile" :option="profileDt?.data || []" placeHolder="Selecciona un perfil" labelOps="name" /> -->
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="typeperson" class="font-semibold w-24">Tipo de Persona</label>
                <select name="typeperson" id="typeperson" v-model="typeperson" :model="typeperson" required>
                    <option value="Proveedddor">Proveedor</option>
                </select>
                <!-- <CustomSelect v-model="typeperson" :model="typeperson" :option="typeProfileDt?.data || []" placeHolder="Selecciona un tipo de persona" labelOps="description"/> -->
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="isActive" class="font-semibold w-24">Estatus</label>
                <select name="isActive" id="isActive" v-model="isActive" :model="isActive" required>
                    <option value="true">Activo</option>
                    <option value="false">Inactivo</option>
                </select>
                <!-- <CustomSelect v-model="isActive" :model="isActive"
                    :option="[{ value: true, isActive: 'Activo' }, { value: false, isActive: 'Inactivo' }]"
                    placeHolder="Selecciona su estado" labelOps="isActive" /> -->
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
