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

<style scoped></style>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
