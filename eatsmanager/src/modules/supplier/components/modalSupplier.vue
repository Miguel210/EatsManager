<template>
    <div  class="card bg-white">
      
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega la informacion</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="Nombre" class="font-semibold w-24">Nombre Completo</label>
            <InputText id="fullname" class="flex-auto" autocomplete="off" v-model="fullname" :invalid="!fullname" />
        </div>
        <!-- <div class="flex items-center gap-4 mb-4">
            <label for="genero" class="font-semibold w-24">Genero</label>
            <Select v-model="gender" :options="cities" optionLabel="name" placeholder="Selecciona un genero"
                :invalid="!gender" class="w-full md:w-56" />

        </div> -->
        <div class="flex items-center gap-4 mb-4">
            <label for="profile" class="font-semibold w-24">Perfil</label>
            <CustomSelect v-model="profile" :model="profile" :option="profileDt?.data || []" placeHolder="Selecciona un perfil" labelOps="name"/>
        </div>
        <div>
        </div>
        <div class="flex items-center gap-4 mb-4">
            <label for="typeProfile" class="font-semibold w-24">Tipo de Persona</label>
            <CustomSelect v-model="typePerson" :model="typePerson" :option="typeProfileDt?.data || []" placeHolder="Selecciona un tipo de persona" labelOps="description"/>

        </div>
        <div class="flex justify-end gap-2">
            <slot name="actions"/>
        </div>
    </div>
</template>

<script src="../views/SupplierView.ts" lang="ts">


</script>

<style scoped></style>
