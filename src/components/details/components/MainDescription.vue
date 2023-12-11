<template>
  <div class="pt-3 pb-10 tab:block tab:pt-0 tab:pb-0 tab:mb-12">
    <p class="mb-2 text-base text-white transition duration-300 font-play">
      {{ subTitle }}
    </p>
    <p class="text-sm font-normal text-white">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MainDescription",
  props: {
    subTitle: { type: String },
    description: { type: String },
  },
};
</script>
