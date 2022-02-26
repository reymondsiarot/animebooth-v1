export default (Vue, $userApi) => {
  Vue.mixin({
    computed: {
      $auth() {
        try {
          let userData = Vue.$cookies.get("user") || null;
          let userLogout = null;
          if (userData) {
            // create logout function
            userLogout = async function () {
              try {
                await $userApi.post("/logout");
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
