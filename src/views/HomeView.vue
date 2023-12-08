<template>
  <AppHero />

  <Suspense>
    <GenresSection />
    <template #fallback><LoadingSpinner /> </template>
  </Suspense>
</template>

<script>
import { Suspense } from "vue";
import { AppHero, GenresSection } from "@/components/home";
import { LoadingSpinner } from "@/components/common";

export default {
  components: { GenresSection, AppHero, Suspense, LoadingSpinner },
};
</script>
