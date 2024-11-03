import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import "./assets/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import { vCustomPointer } from "./directives/vCustomPointer";

const app = createApp(App);

app.directive("custom-pointer", vCustomPointer);

app.mount("#app");
