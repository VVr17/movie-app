<template>
  <Suspense>
    <DetailsSection :category="movies" :url="MOVIE_URL" />
    <template #fallback><LoadingSpinner /></template>
  </Suspense>
</template>

<script>
import { Suspense } from "vue";

import { MOVIE_URL, CATEGORIES } from "@/constants";
import { LoadingSpinner } from "@/components/common";
import DetailsSection from "@/components/details";

export default {
  name: "MovieDetails",
  setup() {
    const { movies } = CATEGORIES;
    return { movies, MOVIE_URL };
  },
  components: { DetailsSection, LoadingSpinner, Suspense },
};
</script>
