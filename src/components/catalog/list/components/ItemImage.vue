<template>
  <router-link :to="{ name, params: { id } }" class="w-full h-auto mb-2">
    <img
      v-if="imgSrc"
      :src="imgSrc"
      :alt="title"
      class="object-contain w-full h-full"
    />
    <img
      v-else
      :src="fallback"
      :alt="title"
      class="object-contain w-full h-full"
    />
  </router-link>
</template>

<script>
import fallback from "@/assets/images/movie-card-plug.jpg";

export default {
  name: "ItemImage",
  props: {
    name: { type: String },
    id: { type: Number },
    title: { type: String },
    imgSrc: { type: String || null },
  },
  setup() {
    return { fallback };
  },
};
</script>
