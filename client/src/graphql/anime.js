import gql from "graphql-tag";

export default gql`
  query Anime(
    $page: Int
    $limit: Int
    $search: String
    $is_search: Boolean
    $genre: String
  ) {
    animeList(
      page: $page
      limit: $limit
      search: $search
      is_search: $is_search
      genre: $genre
    ) {
      rows {
        id
        mal_id
        anime_link
        images
        title
        title_english
        title_synonyms
        synopsis
        type
        score
        genres
      }
      count
    }
    genres {
      name
    }
    topAnime {
      rows {
        id
        mal_id
        anime_link
        images
        title
        title_english
        title_synonyms
        synopsis
        type
        score
        genres
      }
    }
  }
`;
