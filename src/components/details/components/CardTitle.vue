<template>
  <h1
    class="mb-2 text-2xl title-primary first-letter:capitalize"
    :class="styles"
  >
    {{ title }}
  </h1>
  <p class="mb-10 text-gray text-xxs tab:text-sm tab:mb-15" :class="styles">
    {{ subTitle }}
  </p>
</template>

<script>
export default {
  name: "CardTitle",
  props: {
    title: { type: String },
    subTitle: { type: String },
    styles: { type: String },
  },
};
</script>
