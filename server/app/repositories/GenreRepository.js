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
}
module.exports = new GenreRepository(Genre);
