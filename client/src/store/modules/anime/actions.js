import GQLanime from "../../../graphql/anime.js";
import apolloProvider from "../../../plugins/apollo";
const apolloQuery = apolloProvider.defaultClient;
const actions = {
  getAnimeList: async ({ commit }, payload) => {
    const { data, errors } = await apolloQuery.query({
      query: GQLanime,
      variables: { ...payload, is_search: false },
    });
    if (errors) {
      throw errors;
    }

    commit("setAnimeList", data.animeList);
    console.log("AWd", data);
  },
  getAnimeListSearched: async ({ commit }, payload) => {
    const { data, errors } = await apolloQuery.query({
      query: GQLanime,
      variables: { ...payload, is_search: true },
    });
    if (errors) {
      console.log(errors);
      throw errors;
    }

    commit("setAnimeListSearched", data.animeList);
    console.log(data);
  },
};
export default actions;
