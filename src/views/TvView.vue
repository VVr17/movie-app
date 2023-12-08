<template>
  <Suspense>
    <CatalogSection :category="tv" />
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
    const { tv } = CATEGORIES;
    return { tv };
  },
  components: { CatalogSection, LoadingSpinner, Suspense },
};
</script>
