<template>
    <div>
        <form @submit="onSubmit">
            
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega la informacion</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="description" class="font-semibold w-24">Nombre del producto</label>
                <!-- <input type="text" name="fullname" id="fullname" v-model="fullname" v-bind="fullnameAttrs"> -->
                <input v-model="description" v-bind="descriptionAttrs" required />
            </div>
            
            <div class="flex items-center gap-4 mb-4">
                <label for="code" class="font-semibold w-24">Codigo</label>
                <input v-model="code" v-bind="codeAttrs" required />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="existence" class="font-semibold w-24">Existencia</label>
                <input type="number" v-model="existence" v-bind="existenceAttrs" required />
            </div>
            
            <div class="flex items-center gap-4 mb-4">
                <label for="price" class="font-semibold w-24">Precio</label>
                <input type="number" v-model="price" v-bind="priceAttrs" required />
            </div>


<!-- ! Corregir  -->
            <div class="flex items-center gap-4 mb-4">
                <label for="productType" class="font-semibold w-24">Tipo de Producto</label>
                <select name="productType" id="productType" v-model="productType" :model="productType" v-bind="productTypeAttrs" >
                    <option v-for="productType in productTypeData?.data" :key="productType.id" :value="productType.id"> {{ productType.description }} </option>
                </select>
            </div>

<!-- ! Corregir  -->
            <div class="flex items-center gap-4 mb-4">
                <label for="category" class="font-semibold w-24">Categoria</label>
                <select name="category" id="category" v-model="category" :model="category" v-bind="categoryAttrs" >
                    <option v-for="category in categoryData?.data" :key="category.id" :value="category.id"> {{ category.categoryName }} </option>
                </select>
            </div>


            <div class="flex items-center gap-4 mb-4">
                <label for="viewMenu" class="font-semibold w-24">Es menu?</label>
                <select name="viewMenu" id="viewMenu" v-model="viewMenu" :model="viewMenu" v-bind="viewMenuAttrs" required>
                    <option :value="true">Activo</option>
                    <option :value="false">Inactivo</option>
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
    </div>
</template>

<script src="./FormProdView.ts" lang="ts">

</script>

<style scoped>

</style>