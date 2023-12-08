<template>
  <button
    @click="openFilter"
    :disabled="isDisabled"
    class="flex items-center justify-center gap-4 text-base transition duration-300 hover:text-accent-green focus:text-accent-green disabled:text-gray"
  >
    <p>Filter</p>
    <i class="pi pi-filter" style="font-size: 1rem; color: currentColor" />
  </button>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "FilterButton",
  setup(props, context) {
    const route = useRoute();
    const openFilter = () => context.emit("openFilter");
    const isDisabled = computed(() => route.query.search); // Disable sort if there is a search query

    return { openFilter, isDisabled };
  },
};
</script>
