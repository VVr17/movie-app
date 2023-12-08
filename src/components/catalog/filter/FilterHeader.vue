<template>
  <div
    class="flex pb-3 tab:pb-4 desk:pb-6 items-center justify-between w-full max-w-[375px] tab:max-w-[418px] desk:max-w-[548px] bg-main-dark-gray border-b-card-dark-gray border-b border-l border-l-filter-dark-gray"
  >
    <h2 class="text-2xl title-secondary tab:text-3.5xl">Filter</h2>
    <button
      @click="closeFilter"
      class="flex items-center justify-center w-6 h-6 text-gray"
    >
      <i class="pi pi-times" style="font-size: 1rem; color: currentColor"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "FilterHeader",
  setup(props, context) {
    const closeFilter = () => context.emit("closeFilter");
    return { closeFilter };
  },
};
</script>
