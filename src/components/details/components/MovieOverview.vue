<template>
  <div class="pt-3 pb-10 tab:block tab:pt-0 tab:pb-0 tab:mb-12">
    <p class="mb-2 text-base text-white transition duration-300 font-play">
      Genres: {{ genres }}
    </p>
    <p class="text-sm font-normal text-white">
      {{ overview }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MovieOverview",
  props: {
    genres: { type: String },
    overview: { type: String },
  },
};
</script>
