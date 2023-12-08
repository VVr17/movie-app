<template>
  <div class="tab:flex tab:gap-14 tab:mb-17 desk:mb-30">
    <!-- Mobile Title Render -->
    <CardTitle :title="title" :status="movie.status" styles="tab:hidden" />
    <CardImage :imgSrc="imgSrc" :title="title" />

    <div class="w-full">
      <!-- Tablet-Desktop Title render -->
      <CardTitle
        :title="title"
        :status="movie.status"
        styles="hidden tab:block"
      />

      <MovieTagline :tagline="movie.tagline" />
      <ShortDescription :category="category" :movie="movie" />
    </div>
  </div>

  <!--  Tablet / Desktop Full info render -->
  <InfoTitle title="Overview" />
  <MovieOverview
    :category="category"
    :overview="movie.overview"
    :genres="genres"
  />
  <InfoTitle title="Characteristics" />
  <MovieCharacteristics :movie="movie" :category="category" />
</template>

<script>
import { computed } from "vue";
import { IMAGE_BASE_URL } from "@/constants";
import {
  CardTitle,
  CardImage,
  MovieTagline,
  ShortDescription,
  InfoTitle,
  MovieOverview,
  MovieCharacteristics,
} from "./components";

export default {
  name: "DetailedCard",
  props: {
    category: { type: String },
    movie: { type: Object },
  },
  setup(props) {
    const imgSrc = props.movie?.poster_path
      ? `${IMAGE_BASE_URL}${props.movie.poster_path}`
      : null;

    const title = props.movie.original_title || props.movie.original_name;

    const genres = computed(() => {
      return props.movie.genres.map(({ name }) => name).join(", ");
    });

    return { imgSrc, title, genres };
  },
  components: {
    CardTitle,
    CardImage,
    MovieTagline,
    ShortDescription,
    InfoTitle,
    MovieOverview,
    MovieCharacteristics,
  },
};
</script>
