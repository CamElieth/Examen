import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import NuestroEquipo from "./pages/nuestroEquipo.vue";
import MisionVision from "./pages/MisionVision.vue";
import Servicio from "./pages/Services.vue";
import Fotos from "./pages/Photos.vue";
import Contacts from "./pages/Contacts.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/nuestroEquipo", component: NuestroEquipo },
    { path: "/misionVision", component: MisionVision },
    { path: "/services", component: Servicio },
    { path: "/photos", component: Fotos },
    { path: "/contacto", component: Contacts },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");