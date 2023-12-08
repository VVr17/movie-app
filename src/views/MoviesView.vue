<template>
  <Suspense>
    <CatalogSection :category="movies" />
    <template #fallback><LoadingSpinner /></template>
  </Suspense>
</template>

<script>
import { Suspense } from "vue";
import { CATEGORIES } from "@/constants";
import CatalogSection from "@/components/catalog";
import { LoadingSpinner } from "@/components/common";

export default {
  setup() {
    const { movies } = CATEGORIES;
    return { movies };
  },
  components: { CatalogSection, LoadingSpinner, Suspense },
};
</script>
