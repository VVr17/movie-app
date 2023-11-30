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

      <FilterItem title="Genres" v-if="data?.genres">
        <OptionList :options="data.genres" v-model="formData.genres" />
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
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import useApiData from "@/composables/api/useApiData";
import {
  CATEGORIES,
  defaultFilter,
  GENRES_MOVIE_URL,
  GENRES_TV_URL,
} from "@/constants";
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
    const { movies } = CATEGORIES;
    const url = props.category === movies ? GENRES_MOVIE_URL : GENRES_TV_URL;

    // Initialize formData with default values
    const { genres, ...restQuery } = route.query;
    const formData = ref({ ...defaultFilter, ...restQuery });
    if (genres) {
      formData.value.genres = Array.isArray(genres) ? genres : [genres];
    }

    const { data, getData } = useApiData();
    await getData(url);

    const handleSubmit = () => {
      const query = {};

      for (const key in formData.value) {
        const value = formData.value[key];
        if (value) query[key] = Array.isArray(value) ? value : value.toString();
      }

      // Update the query parameters and navigate
      router.push({ query: { ...route.query, ...query } });
      closeFilter();
    };

    const resetFilter = () => {
      formData.value = defaultFilter;
      router.push(route.path);
      closeFilter();
    };

    const closeFilter = () => context.emit("closeFilter");

    return {
      data,
      formData,
      handleSubmit,
      resetFilter,
    };
  },
  components: { OptionList, FilterItem, YearFilter },
};
</script>

<style lang="scss" scoped></style>
