<template>
  <ul class="flex flex-col gap-2 text-base">
    <li v-for="option in options" :key="option.id">
      <label
        class="relative flex items-center justify-between py-2 transition duration-300 cursor-pointer hover:text-yellow-light focus-within:text-yellow-light"
        :class="{
          'text-accent-green': isSelected(option.id),
          'text-white': !isSelected(option.id),
        }"
      >
        <input
          type="checkbox"
          class="absolute transition duration-300 opacity-0"
          :value="option.id"
          :checked="isSelected(option.id)"
          v-on:input="handleChange($event.target)"
        />
        <span>{{ option.name }}</span>
        <div
          class="inline-flex items-center justify-center min-w-[24px] w-6 h-6 border rounded-full transition duration-300"
        >
          <i
            v-if="isSelected(option.id)"
            class="pi pi-check translate-x-[4px] -translate-y-[4px]"
            style="font-size: 1.3rem; color: currentColor"
          />
        </div>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "OptionList",
  props: {
    options: { type: Array },
    modelValue: { type: Array },
  },
  setup(props, { emit }) {
    const isSelected = (id) => props.modelValue.includes(id.toString());

    const handleChange = ({ checked, value }) => {
      const chosenGenres = [...props.modelValue];

      if (checked) {
        chosenGenres.push(value);
      } else {
        chosenGenres.splice(chosenGenres.indexOf(value), 1);
      }

      emit("update:modelValue", chosenGenres);
    };

    return { isSelected, handleChange };
  },
};
</script>
