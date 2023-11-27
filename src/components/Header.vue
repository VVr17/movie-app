<template>
  <header>
    <nav class="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Movies' }">Movies list</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
a {
  @apply text-lg text-gray-300;

  &.router-link-active {
    @apply text-lg text-red-600;
  }
}
</style>
