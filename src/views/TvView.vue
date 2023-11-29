<template>
  <Suspense>
    <CatalogSection :category="tv" :url="url" />
    <template #fallback><LoadingSpinner /></template>
  </Suspense>
</template>

<script>
import { Suspense } from "vue";
import { useRoute } from "vue-router";

import { CATEGORIES, TV_DISCOVER_URL, TRENDING_TV_URL } from "@/constants";

import CatalogSection from "@/components/catalog/CatalogSection.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";

export default {
  setup() {
    const { query } = useRoute();
    const { tv } = CATEGORIES;
    const genre = query.genre;
    const url = genre ? TV_DISCOVER_URL : TRENDING_TV_URL;

    return { tv, url };
  },
  components: { CatalogSection, LoadingSpinner, Suspense },
};
</script>
