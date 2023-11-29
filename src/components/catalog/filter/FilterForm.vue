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

      <FilterItem title="Genres">
        <OptionList
          v-if="data?.genres"
          :options="data.genres"
          v-model="formData.genres"
        />
      </FilterItem>
    </ul>

    <button type="submit" class="button button-primary">Submit filter</button>
    <button type="button" className="button button-secondary">
      Reset Filter
    </button>
  </form>
</template>

<script>
import useApiData from "@/composables/api/useApiData";
import { CATEGORIES, GENRES_MOVIE_URL, GENRES_TV_URL } from "@/constants";
import { ref } from "vue";
import OptionList from "./OptionList.vue";
import FilterItem from "./FilterItem.vue";
import YearFilter from "./YearFilter.vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "FilterForm",
  props: {
    category: { type: String },
  },
  async setup(props) {
    const router = useRouter();
    const route = useRoute();
    const { movies } = CATEGORIES;
    const url = props.category === movies ? GENRES_MOVIE_URL : GENRES_TV_URL;

    // Initialize formData with default values
    const formData = ref({
      genres: [], // with_genres // 9648|80|18
      minYear: "1950", // release_date.gte
      maxYear: new Date().getFullYear().toString(), // release_date.lte
      ...route.query,
    });

    const { data, error, getData } = useApiData(url);

    await getData();

    const handleSubmit = () => {
      console.log("submit", formData);

      const query = {};

      for (const key in formData.value) {
        const value = formData.value[key];

        // If the value is an array, use the key as is, otherwise, convert to a string
        query[key] = Array.isArray(value) ? value : value.toString();
      }

      // Update the query parameters and navigate
      router.push({ query: { ...route.query, ...query } });
    };

    return {
      error,
      data,
      formData,
      handleSubmit,
    };
  },
  components: { OptionList, FilterItem, YearFilter },
};
</script>

<style lang="scss" scoped></style>
