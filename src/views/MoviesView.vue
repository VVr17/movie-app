<template>
  <div class="section">
    <div class="container">
      <h1 class="title-primary">Movies</h1>
      <ul v-if="data?.results?.length">
        <li v-for="movie in data.results" :key="movie.id">
          <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
            {{ movie.original_title || movie.original_name }}
          </router-link>
        </li>
      </ul>
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

    return { data, error };
  },
};
</script>

<style lang="scss" scoped></style>
