<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col w-full border-l border-l-filter-dark-gray"
  >
    <ul class="flex flex-col w-full gap-12 mb-14">
      <FilterItem title="Release year">
        <YearFilter
          v-model:minYear="formData.minYear"
          v-model:maxYear="formData.maxYear"
        />
      </FilterItem>

      <FilterItem title="Genres" v-if="genresFields.length">
        <OptionList :options="genresFields" v-model="formData.genres" />
      </FilterItem>
    </ul>

    <button type="submit" class="button button-primary">Submit filter</button>
    <button
      type="button"
      className="button button-secondary"
      @click="resetFilter"
    >
      Reset Filter
    </button>
  </form>
</template>

<script>
import { inject, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { CATEGORIES, defaultFilter, FIRST_PAGE } from "@/constants";
import { getQuery } from "@/utils";
import FilterItem from "./FilterItem.vue";
import OptionList from "./OptionList.vue";
import YearFilter from "./YearFilter.vue";

export default {
  name: "FilterForm",
  props: {
    category: { type: String },
  },
  async setup(props, context) {
    const router = useRouter();
    const route = useRoute();
    const { movieGenres, tvGenres } = inject("genres");
    const { movies } = CATEGORIES;
    const genresFields = props.category === movies ? movieGenres : tvGenres;

    // Initialize formData with default values
    const { genres, ...restQuery } = route.query;
    const formData = ref({ ...defaultFilter, ...restQuery });
    if (genres) {
      formData.value.genres = Array.isArray(genres) ? genres : [genres];
    }

    const handleSubmit = () => {
      const query = getQuery(formData.value);

      // Update the query parameters and navigate
      router.push({ query: { ...route.query, ...query, page: FIRST_PAGE } });
      closeFilter();
    };

    const resetFilter = () => {
      formData.value = defaultFilter;
      router.push(route.path);
      closeFilter();
    };

    const closeFilter = () => context.emit("closeFilter");

    return {
      genresFields,
      formData,
      handleSubmit,
      resetFilter,
    };
  },
  components: { OptionList, FilterItem, YearFilter },
};
</script>
