<template>
  <div class="content">
    <cover />
    <stories />
    <share />
    <about />
  </div>
</template>

<script>
import About from '@/components/About';
import Share from '@/components/Share';
import Cover from '@/components/Cover';
import Stories from '@/components/Stories';
export default {
  components: {
    about: About,
    share: Share,
    cover: Cover,
    stories: Stories,
  },
};
</script>

<style scoped>
</style>
