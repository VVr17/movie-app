<template>
  <ul className="flex flex-col gap-2 mb-4 tab:mb-15">
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
        </span>
      </p>
    </li>
  </ul>
</template>

<script>
import { useRoute } from "vue-router";
import { useDescriptionFields } from "@/composables";
import { DESCRIPTION_TYPES } from "@/constants";

export default {
  name: "ShortDescription",
  props: {
    category: { type: String },
    data: { type: Object },
  },
  setup(props) {
    const route = useRoute();
    const name = route.name === "MovieDetails" ? "Movies" : "Tv";

    const { descriptionFields } = useDescriptionFields(
      DESCRIPTION_TYPES.short,
      props.category,
      props.data
    );

    return { descriptionFields, name };
  },
};
</script>
