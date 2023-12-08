<template>
  <form @submit.prevent="handleSubmit" class="relative w-full mb-4">
    <input
      v-model="search"
      type="search"
      class="w-full pl-2 pr-12 text-base bg-transparent border border-solid rounded-lg outline-none h-11 border-accent-green"
    />
    <div class="absolute top-[4px] right-[4px] center gap-4 desk:gap-2">
      <button
        type="submit"
        class="flex items-center justify-center w-10 rounded-lg group h-9 bg-accent-green desk:w-14"
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
