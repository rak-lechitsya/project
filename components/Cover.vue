<template>
  <section class="cover">
    <cover-heading class="cover__heading" />
  </section>
</template>

<script>
import Heading from '@/components/ui/Heading';
export default {
  components: {
    'cover-heading': Heading,
  },
};
</script>

<style scoped>
.cover {
  display: flex;
  max-width: 1440px;
  background-color: #613a93;
  margin: 0 auto;
  height: 689px;
}

.cover__heading {
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  margin: auto;
}
</style>
