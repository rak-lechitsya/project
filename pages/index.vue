<template>
  <div class="content">
    <cover />
    <stories />
    <instagram />
    <share />
    <statistics />
    <about />
  </div>
</template>

<script>
import About from '@/components/About';
import Share from '@/components/Share';
import Cover from '@/components/Cover';
import Stories from '@/components/Stories';
import Instagram from '@/components/Instagram';
import Statistics from '@/components/Statistics';
export default {
  components: {
    instagram: Instagram,
    about: About,
    share: Share,
    cover: Cover,
    stories: Stories,
    statistics: Statistics,
  },
};
</script>

<style scoped>
</style>
