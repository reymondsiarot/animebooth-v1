import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from "vue-cookies-reactive";
import vuetify from "./plugins/vuetify";
import "./assets/css/tailwind.css";
import apolloProvider from "./plugins/apollo";
import VueApollo from "vue-apollo";
import AppApollo from "./plugins/util/appApollo";
import userApi from "./api/userApi";

Vue.use(VueApollo);
Vue.use(AppApollo);
Vue.use(VueCookies);

Vue.prototype.$userApi = userApi;

Vue.config.productionTip = false;
new Vue({
  router,
  vuetify,
  store,
  provide: apolloProvider.provide(),
  render: (h) => h(App),
}).$mount("#app");
