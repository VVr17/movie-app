<template>
  <div class="section">
    <div class="container">
      <BackButton />
      <DetailedCard v-if="data" :movie="data" :category="category" />
      <h2 v-if="error" class="text-xl title-secondary">
        There is no movie found
      </h2>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import useApiData from "@/composables/api/useApiData";
import BackButton from "@/components/common/BackButton.vue";
import DetailedCard from "./DetailedCard.vue";

export default {
  props: {
    url: { type: String },
    category: { type: String },
  },
  async setup(props) {
    const { params } = useRoute();
    const id = params.id;

    const { data, error, getData } = useApiData();
    await getData(`${props.url}${id}`);
    return { data, error };
  },
  components: { BackButton, DetailedCard },
};
</script>
