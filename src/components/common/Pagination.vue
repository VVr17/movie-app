<template>
  <vue-awesome-paginate
    v-model="currentPage"
    :total-items="totalResults"
    :items-per-page="ITEMS_PER_PAGE"
    :max-pages-shown="MAX_PAGE_SHOWN"
    :on-click="handlePageChange"
  />
</template>

<script>
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { FIRST_PAGE, ITEMS_PER_PAGE, MAX_PAGE_SHOWN } from "@/constants";

export default {
  name: "ListPagination",
  props: {
    totalResults: { type: Number },
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    // Set initial value from query or default
    const currentPage = ref(+route.query.page || FIRST_PAGE);

    // Watch current page changes
    watchEffect(() => {
      currentPage.value = +route.query.page || FIRST_PAGE;
    });

    const handlePageChange = () => {
      router.push({ query: { ...route.query, page: currentPage.value } });
    };

    return { ITEMS_PER_PAGE, MAX_PAGE_SHOWN, currentPage, handlePageChange };
  },
};
</script>

<style lang="scss" scoped>
.pagination-container {
  @apply flex justify-center max-w-full w-full gap-2 py-2 mt-4 text-base transition duration-300 text-gray;
}

:deep(.paginate-buttons) {
  @apply w-6 h-5 flex justify-center items-center rounded-full hover:text-white transition duration-300;
}

:deep(.active-page) {
  @apply text-accent-green;
}

:deep(.next-button),
:deep(.back-button) {
  @apply hover:text-accent-green transition duration-300;
}
</style>
