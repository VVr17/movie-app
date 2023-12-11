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
      <ShortDescription :category="category" :data="data" />
    </div>
  </div>

  <!--  Tablet / Desktop Full info render -->
  <InfoTitle :title="descriptionTitle" />
  <MainDescription
    :category="category"
    :description="description"
    :subTitle="descriptionSubTitle"
  />
  <InfoTitle title="Characteristics" />
  <FullCharacteristics :data="data" :category="category" />
</template>

<script>
import { CATEGORIES, IMAGE_BASE_URL } from "@/constants";
import {
  CardTitle,
  CardImage,
  MovieTagline,
  ShortDescription,
  InfoTitle,
  MainDescription,
  FullCharacteristics,
} from "./components";

export default {
  name: "DetailedCard",
  props: {
    category: { type: String },
    data: { type: Object },
  },
  setup(props) {
    const imgSrc = props.data?.poster_path
      ? `${IMAGE_BASE_URL}${props.data.poster_path}`
      : props.data?.profile_path
      ? `${IMAGE_BASE_URL}${props.data.profile_path}`
      : null;

    const title =
      props.data?.original_title ||
      props.data?.original_name ||
      props.data?.name;

    const subTitle =
      props.category === CATEGORIES.people
        ? `Popularity: ${props.data?.popularity}`
        : `Status: ${props.data?.status}`;

    const descriptionTitle =
      props.category === CATEGORIES.people ? "Biography" : "Overview";
    const descriptionSubTitle =
      props.category === CATEGORIES.people
        ? `Known for department: ${props.data?.known_for_department}`
        : `Genres: ${props.data?.genres.map(({ name }) => name).join(", ")}`;
    const description = props.data?.overview || props.data?.biography;

    return {
      imgSrc,
      title,
      subTitle,
      descriptionTitle,
      description,
      descriptionSubTitle,
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
