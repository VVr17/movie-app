<template>
  <div class="flex flex-row flex-grow tab:flex-col bg-card-dark-gray">
    <div class="flex flex-col flex-grow p-2">
      <div class="mb-2 tab:mb-4">
        <router-link
          :to="{ name: 'MovieDetails', params: { id: item.id } }"
          class="text-xs font-medium tab:text-sm flex flex-col hover:text-yellow-light focus:text-yellow-light transition duration-300 max-w-[141px] mob:max-w-[171px] tab:max-w-[189px] desk:max-w-[240px]"
        >
          <span className="first-letter:capitalize">
            {{ item.original_title || item.original_name }}</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    item: { type: Object },
  },
};
</script>

<style lang="scss" scoped></style>
