<template>
  <div class="content">
    <cover />
    <share />
    <about />
  </div>
</template>

<script>
import About from '@/components/About';
import Share from '@/components/Share';
import Cover from '@/components/Cover';
export default {
  components: {
    about: About,
    share: Share,
    cover: Cover,
  },
};
</script>

<style scoped>
</style>
