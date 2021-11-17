<template>
  <div class="text-content">
    {{ content }}
    <div class=""></div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.text-content {
  position: relative;
}
</style>
