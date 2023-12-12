<template>
  <Suspense>
    <SeasonsSection />
    <template #fallback><LoadingSpinner /></template>
  </Suspense>
</template>

<script>
import { LoadingSpinner } from "@/components/common";
import { SeasonsSection } from "@/components/details";

export default {
  name: "TvSeasons",
  components: { SeasonsSection, LoadingSpinner },
};
</script>

<style lang="scss" scoped></style>
