<template>
  <div class="section">
    <div class="container">
      <div class="flex justify-between">
        <BackButton />
        <SeasonsMenu :quantity="+route.query.last" />
      </div>

      <div class="tab:flex tab:gap-14 tab:mb-10 desk:mb-12">
        <!-- Mobile Title Render -->
        <CardTitle
          :title="(route.params.seasonId, route.query.title)"
          :subTitle="`Season ${route.params.seasonId}`"
          styles="tab:hidden"
        />
        <CardImage :imgSrc="imgSrc" :title="route.query.title" />

        <div class="w-full">
          <!-- Tablet-Desktop Title render -->
          <CardTitle
            :title="route.query.title"
            :subTitle="`Season ${route.params.seasonId}`"
            styles="hidden tab:block"
          />
          <InfoTitle title="Overview" />
          <MainDescription
            v-if="data"
            :category="CATEGORIES.tv"
            :description="data.overview"
            :subTitle="`Air date: ${data.air_date}`"
          />
        </div>
      </div>

      <InfoTitle title="Episodes" styles="mb-3" />
      <EpisodeList v-if="data" :episodes="data.episodes" />
    </div>
  </div>
</template>

<script>
import { computed, watchEffect, ref } from "vue";
import { useRoute } from "vue-router";

import { useApiData } from "@/composables/api";
import { IMAGE_BASE_URL, CATEGORIES, SEASONS_URL, TV_URL } from "@/constants";

import { BackButton } from "@/components/common";
import {
  CardTitle,
  CardImage,
  MainDescription,
  InfoTitle,
} from "../components";
import EpisodeList from "./EpisodeList.vue";
import SeasonsMenu from "./SeasonsMenu.vue";

export default {
  name: "SeasonsSection",
  async setup() {
    const route = useRoute();
    const { data, getData } = useApiData();

    // Watch changes in URL search params to update data
    watchEffect(async () => {
      const id = ref(+route.params.id);
      const seasonId = ref(+route.params.seasonId);

      await getData(`${TV_URL}${id.value}/${SEASONS_URL}/${seasonId.value}`);
    });

    const imgSrc = computed(() =>
      data.value?.poster_path
        ? `${IMAGE_BASE_URL}${data.value.poster_path}`
        : null
    );

    return { data, route, imgSrc, CATEGORIES };
  },
  components: {
    BackButton,
    CardTitle,
    CardImage,
    MainDescription,
    InfoTitle,
    SeasonsMenu,
    EpisodeList,
  },
};
</script>
