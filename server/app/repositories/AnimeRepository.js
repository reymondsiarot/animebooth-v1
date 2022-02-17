const { Anime } = require("../../database/models");

const BaseRepository = require("./BaseRepository");
const IAnime = require("./jsinterface/IAnime");

class AnimeRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }

  /// ADMIN SECTION
  fetchAnime = async (id) => {
    try {
      const data = await this.fetchAPI(`/anime${id ? `/${id}` : "/1"}`);
      if (data.data) {
        const ianime = IAnime(data.data);
        let created = await this.upsert(ianime, { mal_id: ianime.mal_id });
        return created;
      }
      return null;
    } catch (er) {
      return er;
    }
  };

  list = async () => {
    try {
      let created = await this.model.findAll();
      return created;
    } catch (er) {
      return er;
    }
  };
}
module.exports = new AnimeRepository(Anime);
