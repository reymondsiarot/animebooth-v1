const actions = {
  async getAdminAnimeList({ commit, state }, payload) {},
  async getAnimeList({}, payload) {
    try {
      const response = await this._vm.$animeApi.get("/animes", {
        params: payload,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: err };
    }
  },
  async getGenres({ commit }) {
    try {
      const response = await this._vm.$animeApi.get("/genres");
      if (response.data.success) commit("setGenres", response.data.data);
    } catch (err) {
      console.log(err);
      return { success: false, message: err };
    }
  },
  async getAnimeListSearched({ commit }, payload) {
    try {
      const response = await this._vm.$animeApi.get("/animes", {
        params: payload,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: err };
    }
  },

  async addAnime({}, payload) {
    try {
      const response = await this._vm.$animeApi.post("/animes", payload);
      return response.data;
    } catch (err) {
      console.log(err);
      return { success: false, message: err };
    }
  },
};
export default actions;
