<template>
  <div class="pb-1">
    <div class="px-1 pb-0">
      <div class="tw-flex tw-items-center px-0">
        <router-link to="/" class="tw-font-semibold tw-text-sm tw-px-0 tw-mx-0">Home</router-link>
        <div v-if="!!$route.query.genre" class="tw-flex tw-w-auto tw-ustify-start tw-items-center">
          <v-icon small color="#9CA3AF">keyboard_arrow_right </v-icon>
          <div @click="removeSearch" class="tw-text-sm ">{{ $route.query.genre }}</div>
        </div>
        <div v-if="!!$route.query.q" class="tw-flex tw-items-center">
          <v-icon small color="#9CA3AF">keyboard_arrow_left </v-icon>
          <div class="tw-flex tw-flex-grow tw-justify-between tw-items-center tw-rounded-full tw-px-2 tw-space-x-3  tw-bg-gray-800">
            <div class="tw-text-sm tw-flex-1 tw-flex">{{ $route.query.q }}</div>
            <v-icon link class="tw-h-3 tw-w-3 tw-cursor-pointer tw-rounded-full" @click="removeSearch" small color="#C2314D">mdi_close</v-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeSearch() {
      this.$router.push({
        path: "/animelist",
        query: { genre: this.$route.query.genre },
      });
    },
  },
};
</script>

<style scoped>
.v-application a {
  @apply tw-text-gray-400;
}
.flex,
.child-flex > * {
  flex: none;
}
</style>
