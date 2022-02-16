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

      <v-menu :max-width="366" :open-delay="500" offset-y transition="scale-transition">
        <template v-slot:activator="{ on, attrs }">
          <div class="tw-flex tw-justify-end tw-items-center tw-space-x-3">
            <v-progress-circular indeterminate color="#BD203E"></v-progress-circular>
            <v-text-field v-model="searchAnime" hide-details="true" placeholder="Search Anime..." filled rounded dense v-bind="attrs" v-on="on"></v-text-field>
            <v-btn class="tw-h-full" rounded color="#BD203E">Suggest</v-btn>
          </div>
        </template>
        <div class="tw-my-2 tw-bg-[#121212] tw-w-full tw-h-full top-anime tw-shadow-lg tw-border-2 tw-border-[#BD203E] tw-px-2 tw-py-2">
          <div class="tw-flex tw-justify-between">
            <span>Search Results: 123</span>
            <span>
              <router-link class="tw-text-sm tw-font-bold" :to="`/animelist?q=`">More Results</router-link>
            </span>
          </div>
          <div class="item scrollbar">
            <div class="inner-item tw-relative">
              <div class="image-container">
                <img :src="`/api/image?src=storage/assets/animebox/`" class="tw-w-full tw-h-full" alt="">
              </div>
              <div class="tw-col-span-5 tw-pr-2">
                <div>
                  <div class="tw-text-sm">TEST</div>
                  <div class="tw-text-xs tw-text-gray-400 mb-2">TEST</div>
                  <div class="tw-text-gray-400 tw-text-xs">TEST</div>

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
export default {
  data: () => ({
    searchAnime: "",
  }),
  watch: {
    searchAnime() {
      if (this.searchAnime == "") {
        return (this.filteredAnime = null);
      }
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(async () => {
        let payload = {
          page: 1,
          q: this.searchAnime,
          genre: "",
        };
        console.log("SEARCHING ANIME");
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
