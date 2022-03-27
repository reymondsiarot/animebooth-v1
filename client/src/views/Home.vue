<template>
  <div class="tw-py-4 tw-grid tw-grid-cols-7 tw-gap-2 tw-pt-9">
    <div class="tw-col-span-5">
      <v-carousel cycle height="400" hide-delimiters show-arrows-on-hover>
        <v-carousel-item>
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">
                Slide
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">
                Slide 1
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">
                Slide 2
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="tw-col-span-2">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    changeCookie() {
      this.$cookies.set("me", Math.random());
    },
  },
};
</script>
