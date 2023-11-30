<template>
  <button
    @click="goBack"
    class="flex items-center justify-center py-2 mb-2 text-base text-gray hover:text-yellow-light"
  >
    <i
      class="pi pi-arrow-left"
      style="font-size: 1rem; color: currentColor"
    ></i>
  </button>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "BackButton",
  setup() {
    const router = useRouter();

    const goBack = () => router.back();

    return { goBack };
  },
};
</script>
