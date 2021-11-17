<template>
  <button class="btn" :class="type">Yes!</button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style scoped>
.btn {
  /* @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded; */
  padding: 0.3em 0.8em;
  /* border: 1px solid #446d88; */
  border: 1px solid rgba(0, 0, 0, 0.1);

  /* background: #58a linear-gradient(#77a0bb, #58a); */
  background: #58a linear-gradient(hsla(0, 0%, 100%, 0.2), transparent);

  border-radius: 0.2em;
  box-shadow: 0 0.05em 0.25em rgba(0, 0, 0, 0.5);
  color: white;
  text-shadow: 0-0.05em 0.05em rgba(0, 0, 0, 0.5);
  font-size: 125%;
  line-height: 1.5;
}
.btn.primary {
  @apply bg-blue-500;
}
</style>
