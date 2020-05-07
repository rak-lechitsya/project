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
  margin-top: 70px;
}
</style>
