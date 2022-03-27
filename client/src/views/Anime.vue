<template>
  <div class="py-2">
    <NavBreadCrumbs />
    <div class="tw-grid  md:tw-grid-cols-7 tw-gap-2">
      <div class="md:tw-col-span-5 tw-w-full">
        <v-card flat color="#1f2937" class="tw-mb-2">
          <v-card-title class="tw-bg-[#1F2937] tw-py-0 tw-px-0 tw-justify-between py-0">
            <FilterBar v-if="true"></FilterBar>

          </v-card-title>
        </v-card>
        <div>
          <div class="tw-grid tw-grid-cols-2  sm:tw-grid-cols-3 md:tw-grid-cols-4 xl:tw-grid-cols-5  tw-gap-2">
            <AnimeBox v-for="anime in mainAnimeList" :key="anime.id" :anime="anime"></AnimeBox>

          </div>
          <div class="text-center">
            <v-pagination v-if="pageLength > 1" v-model="page" :length="pageLength" :total-visible="4" circle></v-pagination>
          </div>
        </div>
      </div>
      <div class="md:tw-col-span-2 tw-w-full">
        <TopAnime />
      </div>
    </div>

  </div>
</template>

<script>
import AnimeBox from "../components/AnimeBox.vue";
import NavBreadCrumbs from "../components/NavBreadCrumbs.vue";
import FilterBar from "../components/FilterBar.vue";
import TopAnime from "../components/TopAnime.vue";
import { mapActions } from "vuex";
export default {
  components: {
    NavBreadCrumbs,
    FilterBar,
    AnimeBox,
    TopAnime,
  },
  data() {
    return {
      page: 1,
      itemPerPage: 20,
      search: "",
      genre: "",
      animeList: null,
    };
  },
  async mounted() {
    await this.getGenres();
    const response = await this.initAnimeList();
    console.log(response);
  },
  watch: {
    "$route.query.q": async function (val) {
      await this.initAnimeList();
    },
    "$route.query.genre": async function (val) {
      await this.initAnimeList();
    },
    async page() {
      this.$router.push({ query: { page: this.page } });
      await this.initAnimeList();
    },
  },
  computed: {
    mainAnimeList() {
      return this.animeList ? this.animeList.data : [];
    },
    pageLength() {
      return this.animeList && this.animeList.last_page;
    },
  },
  methods: {
    ...mapActions("anime", ["getAnimeList", "getGenres"]),
    async initAnimeList() {
      this.page = Number(this.$route.query.page) || 1;
      this.search = this.$route.query.q || "";
      this.genre = this.$route.query.genre || "";
      const limit = this.itemPerPage;
      const response = await this.getAnimeList({
        page: this.page,
        pageSize: limit,
        q: this.search,
        genre: this.genre,
      });
      console.log(response);
      if (response.success) this.animeList = response.data && response.data;
    },
  },
};
</script>

<style>
</style>