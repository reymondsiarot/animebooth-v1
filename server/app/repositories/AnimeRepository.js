const { Anime } = require("../../database/models");

const BaseRepository = require("./BaseRepository");

class AnimeRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }
  fetchAnime = async (id) => {
    try {
      const data = await this.fetchAPI(`/anime${id ? `/${id}` : "/1"}`);
      if (data.data) {
        let creatd = await this.create({ anime_details: data.data });
        return creatd;
      }
      return null;
    } catch (er) {
      return er;
    }
  };
}
module.exports = new AnimeRepository(Anime);
