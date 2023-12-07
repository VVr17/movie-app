import { createApp } from "vue";
import VueAwesomePaginate from "vue-awesome-paginate";
import App from "./App.vue";
import router from "./router";

import "vue-awesome-paginate/dist/style.css";
import "primeicons/primeicons.css";
import "./styles/index.css";

createApp(App).use(router).use(VueAwesomePaginate).mount("#app");
