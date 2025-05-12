import { createApp } from "vue";
import App from "./app.vue";
import { createWebHistory, createRouter } from "vue-router";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { routes } from "./app.routes";
import { createPinia } from 'pinia';
import './main.scss';
import 'primeicons/primeicons.css';

const router = createRouter({
  history: createWebHistory('/CatsProject/'),
  routes,
});

const pinia = createPinia();

const app = createApp(App).use(router);
await router.isReady();

app
  .use(pinia)
  .use(PrimeVue, {
    // Default theme configuration
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: true,
      },
    },
  })
  .mount("#app");
