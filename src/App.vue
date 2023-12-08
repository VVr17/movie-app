<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>

<script>
import { provide } from "vue";
import { useGenres } from "./composables/api";
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";

export default {
  name: "App",
  components: { AppHeader, AppFooter },
  setup() {
    const { tvGenres, movieGenres, fetchGenres } = useGenres();
    fetchGenres();

    // Provide Global genres state for App
    provide("genres", { movieGenres, tvGenres });
  },
};
</script>

<style lang="scss">
#app {
  @apply grow flex flex-col;
}

main {
  @apply grow;
}
</style>
