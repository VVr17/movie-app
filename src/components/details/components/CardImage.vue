<template>
  <div
    class="rounded-full duration-300 ease-in-out w-[323px] h-[323px] tab:w-[384px] tab:h-[384px] flex justify-center items-center"
  >
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
  </div>
</template>

<script>
import fallback from "@/assets/images/movie-card-plug.jpg";

export default {
  name: "CardImage",
  props: {
    imgSrc: { type: String },
    title: { type: String },
  },
  setup() {
    return { fallback };
  },
};
</script>

<style lang="scss" scoped></style>
