<template>
  <div class="content">
    <instagram />
    <share />
    <statistics />
    <about />
  </div>
</template>

<script>
import About from '@/components/About';
import Share from '@/components/Share';
import Instagram from '@/components/Instagram';
import Statistics from '@/components/Statistics';
export default {
  components: {
    instagram: Instagram,
    about: About,
    share: Share,
    statistics: Statistics,
  },
};
</script>

<style scoped>
</style>
