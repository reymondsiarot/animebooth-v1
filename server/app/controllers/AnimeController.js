const AnimeRepository = require("../repositories/AnimeRepository");

class AnimeController {
  anime = async (req, res) => {
    console.log(req.query);
    let data = await AnimeRepository.fetchAnime();
    res.json(data);
  };
  animeById = async (req, res) => {
    console.log(req.params.id);
    let data = await AnimeRepository.fetchAnime(req.params.id);
    res.json(data);
  };
}

module.exports = new AnimeController();
