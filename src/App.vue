<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";

export default {
  name: "App",
  components: { AppHeader, AppFooter },
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
