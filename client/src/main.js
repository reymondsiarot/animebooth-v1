import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import useData from "@/plugins/userData.js";
import VueCookies from "vue-cookies-reactive";
import vuetify from "./plugins/vuetify";
import "./assets/css/tailwind.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import apolloProvider from "./plugins/apollo";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);
Vue.use(VueCookies);
// Vue.config.productionTip = false;
Vue.use(useData, store);
new Vue({
  router,
  vuetify,
  store,
  provide: apolloProvider.provide(),
  render: (h) => h(App),
}).$mount("#app");
