export default {
  install(Vue, store) {
    console.log("INSTALLED");
    Vue.mixin({
      computed: {
        count() {
          return store.state.counter;
        },
        cookie() {
          return this.$cookies.get("me");
        },
      },
    });
  },
};
