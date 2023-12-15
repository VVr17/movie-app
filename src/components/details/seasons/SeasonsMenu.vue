<template>
  <div class="text-base text-right bg-main-dark-gray">
    <div class="relative flex ml-auto w-fit">
      <button
        type="button"
        @click="toggleMenu"
        :disabled="isDisabled"
        class="relative flex items-center justify-between gap-2 py-3 text-yellow-light disabled:text-gray"
      >
        <span class="min-w-[160px]">{{ selectedLabel }}</span>
        <i
          v-show="!menuIsOpen"
          class="pi pi-angle-down"
          style="font-size: 1rem; color: currentColor"
        />
        <i
          v-show="menuIsOpen"
          class="pi pi-angle-up"
          style="font-size: 1rem; color: currentColor"
        />
      </button>

      <!-- Drop-down menu with sort types -->
      <Transition name="slide-fade">
        <ul
          v-if="menuIsOpen"
          class="absolute right-0 flex flex-col items-start justify-start w-full gap-1 py-1 border top-12 bg-main-dark-gray border-light-gray"
        >
          <li
            v-for="season in seasons"
            :key="season.id"
            class="text-sm"
            :class="{
              'text-accent-green': season.id === selected,
              'text-white': season.id !== selected,
            }"
          >
            <label
              class="block px-2 py-1.5 cursor-pointer hover:text-yellow-light focus-within:text-yellow-light"
            >
              <input
                hidden
                type="radio"
                v-model="selected"
                :value="season.id"
                @change="handleSeasonChange"
              />
              {{ season.label }}
            </label>
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<script>
import { ref, computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

import { FIRST_SEASON } from "@/constants";
import { getSeasons } from "@/utils";

export default {
  name: "SeasonsMenu",
  props: {
    quantity: { type: Number },
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const menuIsOpen = ref(false);
    const seasons = getSeasons(+props.quantity); // Create seasons array
    const selected = ref(+route.params.seasonId || seasons[0].id); // Set initial value from query or default

    // Watch sort query changes
    watchEffect(
      () => (selected.value = +route.params.seasonId || seasons[0].id)
    );

    const selectedLabel = computed(() => {
      return seasons.find((season) => selected.value === season.id).label;
    });

    // Disabled drop down button if there is only one season
    const isDisabled = computed(() => seasons.length <= FIRST_SEASON);

    const toggleMenu = () => (menuIsOpen.value = !menuIsOpen.value);

    const handleSeasonChange = () => {
      toggleMenu();

      router.push({
        params: { ...route.params, seasonId: selected.value },
        query: route.query,
      });
    };

    return {
      seasons,
      selected,
      selectedLabel,
      isDisabled,
      menuIsOpen,
      toggleMenu,
      handleSeasonChange,
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
