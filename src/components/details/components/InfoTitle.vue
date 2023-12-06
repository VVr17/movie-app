<template>
  <p class="text-xl text-accent-green tab:block tab:mb-6">{{ title }}</p>
</template>

<script>
export default {
  name: "InfoTitle",
  props: {
    title: { type: String },
  },
};
</script>
