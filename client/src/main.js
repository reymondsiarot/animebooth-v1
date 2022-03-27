import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueCookies from "vue-cookies";
import vuetify from "./plugins/vuetify";
import "./assets/css/tailwind.css";

import { animeApi, authApi, jikanApi } from "./api";
import userData from "./plugins/util/userData";
import "../node_modules/nprogress/nprogress.css";

import WebTorrent from "webtorrent";
const webTorrent = new WebTorrent();

Vue.prototype.$jikan = jikanApi;
Vue.prototype.$authApi = authApi;
Vue.prototype.$animeApi = animeApi;
Vue.prototype.$webTorrent = webTorrent;
Vue.use(VueCookies);
Vue.use(userData, authApi);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
