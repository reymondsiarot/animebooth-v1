<template>
  <div class="home">

    <div>CounteR: {{ $store.state.counter }}</div>
    <div>Count: {{ count }}</div>
    <div>Cookie: {{ $cookies.get("me") }}</div>
    <div>
      <button @click="$store.commit('inc')">inc</button>
      <button @click="changeCookie()">COOKIE CAHNGE</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    changeCookie() {
      this.$cookies.set("me", Math.random());
    },
  },
};
</script>
