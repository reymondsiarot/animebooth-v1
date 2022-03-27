<template>
  <v-card flat color="#1f2937" class="top-anime tw-py-[2px]">

    <v-card-title class="tw-py-1">
      <div class="text-base pb-[2px]"> Top Anime </div>
    </v-card-title>

    <div v-for="(anime,i) in topAnimeList" :key="i" class="item scrollbar">
      <div class="inner-item tw-overflow-hidden">
        <div class="image-container">
          <img src="" class="tw-w-full tw-h-full" alt="">
        </div>
        <div class="tw-col-span-5 tw-pr-2">
          <div>
            <div class="tw-text-sm">{{ anime.title }}</div>
            <div class="tw-text-gray-400 tw-text-xs">{{ anime.duration }}</div>
            <div class="tw-text-gray-400 tw-text-xs">Score: <span class="tw-text-yellow-500">{{ anime.score }}</span></div>
          </div>
        </div>
        <div class="tw-col-span-2 tw-flex tw-items-center tw-justify-center">
          <div class="tw-bg-gray-800 tw-px-4 tw-py-1 tw-border tw-border-gray-900"> {{ i + 1}} </div>
        </div>
      </div>
    </div>

  </v-card>
</template>

<script>
export default {
  data() {
    return {
      topAnime: [],
    };
  },
  mounted() {},
  computed: {
    topAnimeList() {
      return this.topAnime;
    },
  },
};
</script>

<style scoped>
</style>
