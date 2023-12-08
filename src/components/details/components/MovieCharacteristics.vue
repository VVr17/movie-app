<template>
  <table class="pt-3 text-base pb-14 tab:block tab:pt-0 tab:pb-0 tab:mb-17">
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
          <p class="pt-2 pb-1">
            <a
              v-if="field.href"
              :href="field.href"
              class="cursor-pointer underline hover:text-yellow-light focus:text-yellow-light"
              target="_blank"
              rel="noopener"
              >{{ field.value }}</a
            >
            <span v-else>{{ field.value }}</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { DESCRIPTION_TYPES } from "@/constants";
import { useDescriptionFields } from "@/composables";

export default {
  name: "MovieCharacteristics",
  props: {
    movie: { type: Object },
    category: { type: String },
  },
  setup(props) {
    const { descriptionFields } = useDescriptionFields(
      DESCRIPTION_TYPES.detailed,
      props.category,
      props.movie
    );

    return { descriptionFields };
  },
};
</script>
