export default (Vue, $authApi) => {
  Vue.mixin({
    computed: {
      $auth() {
        try {
          let userData = Vue.$cookies.get("_user") || null;
          let userLogout = null;
          if (userData) {
            // create logout function
            userLogout = async function () {
              try {
                await $authApi.post("/api/logout");
              } catch (er) {}
              location.reload();
            };
            return { user: userData, logout: userLogout };
          }
        } catch (er) {
          console.log(er);
        }
        return { user: null, logout: null };
      },
    },
    methods: {},
  });
};
