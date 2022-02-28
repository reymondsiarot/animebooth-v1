<template>
  <div class="mt-4">
    <div class="tw-flex tw-bg-[#1F2937] tw-rounded-t-md">
      <v-bottom-navigation :value="pageVal" active-class="blue-grey darken-2" flat width="auto" elevation="0" style="background:transparent" class="elevation-0 tw-rounded-t-md">
        <v-btn link to="/manage/dashboard" class="hover:tw-rounded-tl-md">
          <span>DashBoard</span>
        </v-btn>
        <v-btn link to="/manage/myanime">
          <span>My Anime</span>
        </v-btn>
      </v-bottom-navigation>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    pageVal: 0,
  }),
  mounted() {
    if (this.$route.name == "manage") {
      this.$router.push({
        name: "manage-dashboard",
      });
    }
  },
};
</script>

<style>
</style>