<template>
  <div class="tab:flex tab:gap-14 tab:mb-17 desk:mb-30">
    <!-- Mobile Title Render -->
    <CardTitle :title="title" :subTitle="subTitle" styles="tab:hidden" />
    <CardImage :imgSrc="imgSrc" :title="title" />

    <div class="w-full">
      <!-- Tablet-Desktop Title render -->
      <CardTitle
        :title="title"
        :subTitle="subTitle"
        styles="hidden tab:block"
      />

      <MovieTagline v-if="data.tagline" :tagline="data.tagline" />
      <ShortDescription :category="category" :data="data" :title="title" />
    </div>
  </div>

  <!--  Tablet / Desktop Full info render -->
  <InfoTitle :title="detailedDescriptionTitle" />
  <MainDescription
    :category="category"
    :description="detailedDescription"
    :subTitle="detailedDescriptionSubTitle"
  />
  <InfoTitle title="Characteristics" />
  <FullCharacteristics :data="data" :category="category" />
</template>

<script>
import {
  CardTitle,
  CardImage,
  MovieTagline,
  ShortDescription,
  InfoTitle,
  MainDescription,
  FullCharacteristics,
} from "./components";
import { useCardFields } from "@/composables";

export default {
  name: "DetailedCard",
  props: {
    category: { type: String },
    data: { type: Object },
  },
  setup(props) {
    const {
      imgSrc,
      title,
      subTitle,
      detailedDescriptionTitle,
      detailedDescriptionSubTitle,
      detailedDescription,
    } = useCardFields(props.category, props.data);

    return {
      imgSrc,
      title,
      subTitle,
      detailedDescriptionTitle,
      detailedDescriptionSubTitle,
      detailedDescription,
    };
  },
  components: {
    CardTitle,
    CardImage,
    MovieTagline,
    ShortDescription,
    InfoTitle,
    MainDescription,
    FullCharacteristics,
  },
};
</script>
