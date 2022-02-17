<template>
  <div class="py-2">
    <NavBreadCrumbs />
    <div class="tw-grid  md:tw-grid-cols-7 tw-gap-2">
      <div class="md:tw-col-span-5 tw-w-full">
        <v-card flat color="#1f2937" class="tw-mb-2">
          <v-card-title class="tw-bg-[#1F2937] tw-py-0 tw-px-0 tw-justify-between py-0">
            <FilterBar></FilterBar>
          </v-card-title>
        </v-card>
        <div>
          <div class="tw-grid tw-grid-cols-2  sm:tw-grid-cols-3 md:tw-grid-cols-4 xl:tw-grid-cols-5  tw-gap-2">

            <AnimeBox v-for="anime in animeList" :key="anime.id" :anime="anime"></AnimeBox>

          </div>
          <div class="text-center">
            <!-- <v-pagination v-model="page" :length="animeCount" :total-visible="7" circle></v-pagination> -->
          </div>
        </div>
      </div>
      <div class="md:tw-col-span-2 tw-w-full">

      </div>
    </div>

  </div>
</template>

<script>
import { anime } from "../graphql/anime";
import AnimeBox from "../components/AnimeBox.vue";
import NavBreadCrumbs from "../components/NavBreadCrumbs.vue";
import FilterBar from "../components/FilterBar.vue";
export default {
  components: {
    NavBreadCrumbs,
    FilterBar,
    AnimeBox,
  },
  data() {
    return {
      // Initialize your apollo data
      animeList: [],
    };
  },
  mounted() {
    console.log("ANIME", this.anime);
  },
  watch: {
    animeList() {
      console.log("ANIME", this.anime);
    },
  },

  apollo: {
    animeList: anime,
  },
};
</script>

<style>
</style>