<template>
  <table class="pt-3 text-base pb-14 tab:block tab:pt-0 tab:pb-0 tab:mb-17">
    <tbody>
      <tr
        v-for="field in fullDescription"
        :key="field.title"
        class="relative after:content-[' '] after:absolute after:bottom-0 after:block after:w-full after:h-[1px] after:left-0 after:bg-dark-gray"
      >
        <td v-if="field.value || field.href" className=" text-gray tab:w-80">
          <p className="pt-2 pb-1 pr-2">{{ field.title }}</p>
        </td>
        <td v-if="field.value || field.href" className="text-sm tab:w-80">
          <p class="pt-2 pb-1">
            <a
              v-if="field.href"
              :href="field.href"
              class="cursor-pointer"
              target="_blank"
              rel="noopener"
              >{{ field.href }}</a
            >
            <span v-else>{{ field.value }}</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed } from "vue";
import { CATEGORIES } from "@/constants";
export default {
  name: "MovieCharacteristics",
  props: {
    movie: { type: Object },
    category: { type: String },
  },
  setup(props) {
    const fullDescription = computed(() => {
      if (props.category === CATEGORIES.movies) {
        return [
          {
            title: "Release date: ",
            value: props.movie.release_date,
          },
          {
            title: "Production companies: ",
            value: props.movie.production_companies
              .map(({ name }) => name)
              .join(", "),
          },
          {
            title: "Production countries: ",
            value: props.movie.production_countries
              .map(({ name }) => name)
              .join(", "),
          },
          {
            title: "Home page: ",
            value: props.movie.homepage,
          },
          {
            title: "Popularity: ",
            value: props.movie.popularity,
          },
          {
            title: "Vote average: ",
            value: props.movie.vote_average,
          },
        ];
      }

      if (props.category === CATEGORIES.tv) {
        return [
          {
            title: "First air date: ",
            value: props.movie.first_air_date,
          },
          {
            title: "Created by: ",
            value: props.movie.created_by.map(({ name }) => name).join(", "),
          },
          {
            title: "Number of seasons: ",
            value: props.movie.number_of_seasons,
          },
          {
            title: "Number of episodes: ",
            value: props.movie.number_of_episodes,
          },
          {
            title: "Production companies: ",
            value: props.movie.production_companies
              .map(({ name }) => name)
              .join(", "),
          },
          {
            title: "Production countries: ",
            value: props.movie.production_countries
              .map(({ name }) => name)
              .join(", "),
          },
          {
            title: "Home page: ",
            href: props.movie.homepage,
          },
        ];
      }
      return [];
    });

    return { fullDescription };
  },
};
</script>
