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
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: #613a93;
  margin: 0 auto;
  height: 690px;
}

.cover__heading {
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  color: #fff;
  margin: auto;
}
</style>
