<template>
  <table class="pt-3 text-base tab:block tab:pt-0 tab:pb-0">
    <tbody>
      <tr
        v-for="field in descriptionFields"
        :key="field.title"
        class="relative after:content-[' '] after:absolute after:bottom-0 after:block after:w-full after:h-[1px] after:left-0 after:bg-dark-gray"
      >
        <td v-if="field.value || field.href" className=" text-gray tab:w-80">
          <p className="pt-2 pb-1 pr-2">{{ field.title }}</p>
        </td>

        <td v-if="field.value || field.href" className="text-sm tab:w-80">
          <p v-if="field.collection" class="flex gap-2 pt-2 pb-1">
            <router-link
              v-for="item in field.collection"
              :key="item.id"
              class="underline pointer"
              :to="{ name, query: { genres: item.id } }"
            >
              {{ item.name }}
            </router-link>
          </p>

          <a
            v-if="field.href"
            :href="field.href"
            class="pt-2 pb-1 underline cursor-pointer hover:text-yellow-light focus:text-yellow-light"
            target="_blank"
            rel="noopener"
            >{{ field.value }}</a
          >

          <p v-if="!field.href && !field.collection" class="pt-2 pb-1">
            {{ field.value }}
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { DESCRIPTION_TYPES } from "@/constants";
import { useDescriptionFields } from "@/composables";
import { useRoute } from "vue-router";

export default {
  name: "FullCharacteristics",
  props: {
    data: { type: Object },
    category: { type: String },
  },
  setup(props) {
    const route = useRoute();
    const name = route.name === "MovieDetails" ? "Movies" : "Tv";

    const { descriptionFields } = useDescriptionFields(
      DESCRIPTION_TYPES.detailed,
      props.category,
      props.data
    );

    return { descriptionFields, name };
  },
};
</script>
