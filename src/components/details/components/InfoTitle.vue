<template>
  <p class="text-xl text-accent-green tab:block tab:mb-6" :class="styles">
    {{ title }}
  </p>
</template>

<script>
export default {
  name: "InfoTitle",
  props: {
    title: { type: String },
    styles: { type: String },
  },
};
</script>
