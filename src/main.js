import { createApp } from "vue";
import App from "./App.vue";

import "./assets/style.css";

const app = createApp(App);

app.mixin({
  data() {
    return {
      api: new Proxy(fetch, {
        get(target, key) {
          return target[key];
        },
      }),
    };
  },
});

createApp(App).mount("#app");
