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
        v-if="data?.total_pages > FIRST_PAGE && totalResults"
        :totalResults="totalResults"
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
import { topScroll } from "@/utils";
import { useApiData } from "@/composables/api";
import { useUrlSearchParams } from "@/composables";

import {
  AppBackdrop,
  BackButton,
  ListPagination,
  LoadingSpinner,
} from "@/components/common";
import FilterBar from "./filterBar";
import FilterModal from "./filter";
import SearchForm from "./search";
import ItemList from "@/components/common/list";

export default {
  name: "CatalogSection",
  props: {
    category: { type: String },
  },
  async setup(props) {
    const filterIsOpen = ref(false);
    const totalResults = ref(0);
    const { data, error, isLoading, getData } = useApiData();
    const { url, searchParams, getUrl, getSearchParams } = useUrlSearchParams();

    // Watch changes in URL search params to update data
    watchEffect(async () => {
      getUrl(props.category);
      getSearchParams(props.category);

      await getData(url.value, searchParams.value);
      topScroll();
    });

    // Watch to update total pages
    watchEffect(() => {
      totalResults.value =
        data.value?.total_pages <= MAX_TOTAL_PAGES
          ? data.value?.total_results
          : MAX_TOTAL_PAGES * ITEMS_PER_PAGE;
    });

    // Open/close filter side menu
    const toggleFilterIsOpen = () => {
      // Stop body scroll when filter side menu is open
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
      totalResults,
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
