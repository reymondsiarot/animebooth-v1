const AnimeRepository = require("../repositories/AnimeRepository");

module.exports = {
  Query: {
    animeList: async (parent, args, context, info) => {
      return await AnimeRepository.list();
    },
    anime: async (parent, args, context, info) => {
      return await AnimeRepository.findOne(args.id);
    },
  },

  // ...other Query fields...
};
