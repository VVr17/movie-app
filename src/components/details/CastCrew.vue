<template>
  <InfoTitle title="Cast" />
  <div class="grid grid-cols-5 gap-2">
    <div v-for="item in cast" :key="item.id">
      <router-link :to="{ name: 'PersonDetails', params: { id: item.id } }">
        <p>{{ item.character }}: {{ item.name }}</p>
        <img :src="`${IMAGE_BASE_URL}${item.profile_path}`" :alt="item.name" />
      </router-link>
    </div>
  </div>

  <InfoTitle title="Crew" />
  <div class="grid grid-cols-5 gap-2">
    <div v-for="item in crew" :key="item.id">
      <router-link :to="{ name: 'PersonDetails', params: { id: item.id } }">
        {{ item.job }}: {{ item.name || item.original_name }}
        <img :src="`${IMAGE_BASE_URL}${item.profile_path}`" :alt="item.name" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { CREDIT_URL, IMAGE_BASE_URL } from "@/constants";
import { InfoTitle } from "./components";
import { ref, watchEffect } from "vue";
import { useApiData } from "@/composables/api";

export default {
  name: "CastCrew",
  props: {
    url: { type: String },
    id: { type: Number },
  },
  async setup(props) {
    const { data: credits, getData } = useApiData();

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
    });

    await getData(`${props.url}${props.id}/${CREDIT_URL}`);

    return { IMAGE_BASE_URL, cast, crew };
  },
  components: { InfoTitle },
};
</script>
