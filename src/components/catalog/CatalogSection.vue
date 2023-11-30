<template>
  <div class="section">
    <div class="container">
      <BackButton />
      <h1 class="mb-6 capitalize title-primary">{{ category }}</h1>
      <FilterBar @openFilter="toggleFilterIsOpen" />
      <ItemList
        v-if="data?.results?.length"
        :items="data.results"
        :category="category"
      />
      <h2
        v-if="data?.results && !data?.results?.length"
        class="text-xl title-secondary"
      >
        There is no movies / TV shows found on your request
      </h2>
    </div>
  </div>

  <teleport to="#modals">
    <Transition :duration="350" name="backdrop">
      <AppBackdrop v-if="filterIsOpen" @close="toggleFilterIsOpen">
        <div
          class="animate absolute right-0 w-screen max-w-[375px] tab:max-w-[418px] desk:max-w-[548px] h-screen bg-main-dark-gray overflow-y-auto"
        >
          <FilterModal @closeFilter="toggleFilterIsOpen" :category="category" />
        </div>
      </AppBackdrop>
    </Transition>
  </teleport>
</template>

<script>
import { Transition, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import isEmpty from "lodash/isEmpty";

import useApiData from "@/composables/api/useApiData";
import AppBackdrop from "@/components/common/Backdrop.vue";
import BackButton from "@/components/common/BackButton.vue";
import FilterBar from "@/components/catalog/filterBar/FilterBar.vue";
import FilterModal from "./filter/FilterModal.vue";
import ItemList from "@/components/catalog/list/ItemList.vue";

import {
  CATEGORIES,
  MOVIE_DISCOVER_URL,
  TRENDING_MOVIE_URL,
  TRENDING_TV_URL,
  TV_DISCOVER_URL,
} from "@/constants";

export default {
  name: "CatalogSection",
  props: {
    category: { type: String },
  },
  async setup(props) {
    const filterIsOpen = ref(false);
    const route = useRoute();
    const { data, error, getData } = useApiData();

    watchEffect(async () => {
      const searchParams = ref({});
      const url = ref(
        isEmpty(route.query) && props.category === CATEGORIES.tv
          ? TRENDING_TV_URL
          : isEmpty(route.query) && props.category === CATEGORIES.movies
          ? TRENDING_MOVIE_URL
          : props.category === CATEGORIES.tv
          ? TV_DISCOVER_URL
          : MOVIE_DISCOVER_URL
      );

      const { sort, genres, minYear, maxYear } = route.query;
      searchParams.value = {
        sort_by: sort ? sort : "popularity.desc",
      };

      if (genres) {
        searchParams.value.with_genres = Array.isArray(genres)
          ? genres.join("|")
          : genres;
      }
      if (minYear) {
        const key =
          props.category === CATEGORIES.movies
            ? "primary_release_date.gte"
            : "first_air_date.gte";
        searchParams.value[key] = `${+minYear}-01-01`;
      }
      if (maxYear) {
        const key =
          props.category === CATEGORIES.movies
            ? "primary_release_date.lte"
            : "first_air_date.lte";
        searchParams.value[key] = `${+maxYear}-12-31`;
      }

      await getData(url.value, searchParams.value);
    });

    const toggleFilterIsOpen = () => {
      if (filterIsOpen.value) {
        document.body.classList.remove("backdropIsOpen");
      } else {
        document.body.classList.add("backdropIsOpen");
      }
      filterIsOpen.value = !filterIsOpen.value;
    };

    return { data, error, filterIsOpen, toggleFilterIsOpen };
  },
  components: {
    BackButton,
    ItemList,
    FilterBar,
    AppBackdrop,
    Transition,
    FilterModal,
  },
};
</script>

<style lang="scss" scoped>
.backdrop-enter-active,
.backdrop-leave-active,
.backdrop-enter-active .animate,
.backdrop-leave-active .animate {
  transition: all 0.3s ease-in-out;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.backdrop-enter-from .animate,
.backdrop-leave-to .animate {
  transform: translateX(100%);
  opacity: 0.001;
}
</style>
