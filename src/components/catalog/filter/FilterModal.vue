<template>
  <div class="px-4 py-3 tab:px-6 tab:py-4 desk:py-6">
    <FilterHeader @closeFilter="closeFilter" />
    <FilterForm :category="category" @closeFilter="closeFilter" />
  </div>
</template>

<script>
import FilterForm from "./FilterForm.vue";
import FilterHeader from "./FilterHeader.vue";

export default {
  name: "FilterModal",
  props: {
    category: { type: String },
  },
  setup(props, context) {
    const closeFilter = () => context.emit("closeFilter");
    return { closeFilter };
  },
  components: { FilterForm, FilterHeader },
};
</script>

<style lang="scss" scoped></style>
