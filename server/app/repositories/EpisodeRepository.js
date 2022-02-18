const { Episode } = require("../../database/models");

const BaseRepository = require("./BaseRepository");

class EpisodeRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }
  getEpisodesByAnimeId = async (id) => {
    return await this.model.findAll({ where: { anime_id: id } });
  };

  /// ADMIN SECTION
}
module.exports = new EpisodeRepository(Episode);
