const mutations = {
  setAnimeList(state, payload) {
    state.animeList = payload;
  },
  setAnimeListSearched(state, payload) {
    state.animeListSearched = payload;
  },
  setGenres(state, payload) {
    state.genres = payload;
  },
};

export default mutations;
