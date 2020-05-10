<template>
  <div class="content">
    <cover />
    <videostory />
    <stories />
    <instagram />
    <share />
    <statistics />
    <about />
    <footer-x />
  </div>
</template>

<script>
import About from '@/components/About';
import Share from '@/components/Share';
import Cover from '@/components/Cover';
import Video from '@/components/Video';
import Stories from '@/components/Stories';
import Instagram from '@/components/Instagram';
import Statistics from '@/components/Statistics';
import Footer from '@/components/Footer';
export default {
  components: {
    instagram: Instagram,
    about: About,
    share: Share,
    cover: Cover,
    videostory: Video,
    stories: Stories,
    statistics: Statistics,
    'footer-x': Footer,
  },
};
</script>

<style scoped>
</style>
