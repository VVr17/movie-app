<template>
  <div class="section">
    <div class="container">
      <BackButton />
      <DetailedCard v-if="data" :movie="data" :category="category" />
      <InfoTitle title="Cast" />
      <div v-if="credits" class="grid grid-cols-5 gap-2">
        <div v-for="item in cast" :key="item.id">
          <p>{{ item.character }}: {{ item.name }}</p>
          <img
            :src="`${IMAGE_BASE_URL}${item.profile_path}`"
            :alt="item.name"
          />
        </div>
      </div>

      <InfoTitle title="Crew" />
      <div v-if="credits" class="grid grid-cols-5 gap-2">
        <div v-for="item in crew" :key="item.id">
          {{ item.job }}: {{ item.name || item.original_name }}
          <img
            :src="`${IMAGE_BASE_URL}${item.profile_path}`"
            :alt="item.name"
          />
        </div>
      </div>

      <h2 v-if="error" class="text-xl title-secondary">
        There is no movie found
      </h2>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useApiData } from "@/composables/api";
import { BackButton } from "@/components/common";
import DetailedCard from "./DetailedCard.vue";
import { InfoTitle } from "./components";
import { CREDIT_URL, IMAGE_BASE_URL } from "@/constants";
import { watchEffect, ref } from "vue";

export default {
  props: {
    url: { type: String },
    category: { type: String },
  },
  async setup(props) {
    const { params } = useRoute();
    const id = params.id;

    const { data, error, getData } = useApiData();
    const { data: credits, getData: getCastData } = useApiData();

    const cast = ref(null);
    const crew = ref(null);

    watchEffect(() => {
      if (credits.value) {
        cast.value =
          credits.value.cast <= 20
            ? credits.value.cast
            : credits.value.cast.splice(0, 20);

        crew.value =
          credits.value.crew <= 5
            ? credits.value.crew
            : credits.value.crew.splice(0, 5);
      }
      console.log("credits", credits);
    });

    await getData(`${props.url}${id}`);
    await getCastData(`${props.url}${id}/${CREDIT_URL}`);

    return { data, error, credits, IMAGE_BASE_URL, crew, cast };
  },
  components: { BackButton, DetailedCard, InfoTitle },
};
</script>
