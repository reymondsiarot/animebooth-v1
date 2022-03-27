<template>
  <app-layout>
    <router-view></router-view>
  </app-layout>
</template>

<script>
import { mapActions } from "vuex";
import AppLayout from "./layout/AppLayout.vue";
export default {
  components: {
    AppLayout,
  },
  async mounted() {
    await this.init();
  },
  methods: {
    ...mapActions("user", ["init"]),
  },
};
</script>
