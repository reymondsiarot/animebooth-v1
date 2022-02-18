const AnimeRepository = require("../repositories/AnimeRepository");
const EpisodeRepository = require("../repositories/EpisodeRepository");
const GenreRepository = require("../repositories/GenreRepository");

module.exports = {
  Query: {
    animeList: async (parent, args, context, info) => {
      return await AnimeRepository.list();
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
    }
    
  },

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

  Episode: {
    anime: async (parent) => {
      return await AnimeRepository.model.findOne({
        where: { id: parent.anime_id },
      });
    },
  },

  // ...other Query fields...
};
