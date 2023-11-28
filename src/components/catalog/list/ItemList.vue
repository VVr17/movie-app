<template>
  <ul
    class="grid grid-cols-1 tab:grid-cols-3 desk:grid-cols-4 bg-main-dark-gray"
  >
    <li
      v-for="item in items"
      :key="item.id"
      class="flex transition duration-300 border border-transparent hover:border-gray hover:text-yellow-light"
    >
      <ItemCard :item="item" />
    </li>
  </ul>
</template>

<script>
import ItemCard from "./ItemCard.vue";

export default {
  name: "ItemList",
  props: {
    items: { type: Array },
  },
  components: { ItemCard },
};
</script>

<style lang="scss" scoped></style>
