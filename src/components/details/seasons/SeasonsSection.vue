<template>
  <div class="section">
    <div class="container">
      <BackButton />
      <div class="tab:flex tab:gap-14 tab:mb-17 desk:mb-30">
        <!-- Mobile Title Render -->
        <CardTitle
          :title="(seasonId, query.title)"
          :subTitle="`Season ${seasonId}`"
          styles="tab:hidden"
        />
        <CardImage :imgSrc="imgSrc" :title="query.title" />

        <div class="w-full">
          <!-- Tablet-Desktop Title render -->
          <CardTitle
            :title="query.title"
            :subTitle="`Season ${seasonId}`"
            styles="hidden tab:block"
          />
          <InfoTitle title="Overview" />
          <MainDescription
            :category="CATEGORIES.tv"
            :description="data.overview"
            :subTitle="`Air date: ${data.air_date}`"
          />
        </div>
      </div>

      <InfoTitle title="Episodes" />
      <ul class="grid grid-cols-4 gap-2">
        <li
          v-for="episode in data.episodes"
          :key="episode.production_code"
          class="p-2 border border-gray"
        >
          <p class="text-accent-green">{{ episode.name }}</p>
          <p>{{ episode.overview }}</p>
        </li>
      </ul>

      <ul class="grid grid-cols-3 gap-2">
        <li v-for="season in seasons" :key="season.id">
          <router-link
            :to="{
              name: 'TvSeasons',
              params: { seasonId: season.id },
              query: { last: seasons.length, title: query.title },
            }"
            class="p-3 text-lg uppercase transition duration-300 bg-transparent border border-transparent border-accent-green text-accent-green mob:text-xl"
          >
            {{ season.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
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

export default {
  name: "SeasonsSection",
  async setup() {
    const { params, query } = useRoute();
    const id = +params.id;
    const seasonId = +params.seasonId;
    const { data, getData } = useApiData();

    await getData(`${TV_URL}${id}/${SEASONS_URL}/${seasonId}`);

    const seasons = [];
    for (let index = 1; index <= +query.last; index++) {
      seasons.push({ label: `Season ${index}`, id: index });
    }

    const imgSrc = computed(() =>
      data.value?.poster_path
        ? `${IMAGE_BASE_URL}${data.value.poster_path}`
        : null
    );

    return { data, seasons, seasonId, query, imgSrc, CATEGORIES };
  },
  components: {
    BackButton,
    CardTitle,
    CardImage,
    MainDescription,
    InfoTitle,
  },
};
</script>
