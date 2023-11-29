<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-modalBg backdrop-blur-sm z-[9999]"
    @click.self="closeModal"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppBackdrop",
  setup(props, context) {
    const closeModal = () => context.emit("close");
    return { closeModal };
  },
};
</script>
