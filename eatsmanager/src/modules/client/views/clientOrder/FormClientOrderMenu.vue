<template>
  <form>

  <div class="itemntainer mx-auto py-8">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Gestión de Comensales</h1>

    <!-- Botón para agregar comensal -->
    <button
      @click="addGuest"
      type="button"

      class="mb-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      Agregar Comensal
    </button>

    <!-- Selección de forma de pago -->
    <div class="flex items-center mb-6">
      <label class="mr-4 font-semibold text-gray-700">Forma de pago:</label>
      <select v-model="paymentType" class="border rounded p-2">
        <option value="individual">Individual</option>
        <option value="together">Junto</option>
      </select>
    </div>

    <!-- Listado de comensales -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(guest, index) in clientOrder"
        :key="index"
        class="bg-white shadow-md rounded-lg p-4"
      >
      <!--! aqui  -->
      <!-- {{ guest.movement }} -->
        <!-- Nombre del comensal -->
        <div class="flex justify-between items-center">
          <input
            type="text"
            v-model="guest.movement.person.fullname"
            placeholder="Nombre del comensal"
            class="border-b border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        <!-- Productos del comensal -->
        <div class="mt-4">
          <h3 class="text-lg font-semibold text-gray-700 mb-2">Productos</h3>
          <ul class="mb-4">
            <li
              v-for="(product, pIndex) in guest.movement.movementDetail"
              :key="pIndex"
              class="flex justify-between items-center mb-2"
            >
              <span>
                {{ product.product.description }} - ${{ product.product.price }} x
                {{ product.quantity }} = ${{ product.total }}
              </span>
            </li>
          </ul>

          <!-- Agregar nuevo producto -->
          <div class="flex items-center mt-2">
            <!-- newProduct.product -->
            <select
              v-model="guest.movement.newProduct"
              class="border rounded p-2 mr-2"
              :disabled="guest.movement.person.fullname === ''"
            >
            <option
                v-for="productType in ProductOrder?.data"
                :key="productType.id"
                :value="productType"
              >
                {{ productType?.description }} - ${{ productType.price }}
              </option>
            </select>
            <!-- ? CHEKING -->
            <input
              v-model="guest.movement.newQuantity"
              type="number"
              class="border rounded p-2 w-16 mr-2"
              placeholder="Cantidad"
              :disabled="guest.movement.person.fullname === ''"
            />
            <button
              @click="addProduct(index)"
              type="button"
              class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
              :disabled="guest.movement.person.fullname === ''"
            >
              Agregar Producto
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Pago junto -->
    <div v-if="paymentType === 'together'" class="mt-6">
      <button
        @click="payTogether"
        class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Pagar Todo
      </button>
    </div>
  </div>
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
</template>

<script src="./FormClientOrderView" lang="ts"></script>

<style>
.itemntainer {
  max-width: 1200px;
}
</style>
