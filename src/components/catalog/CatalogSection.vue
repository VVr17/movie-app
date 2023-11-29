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
import { useRoute } from "vue-router";

import useApiData from "@/composables/api/useApiData";
import AppBackdrop from "@/components/common/Backdrop.vue";
import BackButton from "@/components/common/BackButton.vue";
import ItemList from "@/components/catalog/list/ItemList.vue";
import FilterBar from "@/components/catalog/filterBar/FilterBar.vue";
import { Transition, ref } from "vue";
import FilterModal from "./filter/FilterModal.vue";

export default {
  name: "CatalogSection",
  props: {
    category: { type: String },
    url: { type: String },
  },
  async setup(props) {
    const { query } = useRoute();
    const genre = query.genre;
    const filterIsOpen = ref(false);

    const searchParams = {
      page: "1",
      sort_by: "popularity.desc",
    };
    if (genre) searchParams.with_genres = genre;

    const { data, error, getData } = useApiData(props.url, searchParams);
    await getData();

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
