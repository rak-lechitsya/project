<template>
  <img class="social-image" :src="src" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
  },
};
</script>

<style scoped></style>
