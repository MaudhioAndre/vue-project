import "./assets/main.css";

// // Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./routes";

const app = createApp(App);
const pinia = createPinia()

app.provide("angka", "123");
app.use(router);
app.use(pinia)
// app.use(BootstrapVue);
// app.use(IconsPlugin);

app.mount("#app");
