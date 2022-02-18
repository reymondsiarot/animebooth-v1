import gql from "graphql-tag";

export default gql`
  query ($episodeId: ID!) {
    episode(id: $episodeId) {
      id
      title
      anime {
        id
        title
        synopsis
        type
        score
        genre_list {
          name
        }
      }
      video
      episode_number
    }
  }
`;
