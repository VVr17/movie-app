<template>
  <AppHero />

  <Suspense>
    <GenresSection />
    <template #fallback><LoadingSpinner /> </template>
  </Suspense>
</template>

<script>
import { Suspense } from "vue";
import AppHero from "@/components/home/AppHero.vue";
import GenresSection from "@/components/home/genres/GenresSection.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";

export default {
  components: { GenresSection, AppHero, Suspense, LoadingSpinner },
};
</script>
