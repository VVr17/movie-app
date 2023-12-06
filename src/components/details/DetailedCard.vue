<template>
  <div class="tab:flex tab:gap-14 tab:mb-17 desk:mb-30">
    <!-- {/* Mobile Title Render */} -->
    <CardTitle
      :title="movie.original_title || movie.original_name"
      :status="movie.status"
      styles="tab:hidden"
    />
    <CardImage
      :imgSrc="imgSrc"
      :title="movie.original_title || movie.original_name"
    />

    <div class="w-full">
      <!-- Tablet-Desktop Title render -->
      <CardTitle
        :title="movie.original_title || movie.original_name"
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
    :genres="movie.genres.map(({ name }) => name).join(', ')"
  />
  <InfoTitle title="Characteristics" />
  <MovieCharacteristics :movie="movie" :category="category" />
</template>

<script>
import { IMAGE_BASE_URL } from "@/constants";
import CardTitle from "./components/CardTitle.vue";
import CardImage from "./components/CardImage.vue";
import MovieTagline from "./components/MovieTagline.vue";
import ShortDescription from "./components/ShortDescription.vue";
import InfoTitle from "./components/InfoTitle.vue";
import MovieOverview from "./components/MovieOverview.vue";
import MovieCharacteristics from "./components/MovieCharacteristics.vue";

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

    return { imgSrc };
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
