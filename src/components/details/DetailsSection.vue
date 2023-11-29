<template>
  <div class="section">
    <div class="container">
      <BackButton />
      <DetailedCard v-if="data" :movie="data" />
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
import DetailedCard from "./card/DetailedCard.vue";

export default {
  props: {
    url: {
      type: String,
    },
  },
  async setup(props) {
    const { params } = useRoute();
    const id = params.id;

    const { data, error, getData } = useApiData(`${props.url}${id}`);
    await getData();
    return { data, error };
  },
  components: { BackButton, DetailedCard },
};
</script>

<style lang="scss" scoped></style>
