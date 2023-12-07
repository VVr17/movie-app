<template>
  <form @submit.prevent="handleSubmit" class="relative w-full mb-4">
    <input
      v-model="formData.search"
      type="search"
      class="w-full h-10 pl-2 pr-[48px] text-base outline-none bg-transparent border border-solid border-accent-green rounded-[10px] desk:h-[50px]"
    />
    <div class="absolute top-[4px] right-[4px] center gap-4 desk:gap-2">
      <button
        type="submit"
        class="group w-10 h-8 flex justify-center items-center rounded-lg bg-accent-green desk:w-14 desk:h-[42px]"
      >
        <i
          class="pi pi-search"
          style="font-size: 1.05rem; color: currentColor"
        ></i>
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { FIRST_PAGE } from "@/constants";

export default {
  name: "SearchForm",
  async setup() {
    const router = useRouter();
    const route = useRoute();

    const formData = ref({ search: route.query.search || "" });

    // Update the query parameters and navigate
    const handleSubmit = () => {
      const query = { search: formData.value.search, page: FIRST_PAGE };
      router.push({ query });
    };

    return {
      formData,
      handleSubmit,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
