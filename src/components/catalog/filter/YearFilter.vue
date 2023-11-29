<template>
  <div className="flex gap-6 pb-2 text-base">
    <label className="inline-block mr-6 text-base">
      <span className="mr-2">From</span>
      <input
        type="number"
        :value="minYear"
        @input="$emit('update:minYear', $event.target.value)"
        class="p-2 text-center text-white border filter-year-input w-17 border-gray bg-main-dark-gray w-26 rounded-semiLg"
      />
    </label>
    <label className="inline-block mr-6 text-base">
      <span className="mr-2">To</span>
      <input
        type="number"
        :value="maxYear"
        @input="$emit('update:maxYear', $event.target.value)"
        class="p-2 text-center text-white border filter-year-input w-17 border-gray bg-main-dark-gray w-26 rounded-semiLg"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "YearFilter",
  props: {
    minYear: { type: String },
    maxYear: { type: String },
  },
};
</script>

<style lang="scss" scoped></style>
