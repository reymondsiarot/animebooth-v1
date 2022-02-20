const sequelize = require("sequelize");
const { Episode, Genre } = require("../../database/models");
const AnimeRepository = require("../repositories/AnimeRepository");
const GenreRepository = require("../repositories/GenreRepository");

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
  animeHello = async (req, res) => {
    res.send(
      await AnimeRepository.model.findOne({
        where: {
          id: req.params.id || 1,
        },
      })
    );
  };
  animeGenres = async (req, res) => {
    let data = await GenreRepository.fetchGenres();
    res.send(data);
  };
}

module.exports = new AnimeController();
