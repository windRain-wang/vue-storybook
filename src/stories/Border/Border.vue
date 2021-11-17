<template>
  <div class="transparent-border">半透明边框</div>
</template>

<script>
export default {};
</script>

<style>
.transparent-border {
  border: 10px solid hsla(0, 0%, 100%, 0.5);
  background: white;
  background-clip: padding-box;
}
</style>
