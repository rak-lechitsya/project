<template>
  <p class="title">{{ title }}</p>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
.title {
  max-width: 400px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
}
</style>
