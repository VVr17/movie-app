<template>
  <div class="section">
    <div class="container">
      <InfoTitle title="Cast" />
      <ItemList
        v-if="cast.length"
        :items="cast"
        :category="people"
        styles="mb-4 tab:mb-6 desk:mb-8"
      />

      <InfoTitle title="Crew" />
      <ItemList v-if="cast.length" :items="crew" :category="people" />
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import {
  CATEGORIES,
  CREDIT_URL,
  IMAGE_BASE_URL,
  MAX_CAST,
  MAX_CREW,
} from "@/constants";
import { useApiData } from "@/composables/api";

import { InfoTitle } from "./components";
import ItemList from "@/components/common/list";

export default {
  name: "CastSection",
  props: {
    url: { type: String },
  },
  async setup(props) {
    const { params } = useRoute();
    const id = +params.id;

    const { people } = CATEGORIES;
    const { data: credits, getData } = useApiData();

    const cast = ref(null);
    const crew = ref(null);

    // Watch data to get cast and crew lists
    watchEffect(() => {
      if (credits.value) {
        cast.value =
          credits.value.cast <= MAX_CAST
            ? credits.value.cast
            : credits.value.cast.splice(0, MAX_CAST);

        crew.value =
          credits.value.crew <= MAX_CREW
            ? credits.value.crew
            : credits.value.crew.splice(0, MAX_CREW);
      }
    });

    await getData(`${props.url}${id}/${CREDIT_URL}`);

    return { IMAGE_BASE_URL, people, cast, crew };
  },
  components: { InfoTitle, ItemList },
};
</script>
