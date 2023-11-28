<template>
  <div class="section">
    <div class="container">
      <BackButton />
      <DetailedCard v-if="data" :movie="data" />
      <h2 v-if="error" class="text-xl title-secondary">
        There is no movie found
      </h2>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import { CATEGORIES } from "@/constants/categories";
import { MOVIE_URL, TV_URL } from "@/constants/urls";
import useApiData from "@/composables/api/useApiData";
import BackButton from "@/components/common/BackButton.vue";
import DetailedCard from "@/components/card/DetailedCard.vue";

export default {
  setup() {
    const { params } = useRoute();
    const category = params.category;
    const id = params.id;
    const url =
      category === CATEGORIES.movies
        ? MOVIE_URL
        : category === CATEGORIES.tv
        ? TV_URL
        : MOVIE_URL;
    const { data, error, getData } = useApiData(`${url}${id}`);
    getData();
    return { data, error };
  },
  components: { BackButton, DetailedCard },
};
</script>

<style lang="scss" scoped></style>
