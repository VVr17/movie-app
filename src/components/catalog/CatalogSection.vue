<template>
  <div class="section">
    <div class="container">
      <BackButton />
      <h1 class="mb-6 capitalize title-primary">{{ category }}</h1>
      <SearchForm />
      <FilterBar @openFilter="toggleFilterIsOpen" />
      <ItemList
        v-if="data?.results?.length"
        :items="data.results"
        :category="category"
      />
      <ListPagination
        v-if="data?.total_pages > FIRST_PAGE"
        :totalResults="
          data?.total_pages <= MAX_TOTAL_PAGES
            ? data?.total_results
            : MAX_TOTAL_PAGES * ITEMS_PER_PAGE
        "
      />
      <h2
        v-if="data?.results && !data?.results?.length"
        class="text-xl title-secondary"
      >
        There is no movies / TV shows found on your request
      </h2>
      <LoadingSpinner v-if="isLoading" />
    </div>
  </div>

  <!-- Filter side menu -->
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

import { FIRST_PAGE, MAX_TOTAL_PAGES, ITEMS_PER_PAGE } from "@/constants";
import { useApiData } from "@/composables/api";
import { useUrlSearchParams } from "@/composables";
import { topScroll } from "@/utils";

import {
  AppBackdrop,
  BackButton,
  ListPagination,
  LoadingSpinner,
} from "@/components/common";
import FilterBar from "./filterBar";
import FilterModal from "./filter";
import ItemList from "./list";
import SearchForm from "./search";

export default {
  name: "CatalogSection",
  props: {
    category: { type: String },
  },
  async setup(props) {
    const filterIsOpen = ref(false);
    const { data, error, isLoading, getData } = useApiData();

    const { url, searchParams, getUrl, getSearchParams } = useUrlSearchParams();

    watchEffect(async () => {
      getUrl(props.category);
      getSearchParams(props.category);

      await getData(url.value, searchParams.value);
      topScroll();
    });

    const toggleFilterIsOpen = () => {
      if (filterIsOpen.value) {
        document.body.classList.remove("backdropIsOpen");
      } else {
        document.body.classList.add("backdropIsOpen");
      }
      filterIsOpen.value = !filterIsOpen.value;
    };

    return {
      data,
      error,
      filterIsOpen,
      toggleFilterIsOpen,
      isLoading,
      FIRST_PAGE,
      MAX_TOTAL_PAGES,
      ITEMS_PER_PAGE,
    };
  },
  components: {
    BackButton,
    ItemList,
    FilterBar,
    LoadingSpinner,
    AppBackdrop,
    Transition,
    FilterModal,
    ListPagination,
    SearchForm,
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
@/composables/useApiData @/composables/api/useApiData
@/composables/useUrlSearchParams
