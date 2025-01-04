<template>
  <form>
    <div class="container mx-auto py-8">
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
          <!-- Nombre del comensal -->
          <div class="flex justify-between items-center">
            <input
              type="text"
              v-model="guest.movement.person.fullname"
              placeholder="Nombre del comensal"
              class="border-b border-gray-300 focus:outline-none focus:border-blue-500"
              :disabled="guest.isPaid"
            />
            <button
              v-if="paymentType === 'individual'"
              @click="payForGuest(index)"
              :disabled="guest.isPaid"
              class="ml-4 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {{ guest.isPaid ? "Pagado" : "Pagar" }}
            </button>
          </div>

          <!-- Productos del comensal -->
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Productos</h3>
            <ul class="mb-4 overflow-y-scroll h-24">
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
              <select
                v-model="guest.movement.newProduct"
                class="border rounded p-2 mr-2"
                :disabled="guest.movement.person.fullname === '' || guest.isPaid"
              >
                <option
                  v-for="productType in ProductOrder?.data"
                  :key="productType.id"
                  :value="productType"
                >
                  {{ productType?.description }} - ${{ productType.price }}
                </option>
              </select>
              <input
                v-model="guest.movement.newQuantity"
                type="number"
                class="border rounded p-2 w-16 mr-2"
                placeholder="Cantidad"
                :disabled="guest.movement.person.fullname === '' || guest.isPaid"
              />
              <button
                @click="addProduct(index)"
                type="button"
                class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                :disabled="guest.movement.person.fullname === '' || guest.isPaid"
              >
                Agregar Producto
              </button>
            </div>
          </div>

          <!-- Total del comensal -->
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Total: ${{ calculateTotal(index) }}</h3>
          </div>
        </div>
      </div>

      <!-- Botón para pagar juntos -->
      <div v-if="paymentType === 'together'" class="mt-6">
        <button
          @click="payTogether"
          class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Pagar Todo
        </button>
      </div>

      <!-- Total final -->
      <div class="mt-6">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Total Final: ${{ calculateTotalAll() }}</h3>
      </div>

      <!-- Botón para guardar -->
      <div class="mt-6">
        <!-- :disabled="!allPaid" -->
        <button
          @click="onSubmit"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Guardar
        </button>
        <button
          v-if="allPaid"
          @click="finalizeOrder"
          class="ml-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Finalizar Venta
        </button>
      </div>
    </div>
  </form>
</template>

<script src="./FormClientOrderView" lang="ts"></script>

<style>
.itemntainer {
  max-width: 1200px;
}
</style>
