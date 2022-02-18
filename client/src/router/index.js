import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("../views/Home.vue");
const AnimeList = () => import("../views/Anime.vue");
const WatchAnime = () => import("../views/watch/Watch.vue");
const Episode = () => import("../views/watch/Episode.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/animelist",
    name: "animelist",
    component: AnimeList,
  },
  {
    path: "/watch/:link",
    name: "watch",
    component: WatchAnime,
    children: [
      {
        path: ":episodeNumber",
        component: Episode,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
