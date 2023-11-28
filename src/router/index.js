import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/:category",
    name: "Movies",
    component: () => import("@/views/MoviesView.vue"),
  },
  {
    path: "/:category/:id",
    name: "MovieDetails",
    component: () => import("@/views/MovieDetails.vue"),
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
