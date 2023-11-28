<template>
  <div class="section">
    <div class="container">
      <BackButton />
      <h1 class="mb-6 capitalize title-primary">{{ category }}</h1>
      <FilterBar />
      <ItemList v-if="data?.results?.length" :items="data.results" />
      <h2 v-else class="text-xl title-secondary">
        There is no movies / TV shows found on your request
      </h2>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import { CATEGORIES } from "@/constants/categories";
import {
  GET_MOVIE_DISCOVER_URL,
  GET_TV_DISCOVER_URL,
  TRENDING_MOVIE_URL,
  TRENDING_TV_URL,
} from "@/constants/urls";
import useApiData from "@/composables/api/useApiData";
import BackButton from "@/components/common/BackButton.vue";
import ItemList from "@/components/catalog/list/ItemList.vue";
import FilterBar from "@/components/catalog/filterBar/FilterBar.vue";

export default {
  setup() {
    const { params, query } = useRoute();
    const category = params.category;
    const genre = query.genre;

    const url =
      genre && category === CATEGORIES.movies
        ? GET_MOVIE_DISCOVER_URL
        : genre && category === CATEGORIES.tv
        ? GET_TV_DISCOVER_URL
        : category === CATEGORIES.movies
        ? TRENDING_MOVIE_URL
        : category === CATEGORIES.tv
        ? TRENDING_TV_URL
        : TRENDING_MOVIE_URL;
    const searchParams = {
      page: "1",
      sort_by: "popularity.desc",
    };
    if (genre) searchParams.with_genres = genre;
    const { data, error, getData } = useApiData(url, searchParams);
    getData();
    return { data, error, category };
  },
  components: { BackButton, ItemList, FilterBar },
};
</script>

<style lang="scss" scoped></style>
