export default (Vue) => {
  Vue.mixin({
    methods: {
      //
      // @param {string} query
      // @param {object} variables
      // @param {object} options
      //
      // @return {Promise}
      //
      apolloQuery: async function (query, variables, options) {
        const apollo = this.$apollo;
        const { data, errors } = await apollo.query({
          query,
          variables,
          ...options,
        });
        if (errors) {
          throw errors;
        }
        return data;
      },
      //
      // @param {string} mutation
      // @param {object} variables
      // @param {object} options
      //
      // @return {Promise}
      //
      apolloMutation: async function (mutation, variables, options) {
        const apollo = this.$apollo;
        const { data, errors } = await apollo.mutate({
          mutation,
          variables,
          ...options,
        });
        if (errors) {
          throw errors;
        }
        return data;
      },
    },
  });
};
