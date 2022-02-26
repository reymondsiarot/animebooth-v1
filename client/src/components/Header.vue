<template>
  <div class="header">
    <div class="header-flex">
      <div class="tw-flex tw-items-center">
        <div class="tw-text-2xl tw-font-bold tw-pr-14"><span class="tw-text-[#BD203E]">ANIME</span> BOOTH</div>
        <v-bottom-navigation height="65" flat width="auto" :elevation="0" style="background:transparent">
          <v-btn height="100%" link to="/">
            <span>Home</span>
            <v-icon>mdi-home </v-icon>
          </v-btn>
          <v-btn height="100%" link to="/animelist">
            <span>Browse Anime</span>
            <v-icon>mdi-television-play</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </div>

      <v-menu :max-width="366" :open-delay="500" offset-y transition="scale-transition" :value="searchText">
        <template v-slot:activator="{ on, attrs }">
          <div class="tw-flex tw-justify-end tw-items-center tw-space-x-3">
            <v-progress-circular v-if="$apollo.loading" indeterminate color="#BD203E"></v-progress-circular>
            <form @submit.prevent="submitSearch">
              <v-text-field v-model="searchText" hide-details="true" placeholder="Search Anime..." filled rounded dense v-bind="attrs" v-on="on"></v-text-field>
            </form>
            <AuthModal v-if="!$auth.user"></AuthModal>
            <div v-else class="">
              <v-menu bottom offset-y offset-x left rounded="" nudge-right="15">
                <template v-slot:activator=" { on, attrs }">
                  <v-avatar :color="$auth.user.avatarColor" size="36" v-bind="attrs" v-on="on">
                    <span class="white--text text-h5"> {{$auth.user.email[0]}}</span>
                  </v-avatar>

                </template>
                <div class="tw-bg-[#1E1E1E] tw-py-2 tw-mt-1 tw-rounded-tl-xl tw-rounded-b-xl">
                  <div @click="gotoPage('admin')" class="tw-profile-menu">
                    <v-icon small class="tw-mt-[2px]">mdi-shield-crown </v-icon><span> Admin Panel</span>
                  </div>

                  <div @click="gotoPage('manage')" class="tw-profile-menu">
                    <v-icon small class="tw-mt-[2px]">mdi-cog-play </v-icon><span> Manage </span>
                  </div>
                  <div class="tw-profile-menu">
                    <v-icon small class="tw-mt-[2px]">mdi-account </v-icon><span> Profile</span>
                  </div>
                  <div @click="$auth.logout()" class="tw-profile-menu">
                    <v-icon small class="tw-mt-[2px]">mdi-logout </v-icon><span> Logout</span>
                  </div>
                </div>
              </v-menu>

            </div>

          </div>
        </template>
        <div class="tw-my-2 tw-bg-[#121212] tw-w-full tw-h-full top-anime tw-shadow-lg tw-border-2 tw-border-[#BD203E] tw-px-2 tw-py-2" v-show="searchText">
          <div class="tw-flex tw-justify-between">
            <span>Search Results: {{resultCount}}</span>
            <span>
              <router-link class="tw-text-sm tw-font-bold" :to="`/animelist?q=${searchText}`">More Results</router-link>
            </span>
          </div>
          <div class="item scrollbar" v-for="(anime,i) in animeList" :key="i">
            <div class="inner-item tw-relative">
              <div class="image-container">
                <img :src="JSON.parse(anime.images).jpg.image_url" class="tw-w-full tw-h-full" alt="">
              </div>
              <div class="tw-col-span-5 tw-pr-2">
                <div>
                  <div class="tw-text-sm">{{ anime.title }}</div>
                  <div class="tw-text-xs tw-text-gray-400 mb-2">{{ anime.synopsis.slice(0,50)+"..." }}</div>
                  <div class="tw-text-gray-400 tw-text-xs">{{ anime.duration }}</div>

                </div>
              </div>
              <div class="tw-absolute tw-right-2 tw-bottom-2 tw-font-bold marquee ">
                <marquee direction="right" class="tw-w-[100px]" scrolldelay="200">Playing</marquee>
              </div>
            </div>

          </div>
        </div>
      </v-menu>

    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AuthModal from "./modal/AuthModal.vue";
export default {
  components: {
    AuthModal,
  },
  data: () => ({
    searchText: "",
    limit: 5,
  }),
  computed: {
    ...mapState("anime", ["animeListSearched"]),
    animeList() {
      return (
        this.animeListSearched && this.searchText && this.animeListSearched.rows
      );
    },
    resultCount() {
      return (
        this.animeListSearched &&
        this.animeListSearched.rows &&
        this.animeListSearched.rows.length
      );
    },
  },
  methods: {
    ...mapActions("anime", ["getAnimeListSearched"]),
    submitSearch() {
      this.$router.push(`/animelist?q=${this.searchText}`);
    },
    gotoPage(page) {
      this.$router.push(`/${page}`);
    },
  },
  watch: {
    searchText() {
      if (this.searchText == "") {
        return (this.filteredAnime = null);
      }
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(async () => {
        await this.getAnimeListSearched({
          search: this.searchText,
          limit: this.limit,
        });
      }, 500);
    },
  },
};
</script>

<style scoped>
.v-item-group.v-bottom-navigation {
  box-shadow: none;
  background: transparent;
  align-items: center;
}
.theme--dark.v-btn.v-btn--has-bg {
  background: transparent;
}
</style>
