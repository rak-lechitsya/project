<template>
  <div class="content">
    <share />
    <about />
  </div>
</template>

<script>
import About from '@/components/About';
import Share from '@/components/Share';
export default {
  components: {
    about: About,
    share: Share,
  },
};
</script>

<style scoped>
</style>
