<template>
  <ul className="flex flex-col gap-2 ">
    <li class="text-gray" v-for="field in descriptionFields" :key="field.title">
      <p class="flex gap-2 text-gray">
        <span class="text-s tab:text-base first-letter:capitalize">
          {{ field.title }}
        </span>
        <span v-if="field.collection" class="flex gap-2">
          <router-link
            v-for="item in field.collection"
            :key="item.id"
            class="underline pointer tab:text-base"
            :to="{ name, query: { genres: item.id } }"
          >
            {{ item.name }}
          </router-link>
        </span>

        <span v-else className=" tab:text-base">
          {{ field.value }}
          <router-link
            v-if="field.hasSeasons"
            :to="{
              name: 'TvSeasons',
              params: { seasonId: FIRST_SEASON },
              query: { last: field.value, title },
            }"
            class="underline pointer"
          >
            ( Learn more... )
          </router-link>
        </span>
      </p>
    </li>
  </ul>
</template>

<script>
import { useRoute } from "vue-router";
import { useDescriptionFields } from "@/composables";
import { DESCRIPTION_TYPES, FIRST_SEASON } from "@/constants";

export default {
  name: "ShortDescription",
  props: {
    category: { type: String },
    data: { type: Object },
    title: { type: String },
  },
  setup(props) {
    const route = useRoute();
    const name = route.name === "MovieDetails" ? "Movies" : "Tv";

    const { descriptionFields } = useDescriptionFields(
      DESCRIPTION_TYPES.short,
      props.category,
      props.data
    );

    return { descriptionFields, name, FIRST_SEASON };
  },
};
</script>
