<template>
  <p class="subtitle">{{ subtitle }}</p>
</template>

<script>
export default {
  props: ['subtitle'],
};
</script>

<style scoped>
.subtitle {
  max-width: 340px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
</style>
