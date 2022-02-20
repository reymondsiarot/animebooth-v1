const AnimeRepository = require("../repositories/AnimeRepository");
const EpisodeRepository = require("../repositories/EpisodeRepository");
const GenreRepository = require("../repositories/GenreRepository");
const { Op } = require("sequelize");

module.exports = {
  //MAIN QUERY
  Query: {
    animeList: async (parent, args, context, info) => {
      const page = args.page || 1;
      const search = args.search;
      const limit = search && args.is_search ? 5 : args.limit || 10;

      const fa = await AnimeRepository.model.findAndCountAll({
        where: {
          title: {
            [Op.like]: `%${search}%`,
          },
        },
        offset: (page - 1) * limit,
        limit: limit,
      });
      return ({ count, rows } = fa);
    },
    anime: async (parent, args, context, info) => {
      return await AnimeRepository.findOne(args.id);
    },
    episode: async (parent, args, context, info) => {
      const response = await EpisodeRepository.model.findOne({
        where: { id: args.id },
      });
      return response;
    },
    getAnimeByLink: async (parent, args, context, info) => {
      return await AnimeRepository.findOneByLink(args.link);
    },
    genres: async (parent, args, context, info) => {
      return await GenreRepository.list();
    },
  },
  //ANIME QUERY MODEL
  Anime: {
    episode_list: async (parent) => {
      return await EpisodeRepository.getEpisodesByAnimeId(parent.id);
    },
    genre_list: async (parent) => {
      return await GenreRepository.model.findAll({
        where: { mal_id: JSON.parse(parent.genres) },
      });
    },
  },
  //EPISODE QUERY MODEL
  Episode: {
    anime: async (parent) => {
      return await AnimeRepository.model.findOne({
        where: { id: parent.anime_id },
      });
    },
  },

  // ...other Query fields...
};
