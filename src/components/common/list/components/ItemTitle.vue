<template>
  <router-link
    :to="{ name, params: { id } }"
    class="text-xs text-accent-green mb-2 font-medium tab:text-sm flex flex-col hover:text-yellow-light focus:text-yellow-light transition duration-300 max-w-[141px] mob:max-w-[171px] tab:max-w-[189px] desk:max-w-[240px]"
  >
    <span className="first-letter:capitalize"> {{ title }}</span>
  </router-link>
</template>

<script>
export default {
  name: "ItemTitle",
  props: {
    name: { type: String },
    id: { type: Number },
    title: { type: String },
  },
};
</script>
