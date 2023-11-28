<template>
  <div class="tab:flex tab:gap-14 tab:mb-17 desk:mb-30">
    <!-- {/* Mobile Title Render */} -->
    <CardTitle :title="movie.original_title || movie.original_name" />

    <div className="tab:w-[314px] desk:w-[518px]">
      <!-- Tablet-Desktop Title render -->
      <!-- <CardTitle :title="movie.original_title || movie.original_name" /> -->
    </div>
  </div>
</template>

<script>
import CardTitle from "./CardTitle.vue";

export default {
  name: "DetailedCard",
  props: {
    movie: { type: Object },
  },
  components: { CardTitle },
};
</script>

<style lang="scss" scoped></style>
