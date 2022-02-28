<template>
  <div>
    <div class="tw-flex tw-justify-between">
      <div></div>
      <div class="mt-2">
        <v-dialog width="90%">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#BD203E" dark v-bind="attrs" v-on="on">
              Add Anime
            </v-btn>
          </template>
          <v-card>
            <div class="tw-shadow-lg">
              <div class="tw-p-4 tw-font-bold">ADD ANIME</div>
              <v-divider></v-divider>
              <div class="tw-flex ">
                <div class="my-3 mx-3">
                  <v-text-field v-model="searchTextFromJikan" hide-details="true" placeholder="Search Anime To Add..." filled rounded dense></v-text-field>
                </div>
              </div>
            </div>
            <div class="tw-h-[700px] tw-overflow-y-scroll ">
              <table class="tw-w-full tw-text-center ">
                <thead>
                  <tr class="tw-bg-gray-900">
                    <th class=" tw-py-2">MAL ID</th>
                    <th class=" tw-py-2">IMAGE</th>
                    <th class=" tw-py-2">TITLE</th>
                    <th class=" tw-py-2">TYPE</th>
                    <th class=" tw-py-2">EPISODES</th>
                    <th class=" tw-py-2">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:tw-bg-gray-700 tw-cursor-pointer" v-for="(anime,i) in searchAnimeList" :key="i">
                    <td class=" tw-py-2">{{ anime.mal_id }}</td>
                    <td class=" tw-py-2 tw-w-10 tw-h-20">
                      <img class="tw-w-full tw-h-full tw-rounded-lg" :src="anime.images.jpg.image_url" alt="">
                    </td>
                    <td class=" tw-py-2 tw-ml-3">{{ anime.title }}</td>
                    <td class=" tw-py-2">{{ anime.type }}</td>
                    <td class=" tw-py-2">{{ anime.episodes }}</td>
                    <td class=" tw-py-2">
                      <v-btn color="green">Add to Queue</v-btn>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    anime: [],
    searchTextFromJikan: "",
    searchAnimeList: [],
    limit: 10,
    timer: null,
  }),
  watch: {
    searchTextFromJikan() {
      if (this.searchTextFromJikan == "") {
        return (this.searchAnimeList = null);
      }
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(async () => {
        const result = await this.searchAnimeFromJikan();
        this.searchAnimeList = result.data;
        console.log("thsit", this.searchAnimeList);
      }, 500);
    },
  },
  methods: {
    async searchAnimeFromJikan() {
      try {
        const response = await this.$jikan.get("/anime", {
          params: {
            q: this.searchTextFromJikan,
            limit: this.limit,
          },
        });
        return response.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.v-dialog__content {
  align-items: start;
}
</style>