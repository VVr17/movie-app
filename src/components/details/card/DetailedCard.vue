<template>
  <div class="tab:flex tab:gap-14 tab:mb-17 desk:mb-30">
    <!-- {/* Mobile Title Render */} -->
    <CardTitle :title="movie.original_title || movie.original_name" />
    <img
      v-if="imgSrc"
      :src="imgSrc"
      :alt="movie.original_title || movie.original_name"
    />
    <img
      v-else
      :src="fallback"
      :alt="movie.original_title || movie.original_name"
    />

    <div className="tab:w-[314px] desk:w-[518px]">
      <!-- Tablet-Desktop Title render -->
      <!-- <CardTitle :title="movie.original_title || movie.original_name" /> -->
    </div>
  </div>
</template>

<script>
import CardTitle from "./CardTitle.vue";
import { IMAGE_BASE_URL } from "@/constants/urls";
import fallback from "@/assets/images/movie-card-plug.jpg";

export default {
  name: "DetailedCard",
  props: {
    movie: { type: Object },
  },
  setup(props) {
    const imgSrc = props.movie?.poster_path
      ? `${IMAGE_BASE_URL}${props.movie.poster_path}`
      : null;

    return { imgSrc, fallback };
  },
  components: { CardTitle },
};
</script>

<style lang="scss" scoped></style>
