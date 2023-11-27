<template>
  <div class="section">
    <div class="container">
      <h1 class="title-primary">Movie details</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String },
  },
  setup(props) {
    console.log("movieId", props.id);
  },
};
</script>

<style lang="scss" scoped></style>
