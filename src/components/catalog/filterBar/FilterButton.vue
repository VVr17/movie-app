<template>
  <button
    @click="openFilter"
    class="flex items-center justify-center gap-4 text-base transition duration-300 hover:text-accent-green focus:text-accent-green"
  >
    <p>Filter</p>
    <i class="pi pi-filter" style="font-size: 1rem; color: currentColor" />
  </button>
</template>

<script>
export default {
  name: "FilterButton",
  setup(props, context) {
    const openFilter = () => context.emit("openFilter");
    return { openFilter };
  },
};
</script>
