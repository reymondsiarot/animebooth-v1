const { gql } = require("apollo-server-express");
const animeSchema = require("./schema/anime.schema");

const typeDefs = gql`
  # Your schema will go here
  ${animeSchema}

  type Query {
    animeList: [Anime]
    anime(id: ID!): Anime
  }
`;

module.exports = typeDefs;
