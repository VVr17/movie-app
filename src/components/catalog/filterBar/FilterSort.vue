<template>
  <div class="text-base text-right bg-main-dark-gray">
    <div class="relative flex ml-auto w-fit">
      <button
        type="button"
        @click="toggleSortMenu"
        class="relative flex items-center justify-between gap-2 py-3 text-yellow-light"
      >
        <span class="min-w-[200px]">{{ selectedLabel }}</span>
        <i
          v-show="!menuIsOpen"
          class="pi pi-angle-down"
          style="font-size: 1rem; color: currentColor"
        ></i>
        <i
          v-show="menuIsOpen"
          class="pi pi-angle-up"
          style="font-size: 1rem; color: currentColor"
        ></i>
      </button>

      <Transition name="slide-fade">
        <ul
          v-if="menuIsOpen"
          class="absolute right-0 flex flex-col items-start justify-start w-full gap-1 py-1 border top-12 bg-main-dark-gray border-light-gray"
        >
          <li
            v-for="sortType in sortTypes"
            :key="sortType.value"
            class="text-sm"
            :class="{
              'text-accent-green': sortType.value === sort,
              'text-white': sortType.value !== sort,
            }"
          >
            <label
              class="block px-2 py-1.5 cursor-pointer hover:text-yellow-light focus-within:text-yellow-light"
            >
              <input
                hidden
                type="radio"
                v-model="sort"
                :value="sortType.value"
                @change="handleSortChange"
              />
              {{ sortType.label }}
            </label>
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getSortTypes } from "@/utils";

export default {
  name: "FilterSort",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const sortTypes = getSortTypes(); // Get Sort types for sort options menu
    const sort = ref(route.query.sort || sortTypes[0].value); // Set initial value from query or default
    const menuIsOpen = ref(false);

    const selectedLabel = computed(() => {
      return sortTypes.find(({ value }) => sort.value === value).label;
    });

    watchEffect(async () => {
      sort.value = route.query.sort || sortTypes[0].value;
    });

    const toggleSortMenu = () => {
      menuIsOpen.value = !menuIsOpen.value;
    };

    const handleSortChange = () => {
      toggleSortMenu();
      router.push({ query: { ...route.query, sort: sort.value } });
    };

    return {
      sort,
      sortTypes,
      menuIsOpen,
      selectedLabel,
      toggleSortMenu,
      handleSortChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
