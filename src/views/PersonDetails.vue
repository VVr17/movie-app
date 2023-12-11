<template>
  <Suspense>
    <DetailsSection :category="people" :url="PERSON_URL" />
    <template #fallback><LoadingSpinner /></template>
  </Suspense>
</template>

<script>
import { Suspense } from "vue";
import { CATEGORIES, PERSON_URL } from "@/constants";
import { LoadingSpinner } from "@/components/common";
import DetailsSection from "@/components/details/DetailsSection.vue";

export default {
  name: "PersonDetails",
  components: { LoadingSpinner, Suspense, DetailsSection },
  setup() {
    const { people } = CATEGORIES;
    return { PERSON_URL, people };
  },
};
</script>
