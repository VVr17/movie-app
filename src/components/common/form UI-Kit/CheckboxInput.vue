<template>
  <!--     :class="{
      'text-accent-green': isSelected,
      'text-white': !isSelected,
    }" -->
  <label
    class="relative flex items-center justify-between py-2 transition duration-300 cursor-pointer hover:text-yellow-light focus-within:text-yellow-light"
  >
    <input
      type="checkbox"
      v-model="checked"
      :value="id"
      class="absolute transition duration-300 opacity-0"
    />
    <span>{{ name }}</span>
    <div
      class="inline-flex items-center justify-center min-w-[24px] w-6 h-6 border rounded-full transition duration-300"
    >
      <i
        v-if="false"
        class="pi pi-check translate-x-[4px] -translate-y-[4px]"
        style="font-size: 1.3rem; color: currentColor"
      ></i>
    </div>
  </label>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "CheckboxInput",
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    modelValue: {
      type: Array,
    },
    setup(props, { emit }) {
      const checked = ref(props.modelValue.includes(props.id));

      // Watch for changes in the parent's modelValue and update the checked state accordingly
      watch(
        () => props.modelValue,
        (newValue) => {
          checked.value = newValue.includes(props.id);
        }
      );

      // Watch for changes in the local checked state and emit an update to the parent
      watch(
        () => checked.value,
        (newValue) => {
          emit(
            "update:modelValue",
            newValue
              ? [...props.modelValue, props.id]
              : props.modelValue.filter((el) => el !== props.id)
          );
        }
      );

      return { checked };
    },
  },
};
</script>

<style lang="scss" scoped></style>
