const AnimeRepository = require("../repositories/AnimeRepository");
const EpisodeRepository = require("../repositories/EpisodeRepository");
const GenreRepository = require("../repositories/GenreRepository");
const sequelize = require("sequelize");
const { Episode } = require("../../database/models");
module.exports = {
  //MAIN QUERY
  Query: {
    animeList: async (parent, args, context, info) => {
      const page = args.page || 1;
      const search = args.search;
      const limit = search && args.is_search ? 5 : args.limit || 20;
      const genre = args.genre || "";

      const filteredGenre = await GenreRepository.model.findOne({
        where: {
          name: genre,
        },
      });
      const genreMal_id = filteredGenre && (filteredGenre.name || null);

      const fa = await AnimeRepository.model.findAll({
        where: {
          [sequelize.Op.or]: genreMal_id
            ? sequelize.literal(
                `JSON_UNQUOTE(JSON_EXTRACT(genres,"$[*].name")) like '%${genreMal_id}%'`
              )
            : sequelize.literal(`1`),
          title: {
            [sequelize.Op.like]: `%${search ? search : ""}%`,
          },
        },
        offset: (page - 1) * limit,
        limit: limit,
        include: [Episode],
      });

      return { count: 20, rows: fa };
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
