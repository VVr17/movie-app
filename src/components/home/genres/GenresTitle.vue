<template>
  <div
    class="group w-full mb-4 desk:w-full p-0.5 flex justify-center items-center rounded-lg cursor-pointer transition-all duration-300 bg-gray hover:bg-accent-green"
  >
    <router-link
      :to="{ name: 'Movies', params: { category } }"
      class="flex items-center justify-between w-full px-4 py-2 bg-card-dark-gray rounded-lg desk:px-2 desk:py-2.5"
    >
      <h3
        class="text-2xl text-white transition-colors duration-500 title-secondary group-hover:text-yellow-light"
      >
        {{ title }}
      </h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "GenresTitle",
  props: {
    title: { type: String },
    category: { type: String },
  },
};
</script>
