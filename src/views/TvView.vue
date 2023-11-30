<template>
  <Suspense>
    <CatalogSection :category="tv" />
    <template #fallback><LoadingSpinner /></template>
  </Suspense>
</template>

<script>
import { Suspense } from "vue";
import { CATEGORIES } from "@/constants";
import CatalogSection from "@/components/catalog/CatalogSection.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";

export default {
  setup() {
    const { tv } = CATEGORIES;
    return { tv };
  },
  components: { CatalogSection, LoadingSpinner, Suspense },
};
</script>
