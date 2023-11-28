<template>
  <div class="section">
    <div class="container">
      <h1 class="title-primary">Movie details</h1>
      <div v-if="data">
        <p>{{ data.id }}</p>
        <p>{{ data.original_title || data.original_name }}</p>
        <ul class="flex gap-3">
          <li v-for="genre in data.genres" :key="genre.id">
            {{ genre.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import { CATEGORIES } from "@/constants/categories";
import { MOVIE_URL, TV_URL } from "@/constants/urls";
import useApiData from "@/composables/api/useApiData";

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
};
</script>

<style lang="scss" scoped></style>
