import gql from "graphql-tag";
export const anime = gql`
  query Anime {
    animeList {
      id
      mal_id
      type
      episodes
      images
      title
      synopsis
      score
      genres
    }
  }
`;
