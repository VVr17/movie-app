<template>
  <Suspense>
    <DetailsSection :category="tv" :url="TV_URL" />
    <template #fallback><LoadingSpinner /></template>
  </Suspense>
  <Suspense>
    <CastSection :url="TV_URL" />
    <template #fallback><LoadingSpinner /></template>
  </Suspense>
</template>

<script>
import { Suspense } from "vue";

import { CATEGORIES, TV_URL } from "@/constants";
import { DetailsSection, CastSection } from "@/components/details";
import { LoadingSpinner } from "@/components/common";

export default {
  name: "TvDetails",
  setup() {
    const { tv } = CATEGORIES;
    return { tv, TV_URL };
  },
  components: {
    DetailsSection,
    CastSection,
    LoadingSpinner,
    Suspense,
  },
};
</script>
