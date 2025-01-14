<template>
  <section id="login" class="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
    <div class="bg-red-400 p-1 rounded-t-lg">
      <div class="flex items-center justify-center text-4xl font-black text-white m-3">
        <h1 class="tracking-wide">Forajido Speakeasy</h1>
      </div>
    </div>

    <div class=" bg-red-300 p-6 rounded-b-lg">
      <form @submit.prevent="onLogin" class="flex flex-col justify-center">
        <label class="text-m text-white">Usuario</label>
        <input v-model="myForm.username" ref="usernameInputRef"
               class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
               focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
               type="text" name="usuario" placeholder="usuario" required>
        <label class="text-m text-white">Contraseña</label>
        <input v-model="myForm.password" ref="passwordInputRef"
               class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
               focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
               type="password" name="password" placeholder="********" required>
               <Toast/>
        <button class="px-4 py-1.5 rounded-md shadow-lg bg-sky-600 font-medium text-gray-100 block hover:bg-sky-700 transition duration-300"
                type="submit"
                >
          <span id="login_process_state" class="hidden">Checking ...</span>
          <span id="login_default_state">Login</span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '../store/auth.store';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';

const toast = useToast();
const authStore = useAuthStore();

const usernameInputRef = ref<HTMLInputElement | null>(null);
const passwordInputRef = ref<HTMLInputElement | null>(null);

const router = useRouter();
const myForm = reactive({
  username: '',
  password: ''
});

const onLogin = async () => {
  if (myForm.username === '') {
    return usernameInputRef.value?.focus();
  }

  if (myForm.password === '') {
    return passwordInputRef.value?.focus();
  }

  const ok = await authStore.login(myForm.username, myForm.password);

  if (ok) {
    router.replace('/');
  } else {

    show()
  }
}
const show = () => {
  toast.add({ severity: 'error', summary: 'Error', detail: 'Usuario no encontrado', life: 3000 });
}

</script>

<style scoped>
/* Tu estilo aquí */
</style>
