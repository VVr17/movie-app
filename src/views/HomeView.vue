<template>
  <AppHero />
  <GenresSection />
</template>

<script>
import AppHero from "@/components/home/AppHero.vue";
import GenresSection from "@/components/home/genres/GenresSection.vue";

export default {
  components: { GenresSection, AppHero },
};
</script>

<style lang="scss" scoped></style>
