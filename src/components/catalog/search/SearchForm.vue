<template>
  <form @submit.prevent="handleSubmit" class="relative w-full mb-4">
    <input
      v-model="search"
      type="search"
      class="w-full h-11 pl-2 pr-12 text-base outline-none bg-transparent border border-solid border-accent-green rounded-lg"
    />
    <div class="absolute top-[4px] right-[4px] center gap-4 desk:gap-2">
      <button
        type="submit"
        class="group w-10 h-9 flex justify-center items-center rounded-lg bg-accent-green desk:w-14"
      >
        <i
          class="pi pi-search"
          style="font-size: 1.05rem; color: currentColor"
        />
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "SearchForm",
  async setup() {
    const router = useRouter();
    const route = useRoute();
    const search = ref(route.query.search || "");

    // Update the query parameters and navigate
    const handleSubmit = () => {
      const query = { ...(search.value && { search: search.value }) };
      router.push({ query });
    };

    return {
      search,
      handleSubmit,
    };
  },
  components: {},
};
</script>
