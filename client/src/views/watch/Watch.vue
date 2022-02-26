<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import GQLAnimeByLink from "../../graphql/getAnimeByLink";

export default {
  apollo: {
    getAnimeByLink: {
      query: GQLAnimeByLink,
      variables() {
        return {
          link: this.$route.params.link,
        };
      },
    },
  },
  data() {
    return {
      getAnimeByLink: {},
    };
  },

  watch: {
    getAnimeByLink() {
      if (!this.getAnimeByLink) this.$router.push("/animelist");
    },
  },
};
</script>
