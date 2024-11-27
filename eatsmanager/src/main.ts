import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import ToastService from 'primevue/toastservice';
import { VueQueryPlugin } from '@tanstack/vue-query'
import ConfirmationService from 'primevue/confirmationservice';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
      preset: Aura,
      options: {
        darkModeSelector: false || 'none',
    }
  }
});
app.use(ToastService);
app.use(VueQueryPlugin);
app.use(ConfirmationService);
app.use(router);

app.mount('#app')
