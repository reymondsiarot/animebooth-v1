import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueCookies from "vue-cookies";
import vuetify from "./plugins/vuetify";
import "./assets/css/tailwind.css";
import apolloProvider from "./plugins/apollo";
import VueApollo from "vue-apollo";
import AppApollo from "./plugins/util/appApollo";
import userApi from "./api/userApi";
import userData from "./plugins/util/userData";
import WebTorrent from "webtorrent";
const webTorrent = new WebTorrent();

Vue.prototype.$userApi = userApi;
Vue.prototype.$webTorrent = webTorrent;
Vue.use(VueApollo);
Vue.use(AppApollo);
Vue.use(VueCookies);
Vue.use(userData, userApi);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  provide: apolloProvider.provide(),
  render: (h) => h(App),
}).$mount("#app");
