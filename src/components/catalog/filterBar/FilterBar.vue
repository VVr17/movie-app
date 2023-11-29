<template>
  <div
    class="mb-6 border-t border-b tab:mb-10 desk:mb-12 bg-main-dark-gray border-t-card-dark-gray border-b-card-dark-gray"
  >
    <div class="filter-line">
      <div
        className="flex items-center justify-between px-4 py-2.5 mb-0.5 bg-main-dark-gray"
      >
        <FilterButton @openFilter="openFilter" />
        <FilterSort />
      </div>
    </div>
  </div>
</template>

<script>
import FilterButton from "./FilterButton.vue";
import FilterSort from "./FilterSort.vue";

export default {
  name: "FilterBar",
  components: { FilterButton, FilterSort },
  setup(props, context) {
    const openFilter = () => context.emit("openFilter");
    return { openFilter };
  },
};
</script>

<style lang="scss" scoped>
.filter-line {
  @apply block w-full h-full;
  background: conic-gradient(
    from -55deg at -18.23% 67.87%,
    rgba(72, 82, 78, 0) 0.7144417427480221deg,
    rgba(72, 82, 78, 0.7) 38.60765486955643deg,
    rgba(72, 82, 78, 0.7) 49.6035772562027deg,
    rgba(72, 82, 78, 0.15) 132.71072387695312deg,
    #48524e 158.2191002368927deg,
    rgba(72, 82, 78, 0.95) 267.6503849029541deg,
    rgba(72, 82, 78, 0.15) 320.625deg,
    rgba(72, 82, 78, 0) 345.8621406555176deg
  );
}
</style>
