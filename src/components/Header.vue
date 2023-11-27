<template>
  <header class="sticky top-0 z-40 block bg-filter-dark-gray">
    <div class="container flex justify-between">
      <AppLogo />

      <nav class="flex items-center justify-center gap-2">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Movies' }">Movies</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import AppLogo from "@/components/common/Logo.vue";
export default {
  name: "AppHeader",
  components: { AppLogo },
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
