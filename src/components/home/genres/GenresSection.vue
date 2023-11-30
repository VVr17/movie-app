<template>
  <div class="section">
    <div class="container">
      <ul class="flex flex-col gap-6 tab:gap-8 desk:gap-10">
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
import { CATEGORIES } from "@/constants";
import useApiData from "@/composables/api/useApiData";

import GenresList from "./GenresList.vue";
import GenresTitle from "./GenresTitle.vue";

export default {
  name: "GenresSection",
  async setup() {
    const { movies, tv } = CATEGORIES;
    const {
      data: movieGenres,
      error: movieError,
      getData: getMovieGenres,
    } = useApiData();
    const {
      data: tvGenres,
      error: tvError,
      getData: getTvGenres,
    } = useApiData();

    await getMovieGenres(GENRES_MOVIE_URL);
    await getTvGenres(GENRES_TV_URL);

    return { movieGenres, tvGenres, tvError, movieError, movies, tv };
  },
  components: { GenresTitle, GenresList },
};
</script>
