import gql from "graphql-tag";

export default gql`
  query Anime {
    animeList {
      id
      mal_id
      anime_link
      episode_list {
        id
        title
        episode_number
        video
      }
      type
      episodes
      images
      title
      synopsis
      score
      genre_list {
        name
      }
    }
  }
`;
