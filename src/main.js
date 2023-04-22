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

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faSearch, faStar, faUser } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faStar, faUser, faSearch);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
