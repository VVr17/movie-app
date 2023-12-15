<template>
  <div class="flex flex-row flex-grow tab:flex-col bg-card-dark-gray">
    <div class="flex flex-col flex-grow p-2">
      <ItemImage :name="name" :id="item.id" :title="title" :imgSrc="imgSrc" />
      <ItemTitle :name="name" :id="item.id" :title="title" />
      <ItemDescription
        :title="shortDescriptionTitle"
        :content="shortDescription"
      />
    </div>
  </div>
</template>

<script>
import fallback from "@/assets/images/movie-card-plug.jpg";
import { useCardFields } from "@/composables";
import { ItemImage, ItemTitle, ItemDescription } from "./components";

export default {
  name: "ItemCard",
  props: {
    item: { type: Object },
    category: { type: String },
  },
  setup(props) {
    const { name, imgSrc, title, shortDescriptionTitle, shortDescription } =
      useCardFields(props.category, props.item);

    return {
      name,
      imgSrc,
      fallback,
      title,
      shortDescriptionTitle,
      shortDescription,
    };
  },
  components: { ItemImage, ItemTitle, ItemDescription },
};
</script>
../../common/components
