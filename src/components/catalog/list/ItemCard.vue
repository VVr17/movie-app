<template>
  <div class="flex flex-row flex-grow tab:flex-col bg-card-dark-gray">
    <div class="flex flex-col flex-grow p-2">
      <ItemImage :name="name" :id="item.id" :title="title" :imgSrc="imgSrc" />
      <ItemTitle :name="name" :id="item.id" :title="title" />
      <ItemGenres :genres="genres" />
    </div>
  </div>
</template>

<script>
import { computed, inject } from "vue";
import { CATEGORIES, IMAGE_BASE_URL } from "@/constants";
import fallback from "@/assets/images/movie-card-plug.jpg";
import { ItemImage, ItemTitle, ItemGenres } from "./components";

export default {
  name: "ItemCard",
  props: {
    item: { type: Object },
    category: { type: String },
  },
  setup(props) {
    const { movieGenres, tvGenres } = inject("genres");

    const name =
      props.category === CATEGORIES.movies ? "MovieDetails" : "TvDetails";
    const imgSrc = props.item?.poster_path
      ? `${IMAGE_BASE_URL}${props.item.poster_path}`
      : null;
    const title = props.item.original_title || props.item.original_name;
    const chosenGenres =
      props.category === CATEGORIES.movies ? movieGenres : tvGenres;

    const genres = computed(() => {
      return chosenGenres.value
        .filter(({ id }) => props.item.genre_ids.includes(id))
        .map(({ name }) => name)
        .join(", ");
    });

    return { name, imgSrc, fallback, genres, title };
  },
  components: { ItemImage, ItemTitle, ItemGenres },
};
</script>
