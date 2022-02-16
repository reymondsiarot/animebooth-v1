<template>

  <v-app dark>

    <div class="cdrop-shadow tw-bg-black">
      <Header></Header>
    </div>
    <div class="tw-max-w-7xl tw-w-full tw-mx-auto tw-px-2 tw-mb-10 tw-relative">
      <slot></slot>
    </div>
    <v-footer :absolute="true" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>

</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>


<style scoped>
.cdrop-shadow {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
}
</style>
