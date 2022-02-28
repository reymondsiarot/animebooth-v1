import Vue from "vue";
import VueRouter from "vue-router";
import auth from "./middleware/auth";

Vue.use(VueRouter);

const Home = () => import("../views/Home.vue");
const AnimeList = () => import("../views/Anime.vue");
const WatchAnime = () => import("../views/watch/Watch.vue");
const Episode = () => import("../views/watch/Episode.vue");
const Admin = () => import("../views/admin/Admin.vue");
const Manage = () => import("../views/manage/Manage.vue");
const ManageDashboard = () => import("../views/manage/subpages/Dashboard.vue");
const ManageMyAnime = () => import("../views/manage/subpages/MyAnime.vue");
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
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  {
    path: "/manage",
    name: "manage",
    component: Manage,
    children: [
      {
        path: "dashboard",
        name: "manage-dashboard",
        component: ManageDashboard,
      },
      {
        path: "myanime",
        name: "manage-my-anime",
        component: ManageMyAnime,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(auth);

export default router;
