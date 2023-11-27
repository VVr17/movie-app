<template>
  <AppHeader />
  <router-view />
</template>

<script>
import AppHeader from "./components/Header.vue";

export default {
  name: "App",
  components: { AppHeader },
};
</script>

<style lang="scss">
#app,
#modalsTeleport {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
