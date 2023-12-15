<template>
  <ul
    class="grid grid-cols-2 tab:grid-cols-5 desk:grid-cols-6 bg-main-dark-gray"
  >
    <li
      v-for="episode in episodes"
      :key="episode.episode_number"
      class="p-2 transition duration-300 border border-gray hover:border-yellow-light"
    >
      <p class="mb-2 text-accent-green">{{ episode.name }}</p>
      <p>{{ episode.overview }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "EpisodeList",
  props: {
    episodes: { type: Array },
  },
};
</script>
