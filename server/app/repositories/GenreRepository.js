const { Genre } = require("../../database/models");

const BaseRepository = require("./BaseRepository");

class GenreRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }
  list = async () => {
    try {
      let created = await this.model.findAll();
      return created;
    } catch (er) {
      return er;
    }
  };
  fetchGenres = async () => {
    try {
      //https://api.jikan.moe/v4/genres/anime
      const data = await this.fetchAPI("/genres/anime");
      if (data.data) {
        let created = await this.bulkCreate(data.data);
        return created;
      }

      return null;
    } catch (er) {
      return er;
    }
  };
}
module.exports = new GenreRepository(Genre);
