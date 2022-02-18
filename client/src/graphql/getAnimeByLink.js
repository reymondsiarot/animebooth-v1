import gql from "graphql-tag";

export default gql`
  query ($link: String!) {
    getAnimeByLink(link: $link) {
      mal_id
      anime_link
      url
      images
      title
    }
  }
`;
