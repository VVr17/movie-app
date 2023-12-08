<template>
  <p>
    <span class="text-xs text-yellow-light tab:text-sm"> Genres: </span>
    <span class="text-white text-xxs tab:text-xs">
      {{ genres }}
    </span>
  </p>
</template>

<script>
export default {
  name: "ItemGenres",
  props: {
    genres: { type: String },
  },
};
</script>
