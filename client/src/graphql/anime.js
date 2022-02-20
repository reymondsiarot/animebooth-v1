import gql from "graphql-tag";

export default gql`
  query Anime($first: Int!, $page: Int, $search: String) {
    anime(first: $first, page: $page, search: $search) {
      data {
        id
        mal_id
        title
        episodes
        synopsis
        images
        type
        genres {
          id
          mal_id
          name
        }
      }
      paginatorInfo {
        count
        currentPage
        firstItem
        lastItem
        perPage
        hasMorePages
      }
    }
  }
`;
