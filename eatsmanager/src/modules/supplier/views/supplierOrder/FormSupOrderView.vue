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
        <label for="documentId" class="font-semibold w-24">Documento</label>
        <select name="documentId" id="documentId" v-model="documentId" required>
          <option value="314bc909-4e7d-423c-8c61-6fb712ab48f4">
            Compra
          </option>
        </select>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="status" class="font-semibold w-24">Estatus</label>
        <select name="status" id="status" v-model="status" required>
          <option value="Pendiente"> Pendiente </option>
          <option value="Aprobado"> Aprobado </option>
          <option value="En Proceso"> En Proceso </option>
          <option value="Enviado"> Enviado </option>
          <option value="Recibido"> Recibido </option>
          <option value="Completada"> Completada </option>
          <option value="Cancelada"> Cancelada </option>
          <option value="Devolución"> Devolución </option>
          <option value="Pagado"> Pagado </option>
          <option value="Parcialmente Pagado"> Parcialmente Pagado: </option>
          <option value="Facturada"> Facturada </option>
        </select>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="folio" class="font-semibold w-24">Folio</label>
        <input v-model="folio" v-bind="folioAttrs" required />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="folio" class="font-semibold w-24">Fecha de pago</label>
        <input type="date" v-model="paymentDate" v-bind="paymentDateAttrs" required />
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
          <input type="number" name="costUnit" id="" v-model="item.costUnit" min="0">

        </td>
        <td class="border border-gray-200 px-4 py-2">
          <input type="number" name="quantity" id="" v-model="item.quantity" min="0"  max="99" >
        </td>
        <td class="border border-gray-200 px-4 py-2">
          <input type="number" name="priceUnit" id="" v-model="item.priceUnit" min="0">
        </td>
        <td class="border border-gray-200 px-4 py-2">
          <input type="number" name="subTotal" id="" v-model="item.subTotal" @select="updateSubtotal(item)" min="0">
        </td>
        <td class="border border-gray-200 px-4 py-2">
          <input type="number" name="tax" id="" v-model="item.tax" min="0">
        </td>
        <td class="border border-gray-200 px-4 py-2">
          <input type="number" name="total" id="" v-model="item.total" @select="updateTotal(item)" min="0">
        </td>
      </tr>
    </tbody>
  </table>
</div>
<label for="Total Final">Total Final</label>
<input type="number" name="amount" id="amount" v-model="amount" disabled >
      <div class="flex justify-end gap-2">
        <button>Reporte</button>
        <button
          type="submit"
          :disabled="isPending"
          class="disabled:bg-gray-200 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="onSubmit"
        >
          Guardar
        </button>
      </div>
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
