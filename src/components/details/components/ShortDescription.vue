<template>
  <ul className="flex flex-col gap-2 mb-4 tab:mb-15">
    <li class="text-gray" v-for="field in descriptionFields" :key="field.title">
      <p class="text-gray">
        <span class="text-s tab:text-base first-letter:capitalize">
          {{ field.title }}
        </span>
        <span className=" tab:text-base">
          {{ field.value }}
        </span>
      </p>
    </li>
  </ul>
</template>

<script>
import { computed } from "vue";
import { CATEGORIES } from "@/constants";

export default {
  name: "ShortDescription",
  props: {
    category: { type: String },
    movie: { type: Object },
  },
  setup(props) {
    const descriptionFields = computed(() => {
      if (props.category === CATEGORIES.movies) {
        return [
          { title: "Release date: ", value: props.movie.release_date },
          { title: "Budget: ", value: `${props.movie.budget / 1_000_000} mln` },
          {
            title: "Revenue: ",
            value: `${props.movie.revenue / 1_000_000} mln`,
          },
          {
            title: "Genres: ",
            value: props.movie.genres.map(({ name }) => name).join(", "),
          },
        ];
      }

      if (props.category === CATEGORIES.tv) {
        return [
          { title: "First air date: ", value: props.movie.first_air_date },
          { title: "Last air date: ", value: props.movie.last_air_date },
          {
            title: "Number of seasons: ",
            value: props.movie.number_of_seasons,
          },
        ];
      }
      return [];
    });

    return { descriptionFields };
  },
};
</script>

<style lang="scss" scoped></style>
