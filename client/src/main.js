import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import useData from "@/plugins/userData.js";
// import VueCookies from "vue-cookies";
import VueCookies from "vue-cookies-reactive";

Vue.use(VueCookies);
Vue.config.productionTip = false;
Vue.use(useData, store);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
