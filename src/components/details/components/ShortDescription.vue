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
import { useDescriptionFields } from "@/composables";
import { DESCRIPTION_TYPES } from "@/constants";

export default {
  name: "ShortDescription",
  props: {
    category: { type: String },
    data: { type: Object },
  },
  setup(props) {
    const { descriptionFields } = useDescriptionFields(
      DESCRIPTION_TYPES.short,
      props.category,
      props.data
    );

    return { descriptionFields };
  },
};
</script>
