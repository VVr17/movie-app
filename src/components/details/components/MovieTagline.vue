<template>
  <div class="flex gap-2 mb-5 tab:mb-15 tab:gap-4">
    <p class="text-xl text-accent-yellow tab:font-medium">
      {{ tagline }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MovieTagline",
  props: {
    tagline: { type: String },
  },
};
</script>

<style lang="scss" scoped></style>
