<template>
  <footer class="pt-6 pb-5 bg-filter-dark-gray">
    <div
      class="container text-center flex flex-col justify-center items-center"
    >
      <a
        href="https://www.themoviedb.org/"
        class="flex items-center justify-center gap-2 w-30 h-auto mb-4"
        target="_blank"
        rel="noopener"
      >
        <img :src="tmdbLogo" alt="tmdb" class="object-contain w-full h-full" />
      </a>

      <p class="text-right text-xs text-gray">
        Filmoteka &copy; {{ currentYear }}
      </p>
    </div>
  </footer>
</template>

<script>
import tmdbLogo from "@/assets/tmdb.svg";

export default {
  name: "AppFooter",
  setup() {
    const currentYear = new Date().getFullYear();
    return { tmdbLogo, currentYear };
  },
};
</script>
