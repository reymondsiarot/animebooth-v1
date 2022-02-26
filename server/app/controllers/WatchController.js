const AnimeRepository = require("../repositories/AnimeRepository");
const GenreRepository = require("../repositories/GenreRepository");

class WatchController {
  constructor() {}
  watch = async (req, res) => {
    const data = await AnimeRepository.findOne(req.body.id);
    return res.send("hellow");
  };
}

module.exports = new WatchController();
