<template>
  <div class="section">
    <div class="container">
      <ul class="grid grid-cols-2 gap-4 tab:gap-5 desk:gap-6">
        <li
          class="relative after:content-[' '] after:absolute after:top-0 after:block after:w-[1px] after:h-full after:-right-2 after:tab:-right-2.5 after:desk:-right-3 after:bg-dark-gray"
        >
          <GenresTitle title="Movies" :category="movies" />
          <GenresList
            v-if="movieGenres.length"
            :genres="movieGenres"
            :category="movies"
          />
        </li>
        <li>
          <GenresTitle title="TV" :category="tv" />
          <GenresList
            v-if="tvGenres.length"
            :genres="tvGenres"
            :category="tv"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import { CATEGORIES } from "@/constants";

import GenresList from "./GenresList.vue";
import GenresTitle from "./GenresTitle.vue";

export default {
  name: "GenresSection",
  setup() {
    const { movies, tv } = CATEGORIES;
    const { movieGenres, tvGenres } = inject("genres");

    return { movieGenres, tvGenres, movies, tv };
  },
  components: { GenresTitle, GenresList },
};
</script>
