const { gql } = require("apollo-server-express");
const animeSchema = require("./schema/anime.schema");
const episodeSchema = require("./schema/episode.schema");
const genreSchema = require("./schema/genre.schema");
const typeDefs = gql`
  # Your schema will go here

  ${animeSchema}
  ${episodeSchema}
  ${genreSchema}
  type Query {
    animeList: [Anime]
    anime(id: ID!): Anime
    episode(id: ID!): Episode
    getAnimeByLink(link: String!): Anime
    genres: [Genre]
  }
`;

module.exports = typeDefs;
