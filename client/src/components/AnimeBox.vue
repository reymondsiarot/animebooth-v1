<template>
  <div class="anime-box">
    <v-menu :open-delay="500" offset-x :close-on-content-click="true" :open-on-hover="true" transition="scale-transition">
      <template v-slot:activator="{ on, attrs }">
        <a @click="watchNow(anime)">

          <div class="image-container  tw-overflow-hidden" v-bind="attrs" v-on="on">
            <div class="anime-type">
              <div v-if="anime.type == 'TV'" class="anime-type-item"><span>Ep: {{` ${anime.episodes}/10`}}</span></div>
              <div v-if="anime.type == 'Movie'" class="anime-type-item"><span>Movie</span></div>
              <div v-if="anime.type == 'OVA'" class="anime-type-item"><span>OVA</span></div>
            </div>

            <div class="play-anime">
              <div class="play-anime-container">
                <v-icon size="50">mdi-play-arrow</v-icon>
              </div>
            </div>

            <img :src="JSON.parse(anime.images).jpg.image_url" class="main-image " alt="">
          </div>

          <div class="title-container">
            <div class="anime-title">{{ anime.title.length > 50 ? anime.title.slice(0,50)+"..." : anime.title }}</div>
          </div>
        </a>
      </template>
      <div class="anime-popup-menu">
        <div class="tw-max-w-full">
          <div class="popup-title">{{ anime.title }}</div>
          <div class="tw-text-gray-300">
            <div class="tw-text-xs tw-mb-2 ">{{ anime.synopsis.length > 200 ? anime.synopsis.slice(0,200)+"..." : anime.synopsis }}</div>
            <div class="tw-text-sm">
              <span>Score: </span>
              <span class="tw-text-[#F59E0B]"> {{ anime.score }} </span>
            </div>
            <div class=" tw-mb-2 tw-text-sm">
              <span>Genres: </span>
              <button color="white" class="px-0 py-0 my-0 tw-opacity-100" @click="gotoGenre(genre)" v-for="(genre,i) in genres" :key="i">
                <span class="hover:tw-underline tw-text-white"> {{ genre }}</span>
                <span class="tw-text-gray-200 tw-mr-1" v-if="i < genres.length-1">, </span>
              </button>
            </div>
          </div>
          <div class="tw-w-full">
            <a @click="watchNow(anime)" class="watch-link">
              <v-icon size="30" class="tw-w-5 tw-h-5 tw-rounded-md tw--ml-2">play_arrow</v-icon>
              <span class="tw-font-semibold tw-text-white"> WATCH NOW</span>
            </a>
          </div>
        </div>
      </div>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: ["anime"],
  computed: {
    genres() {
      try {
        if (this.anime) {
          let anime = JSON.parse(this.anime.genres);
          return anime.map((genre) => genre.name);
        }
      } catch (er) {}
    },
  },
  methods: {
    gotoGenre(genre) {
      this.$router.push({ path: `/animelist?genre=${genre}` }, () =>
        this.$router.app.refresh()
      );
    },
    watchNow(anime) {
      this.$router.push({
        path: `/watch/${anime.anime_link}`,
      });
    },
  },
};
</script>

<style scoped>
.image-container:hover > .play-anime {
  opacity: 1;
  background: rgba(0, 0, 0, 0.5);
}
.play-anime {
  @apply tw-transition-opacity tw-duration-500 tw-ease-in-out;
}
</style>
