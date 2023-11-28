<template>
  <ul class="grid grid-cols-2 gap-1 tab:grid-cols-4 desk:grid-cols-5">
    <li
      class="p-0.5 duration-300 ease-in-out rounded-sm bg-gray min-h-[80px] hover:bg-accent-green group"
      v-for="genre in genres"
      :key="genre.id"
    >
      <router-link
        :to="{
          name: 'Movies',
          params: { category },
          query: { genre: genre.id },
        }"
        class="flex flex-col items-center w-full h-full cursor-pointer bg-main-dark-gray rounded-min"
      >
        <span
          class="flex items-center justify-center w-full h-full max-w-full py-1 break-words tab:px-1"
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
