import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/movies",
    name: "Movies",
    component: () => import("@/views/MoviesView.vue"),
  },
  {
    path: "/movies/:id",
    name: "MovieDetails",
    component: () => import("@/views/MovieDetails.vue"),
  },
  {
    path: "/tv",
    name: "Tv",
    component: () => import("@/views/TvView.vue"),
  },
  {
    path: "/tv/:id",
    name: "TvDetails",
    component: () => import("@/views/TvDetails.vue"),
  },

  // Not found 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
