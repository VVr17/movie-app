<template>
  <li class="relative after-gray-line after:-bottom-6">
    <p class="mb-4 text-xl font-normal text-accent-green">
      {{ title }}
    </p>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "FilterItem",
  props: { title: { type: String } },
};
</script>
