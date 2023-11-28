<template>
  <h1 class="mb-2 text-2xl title-primary first-letter:capitalize">
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: "CardTitle",
  props: { title: { type: String }, class: { type: String } },
};
</script>

<style lang="scss" scoped></style>
