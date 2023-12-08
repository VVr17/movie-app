<template>
  <ul
    class="grid grid-cols-2 tab:grid-cols-5 desk:grid-cols-6 bg-main-dark-gray"
  >
    <li
      v-for="item in items"
      :key="item.id"
      class="flex transition duration-300 border border-transparent hover:border-gray hover:text-yellow-light"
    >
      <ItemCard :item="item" :category="category" />
    </li>
  </ul>
</template>

<script>
import ItemCard from "./ItemCard.vue";

export default {
  name: "ItemList",
  props: {
    items: { type: Array },
    category: { type: String },
  },
  components: { ItemCard },
};
</script>
