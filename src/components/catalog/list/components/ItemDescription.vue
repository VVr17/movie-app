<template>
  <p>
    <span class="text-xs text-yellow-light tab:text-sm"> {{ title }} </span>
    <span class="text-white text-xxs tab:text-xs">
      {{ content }}
    </span>
  </p>
</template>

<script>
export default {
  name: "ItemGenres",
  props: {
    title: { type: String },
    content: { type: String },
  },
};
</script>
