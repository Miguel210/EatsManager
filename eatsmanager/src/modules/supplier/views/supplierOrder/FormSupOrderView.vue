import { Description } from '../../../product/interfaces/product.interface';
<template>
    <div>
        <form @submit="onSubmit">

            <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega la informacion</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="personId" class="font-semibold w-24">Proveedor</label>
                <input v-model="personId" v-bind="personIdAttrs" required />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="folio" class="font-semibold w-24">Folio</label>
                <input v-model="folio" v-bind="folioAttrs" required />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="folio" class="font-semibold w-24">Fecha de pago</label>
                <input v-model="paymentDate" v-bind="paymentDateAttrs" required />
            </div>



            <div class="flex items-center gap-4 mb-4">
                <label for="productId" class="font-semibold w-24">Producto</label>
                <select name="productId" id="productId" v-model="productId" :model="productIdAttrs" required>
                    <option :value="true">Activo</option>
                    <option :value="false">Inactivo</option>
                </select>
            </div>

            <table class="table-auto w-full border-collapse border border-gray-200">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-200 px-4 py-2">Producto</th>
                        <th class="border border-gray-200 px-4 py-2">Cantidad</th>
                        <th class="border border-gray-200 px-4 py-2">Precio unitario</th>
                        <th class="border border-gray-200 px-4 py-2">SubTotal</th>
                        <th class="border border-gray-200 px-4 py-2">Tax</th>
                        <th class="border border-gray-200 px-4 py-2">Total</th>
                        <th class="border border-gray-200 px-4 py-2">Costo unitario</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in quantity" :key="index" class="hover:bg-gray-50">
                        <td class="border border-gray-200 px-4 py-2">
                            <input type="text" v-model="productId[index]['id']" id="" >
                            <AutoComplete v-model="productId[index]['id']" :suggestions="items" @complete="search" />
                        </td>
                        <td class="border border-gray-200 px-4 py-2">{{ item.quantity }}</td>
                        <td class="border border-gray-200 px-4 py-2">{{ item.priceUnit }}</td>
                        <td class="border border-gray-200 px-4 py-2">{{ item.subTotal }}</td>
                        <td class="border border-gray-200 px-4 py-2">{{ item.tax }}</td>
                        <td class="border border-gray-200 px-4 py-2">{{ item.total }}</td>
                        <td class="border border-gray-200 px-4 py-2">{{ item.costUnit }}</td>


                    </tr>
                </tbody>
            </table>
                <!-- <div class="flex items-center gap-4 mb-4">
                    <label for="quantity" class="font-semibold w-24">Cantidad</label>
                    <input v-model="quantity[0].product.description" v-bind="quantityAttrs" required />
                </div> -->
                <div class="flex items-center gap-4 mb-4">
                    <label for="priceUnit" class="font-semibold w-24">Precio Unitario</label>
                    <input v-model="priceUnit" v-bind="priceUnitAttrs" required />
                </div>
                <div class="flex items-center gap-4 mb-4">
                    <label for="subTotal" class="font-semibold w-24">subTotal</label>
                    <input v-model="subTotal" v-bind="subTotalAttrs" required />
                </div>
                <div class="flex items-center gap-4 mb-4">
                    <label for="tax" class="font-semibold w-24">Taxas</label>
                    <input v-model="tax" v-bind="taxAttrs" required />
                </div>
                <div class="flex items-center gap-4 mb-4">
                    <label for="total" class="font-semibold w-24">Total</label>
                    <input v-model="total" v-bind="totalAttrs" required />
                </div>
                <div class="flex items-center gap-4 mb-4">
                    <label for="costUnit" class="font-semibold w-24">costo unitario</label>
                    <input v-model="costUnit" v-bind="costUnitAttrs" required />
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

<script src="./supplierOrderView.ts" lang="ts">

</script>

<style scoped></style>