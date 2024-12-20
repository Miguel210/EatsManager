<template>
  <div>
    <form>
      <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega la informacion</span>
      <div class="flex items-center gap-4 mb-4">
        <label for="supplierId" class="font-semibold w-24">Proveedor</label>
        <select name="supplierId" id="supplierId" v-model="personId" required>
                <option
                  v-for="productType in supplierAutocomplete?.data"
                  :key="productType.personId"
                  :value="productType.personId"
                  :selected="productType.personId === personId"
                >
                  {{ productType.person.fullname }}
                </option>
              </select>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="folio" class="font-semibold w-24">Folio</label>
        <input v-model="folio" v-bind="folioAttrs" required />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="folio" class="font-semibold w-24">Fecha de pago</label>
        <input  v-model="paymentDate" v-bind="paymentDateAttrs" required />
      </div>
      <button @click.prevent="addNewRecord" class="mb-4 p-2 bg-blue-500 text-white rounded">Agregar Nuevo Registro</button>
<div class="max-h-72 overflow-scroll "> 
  <table class="table-auto w-full border-collapse border border-gray-200">
    <thead>
      <tr class="bg-gray-100">
        <th class="border border-gray-200 px-4 py-2">Producto</th>
        <th class="border border-gray-200 px-4 py-2">Costo unitario</th>
        <th class="border border-gray-200 px-4 py-2">Cantidad</th>
        <th class="border border-gray-200 px-4 py-2">Precio unitario</th>
        <th class="border border-gray-200 px-4 py-2">SubTotal</th>
        <th class="border border-gray-200 px-4 py-2">Tax</th>
        <th class="border border-gray-200 px-4 py-2">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in movementDetail " :key="index" class="hover:bg-gray-50">
        <td class="border border-gray-200 px-4 py-2">
          <select name="productId" id="productId" v-model="productId[index].product.id" required>
            <option
              v-for="productType in ProductAutoComplete?.data"
              :key="productType.id"
              :value="productType.id"
              :selected="productType.id === productId[index].product.id"
            >
              {{ productType.description }}
            </option>
          </select>
        </td>
        <td class="border border-gray-200 px-4 py-2">
          <input type="number" name="quantity" id="" v-model="item.costUnit" >

        </td>
        <td class="border border-gray-200 px-4 py-2">
          <input type="number" name="quantity" id="" v-model="item.quantity"  >
        </td>
        <td class="border border-gray-200 px-4 py-2">
          <input type="number" name="quantity" id="" v-model="item.priceUnit" >
        </td>
        <td class="border border-gray-200 px-4 py-2">
          <input type="number" name="quantity" id="" v-model="item.subTotal" @select="updateSubtotal(item)">
        </td>
        <td class="border border-gray-200 px-4 py-2">
          <input type="number" name="quantity" id="" v-model="item.tax" >
        </td>
        <td class="border border-gray-200 px-4 py-2">
          <input type="number" name="quantity" id="" v-model="item.total" @select="updateTotal(item)">
        </td>
      </tr>
    </tbody>
  </table>
</div>
<label for="Total Final">Total Final</label>
<input type="number" name="amount" id="amount" v-model="amount" disabled >
      <div class="flex justify-end gap-2">
        <button
          type="submit"
          :disabled="isPending"
          class="disabled:bg-gray-200 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="onSubmit"
        >
          Guardar
        </button>
      </div>
      {{ amount }}
    </form>
    <div class="grid grid-cols-2">
      <pre class="bg-blue-200">
                {{ JSON.stringify(values, null, 2) }}
            </pre
      >
      <pre class="bg-red-200">
                {{ JSON.stringify(errors, null, 2) }}
            </pre
      >
      <pre class="bg-green-200 col-span-2">
                {{ JSON.stringify(meta, null, 2) }}
            </pre
      >
    </div>
  </div>
</template>

<script src="./supplierOrderView.ts" lang="ts"></script>

<style>
input {
  padding: 0.2rem;
  border: 1px solid #ccc;
}
</style>
