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
  setup() {
    console.log("VUE_APP_API_BASE_URL", process.env.VUE_APP_API_BASE_URL);
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
