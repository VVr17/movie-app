<template>
  <LoadingOverlay
    :active="true"
    :can-cancel="false"
    color="#00CF78"
    background-color="rgba(0, 0, 0, 0.63)"
  />
</template>

<script>
import LoadingOverlay from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

export default {
  name: "LoadingSpinner",
  components: { LoadingOverlay },
};
</script>
