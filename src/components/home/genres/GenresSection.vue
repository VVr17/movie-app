<template>
  <div class="section">
    <div class="container">
      <ul class="flex flex-col gap-6">
        <li>
          <GenresTitle title="Movies" :category="movies" />
          <GenresList
            v-if="movieGenres?.genres?.length"
            :genres="movieGenres?.genres"
            :category="movies"
          />
        </li>
        <li>
          <GenresTitle title="TV" :category="tv" />
          <GenresList
            v-if="tvGenres?.genres?.length"
            :genres="tvGenres?.genres"
            :category="tv"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { GENRES_MOVIE_URL, GENRES_TV_URL } from "@/constants/urls";
import { CATEGORIES } from "@/constants/categories";
import useApiData from "@/composables/api/useApiData";

import GenresList from "./GenresList.vue";
import GenresTitle from "./GenresTitle.vue";

export default {
  name: "GenresSection",
  setup() {
    const { movies, tv } = CATEGORIES;
    const {
      data: movieGenres,
      error: movieError,
      getData: getMovieGenres,
    } = useApiData(GENRES_MOVIE_URL);
    const {
      data: tvGenres,
      error: tvError,
      getData: getTvGenres,
    } = useApiData(GENRES_TV_URL);

    getMovieGenres();
    getTvGenres();

    return { movieGenres, tvGenres, tvError, movieError, movies, tv };
  },
  components: { GenresTitle, GenresList },
};
</script>
