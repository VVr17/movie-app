<template>
  <header class="sticky top-0 z-40 block bg-filter-dark-gray">
    <div class="container flex justify-between">
      <AppLogo />

      <nav class="flex items-center justify-center gap-3">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="{ name: item.name }"
          @click="topScroll"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import { CATEGORIES, navigation } from "@/constants";
import { topScroll } from "@/utils";
import { AppLogo } from "@/components/common";

export default {
  name: "AppHeader",
  components: { AppLogo },
  setup() {
    const { movies, tv } = CATEGORIES;
    return { movies, tv, navigation, topScroll };
  },
};
</script>

<style lang="scss" scoped>
a {
  @apply transition duration-300 py-4;

  &:hover,
  &:focus {
    @apply text-yellow-light bg-transparent;
  }
}
nav a.router-link-exact-active {
  @apply text-accent-green;
}
</style>
