<template>
  <img :src="url" class="insta__image" />
</template>

<script>
export default {
  props: {
    url: String,
  },
};
</script>

<style scoped>
.insta__image {
  /* Temp */
  object-fit: cover;
  height: 195px;
  width: 195px;
  background: #ededed;
}
</style>
