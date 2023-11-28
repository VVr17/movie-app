<template>
  <ul class="grid grid-cols-2 gap-3 tab:grid-cols-4 desk:grid-cols-5">
    <li
      class="group rounded-lg cursor-pointer p-0.5 duration-300 ease-in-out bg-gray hover:bg-accent-green group"
      v-for="genre in genres"
      :key="genre.id"
    >
      <router-link
        :to="{
          name: 'Movies',
          params: { category },
          query: { genre: genre.id },
        }"
        class="flex flex-col items-center w-full h-full p-2 rounded-lg cursor-pointer bg-filter-dark-gray rounded-min"
      >
        <span
          class="flex items-center justify-center w-full h-full max-w-full py-1 break-words group-hover:text-yellow-light tab:px-1"
        >
          {{ genre.name }}
        </span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "GenresList",
  props: {
    genres: { type: Array },
    category: { type: String },
  },
};
</script>
