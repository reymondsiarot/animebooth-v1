<template>
  <div class="tw-py-2">
    <NavBreadCrumbs />

    <div>
      <div class="tw-bg-[#1f2937] tw-rounded-t-md">
        <v-card-title class="py-0 tw-justify-between">
          <div class="tw-text-base">{{ episode ? episode.title : "" }}</div>
          <v-card-actions class="tw-float-right tw-space-x-2">
            <v-btn class="opacity-0" small v-if="!episode">
            </v-btn>
            <v-tooltip :open-delay="500" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" @click="prevEpisode()" small outlined>
                  <v-icon dense class="tw-rotate-180">mdi_fast_forward </v-icon>
                </v-btn>
              </template>
              <span>123</span>
            </v-tooltip>

            <v-tooltip :open-delay="500" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" @click="nextEpisode()" small outlined>
                  <v-icon>mdi_fast_forward </v-icon>
                </v-btn>
              </template>
              <span>{{ episode }}</span>
            </v-tooltip>

          </v-card-actions>
        </v-card-title>
      </div>
      <v-card flat color="black" id="playercontainer" height="600">
        <!-- <iframe src="https://streamtape.com/e/DMlpzgX7V7iAbZ/OP-1_L%40mBerT.mp4" width="100%" height="450" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe> -->
        <iframe id="playerframe" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>
      </v-card>

      <div color="#1f2937" class="tw-pb-4 tw-mb-2">
        <v-card-title class="tw-bg-[#1F2937] py-0 tw-px-1 tw-justify-between ">
          <v-card-actions class="tw-w-full">
            <div class="tw-flex tw-justify-end tw-w-full">
              <div class="tw-flex tw-space-x-1 tw-justify-end">
                <v-btn :class="`px-2 py-3 `">
                  <span> 123</span>
                </v-btn>
              </div>

            </div>
          </v-card-actions>

          <v-card-actions class="tw-w-full">
            <div class="tw-grid tw-grid-cols-20 tw-text-sm tw-gap-2 tw-w-full">

              <div :class="`tw-rounded-md`">
                <div class="tw-text-center  tw-w-full tw-py-2 tw-cursor-pointer ">
                  123
                </div>
              </div>

            </div>
          </v-card-actions>
        </v-card-title>

      </div>

      <div>
        <div class="tw-flex tw-items-center tw-space-x-4 ">
          <div class="tw-text-2xl tw-font-semibold tw-mb-2">{{ episode ? episode.anime.title : "" }}</div>
          <small class="tw-text-[#fff] bg-primary tw-px-2 tw-py-0 tw-rounded-md tw-text-xs"> {{ episode ? episode.anime.type  :'' }} </small>
        </div>
        <div class="tw-text-gray-400">
          <div class="tw-text-sm  tw-text-justify tw-mb-2">{{ episode ? episode.anime.synopsis : "" }}</div>

          <div class="tw-text-sm">
            <span>Score: </span>
            <span class="tw-text-[#F59E0B]"> {{ episode.anime.score }} </span>
          </div>
          <div class=" tw-mb-2 tw-text-sm">
            <span>Genres:</span>
            <router-link :to="`/animelist?genre=${genre}`" v-for="(genre,i) in genres" :key="i"> <span class="tw-text-gray-100 tw-font-bold  hover:tw-underline"> {{ genre }}</span><span class="tw-text-gray-200" v-if="i < genres.length-1">,</span> </router-link>
          </div>
        </div>

      </div>
    </div>

  </div>

</template>

<script>
import GQLepisode from "../../graphql/episode";
import NavBreadCrumbs from "../../components/NavBreadCrumbs.vue";
export default {
  apollo: {
    episode: {
      query: GQLepisode,
      variables() {
        return {
          episodeId: this.$route.params.episodeNumber,
        };
      },
    },
  },
  data: () => ({
    episode: {},
  }),
  components: {
    NavBreadCrumbs,
  },
  async mounted() {},
  computed: {
    genres() {
      if (this.episode.anime.genre_list) {
        let anime = this.episode.anime.genre_list;
        return anime.map((genre) => genre.name);
      }
    },
  },
  watch: {
    episode() {
      console.log("episdoe", this.episode);
    },
  },
};
</script>

<style scoped>
.v-btn--outlined {
  @apply tw-border tw-border-gray-900;
}
</style>
