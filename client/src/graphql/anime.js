import gql from "graphql-tag";

export default gql`
  query Anime(
    $page: Int
    $search: String
    $genre: String
    $limit: Int
    $is_search: Boolean
  ) {
    animeList(
      page: $page
      search: $search
      genre: $genre
      limit: $limit
      is_search: $is_search
    ) {
      count
      rows {
        id
        mal_id
        anime_link
        type
        Episodes {
          id
        }
        images
        title
        synopsis
        score
        duration
        genre_list {
          name
        }
      }
    }
  }
`;
