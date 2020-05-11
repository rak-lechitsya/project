<template>
  <div class="content">
    <cover />
    <videostory />
    <banner :text="textSml" />
    <stories />
    <banner :text="textBg"/>
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
import Video from '@/components/Video';
import Stories from '@/components/Stories';
import Instagram from '@/components/Instagram';
import Statistics from '@/components/Statistics';
import Banner from '@/components/ui/Banner'
export default {
  components: {
    instagram: Instagram,
    about: About,
    share: Share,
    cover: Cover,
    videostory: Video,
    stories: Stories,
    statistics: Statistics,
    banner: Banner,
  },
  
  data() {
    return {
      textSml: 'И в отличии от рака,',
      textBg: 'рассказывайте ваши истории в инстаграм'
    }
  }
};
</script>

<style scoped></style>