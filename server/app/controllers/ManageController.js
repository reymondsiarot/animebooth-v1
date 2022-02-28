const ManageRepository = require("../repositories/ManageRepository");

class AnimeController {
  anime = async (req, res) => {
    console.log(req.query);
    let data = await ManageRepository.fetchAnime();
    res.json(data);
  };
  animeById = async (req, res) => {
    console.log(req.params.id);
    let data = await ManageRepository.fetchAnime(req.params.id);
    res.json(data);
  };
  animeGenres = async (req, res) => {
    let data = await ManageRepository.fetchGenres();
    res.send(data);
  };
}

module.exports = new AnimeController();
