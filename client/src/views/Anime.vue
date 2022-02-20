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

            <AnimeBox v-for="anime in animeList.data" :key="anime.id" :anime="anime"></AnimeBox>

          </div>
          <div class="text-center">
            <v-pagination v-if="pageLength > 1" v-model="page" :length="pageLength" :total-visible="4" circle></v-pagination>
          </div>
        </div>
      </div>
      <div class="md:tw-col-span-2 tw-w-full">

      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
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
      page: 1,
      itemPerPage: 20,
      search: "",
      genre: "",
    };
  },
  async mounted() {
    await this.initAnimeList();
    console.log(this.animeList)
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
    ...mapState("anime", ["animeList"]),
    pageLength() {
      if (this.animeList) {
        const count = this.animeList.count || 1;
        return Math.ceil(count / this.itemPerPage);
      }
      return 1;
    },
  },
  methods: {
    ...mapMutations("anime", ["setAnimeList"]),
    ...mapActions("anime", ["getAnimeList"]),
    async initAnimeList() {
      this.page = Number(this.$route.query.page) || 1;
      this.search = this.$route.query.q || "";
      this.genre = this.$route.query.genre || "";
      const limit = this.itemPerPage;
      await this.getAnimeList({
        genre: this.genre,
        search: this.search,
        first: limit,
        page: this.page,
      });
    },
  },
};
</script>

<style>
</style>