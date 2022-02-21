<template>
  <div>
    <v-card flat color="#1f2937">
      <v-card-title dark class="tw-bg-[#1F2937] py-1">
        <div class="tw-text-base">Genre: </div>
        <div class="tw-ml-2">
          <v-menu offset-y :close-on-content-click="true" transition="scale-transition" :nudge-width="200">
            <template v-slot:activator="{ on, attrs }">
              <v-btn height="32" min-width="100" small color="white" class="catselected tw-text-base" outlined dark v-bind="attrs" v-on="on">
                <div class="tw-flex tw-items-center tw-justify-between tw-w-full tw-text-xs">
                  <span>{{ getSelectedGenre }}</span>
                  <v-icon>keyboard-arrow-down</v-icon>
                </div>
              </v-btn>
            </template>
            <div class="tw-grid tw-grid-cols-4 tw-bg-[#1F2937] tw-p-4 tw-gap-0 tw-border tw-border-gray-900">
              <v-btn @click="setCategory('ALL')" class="tw-border tw-border-gray-900 catlink" outlined color="white">
                <span class=" tw-text-xs tw-font-normal">ALL</span>
              </v-btn>
              <v-btn @click="setCategory(cat.name)" :class="`tw-border tw-border-gray-900 catlink ${$route.query.genre == cat.name ? 'tw-bg-gray-500' :''}`" outlined color="white" tile v-for="(cat,index) in genres" :key="index">
                <span :class=" `tw-text-xs tw-font-normal `">{{cat.name  }}</span>
              </v-btn>
            </div>
          </v-menu>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    selectedGenre: "All",
  }),
  computed: {
    ...mapState("anime", ["genres"]),
    getSelectedGenre() {
      const genre = this.genres.find(
        (genre) => genre.name == this.$route.query.genre
      );
      return (genre && genre.name) || "All";
    },
  },
  methods: {
    setCategory(cat) {
      this.selectedGenre = cat;
      if (this.selectedGenre.toLowerCase() == "all") {
        this.$router.push({
          path: "/animelist",
          query: {
            q: this.$route.query.q,
          },
        });
        return;
      }
      this.$router.push({
        path: "/animelist",
        query: {
          q: this.$route.query.q,
          genre: this.selectedGenre,
        },
      });
    },
  },
};
</script>

<style scoped>
.v-btn--outlined {
  @apply tw-border tw-border-gray-900;
}
</style>
