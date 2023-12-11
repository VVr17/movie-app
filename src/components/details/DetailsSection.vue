<template>
  <div class="section">
    <div class="container">
      <BackButton />
      <DetailedCard v-if="data" :data="data" :category="category" />
      <CastCrew v-if="isMoviePage" :id="id" :url="url" />
      <h2 v-if="error" class="text-xl title-secondary">
        There is no data found on your request
      </h2>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import { CATEGORIES, IMAGE_BASE_URL } from "@/constants";
import { useApiData } from "@/composables/api";

import { BackButton } from "@/components/common";
import DetailedCard from "./DetailedCard.vue";
import CastCrew from "./CastCrew.vue";

export default {
  props: {
    url: { type: String },
    category: { type: String },
  },
  async setup(props) {
    const { params } = useRoute();
    const id = +params.id;
    const isMoviePage =
      props.category === CATEGORIES.tv || props.category === CATEGORIES.movies;

    const { data, error, getData } = useApiData();
    await getData(`${props.url}${id}`);

    return { data, error, IMAGE_BASE_URL, id, isMoviePage };
  },
  components: { BackButton, DetailedCard, CastCrew },
};
</script>
