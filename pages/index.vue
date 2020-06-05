<template>
  <div class="content">
    <cover />
    <videostory />
    <banner :title="blockBannerSml.title" />
    <relevant />
    <stories />
    <banner :title="blockBannerBg.title" />
    <instagram />
    <share />
    <statistics />
    <about />
    <popup v-if="popupContactsShown" @closeClick="toggleContactsPopup">
      <form-contacts />
    </popup>
  </div>
</template>

<script>
import About from '@/components/About';
import Share from '@/components/Share';
import Cover from '@/components/Cover';
import Video from '@/components/Video';
import Relevant from '@/components/ui/Relevant';
import Stories from '@/components/Stories';
import Instagram from '@/components/Instagram';
import Statistics from '@/components/Statistics';
import Banner from '@/components/Banner';
import Popup from '@/components/Popup';
import FormContacts from '@/components/FormContacts';
export default {
  components: {
    instagram: Instagram,
    about: About,
    share: Share,
    cover: Cover,
    videostory: Video,
    relevant: Relevant,
    stories: Stories,
    statistics: Statistics,
    banner: Banner,
    popup: Popup,
    'form-contacts': FormContacts,
  },
  computed: {
    popupContactsShown() {
      return this.$store.getters['popup/getPopupContactsShown'];
    },
    blockArr() {
      return this.$store.getters['blocks/getBlockArr'];
    },
    blockBannerSml() {
      return this.blockArr.find(el => el.block === 'note-1');
    },
    blockBannerBg() {
      return this.blockArr.find(el => el.block === 'note-2');
    },
  },
  methods: {
    toggleContactsPopup() {
      this.$store.commit('error/errorFalse');
      this.$store.commit('popup/toggleContactsPopup');
    },
  },
  data() {
    return {
      metas: {
        meta_title:
          'РАКЛЕЧИТСЯ.РФ — истории людей, победивших рак, но не свои привычки',
        meta_description:
          'Информационный проект Фонда Хабенского. Есть вещи, которые не лечатся. В отличие от рака. #раклечится Вместе мы изменим отношение людей!  Какая привычка или фобия не лечится у вас? #этонелечится',
        og_image: '/Pozner_1920_1080.jpg',
        keywords: 'РАКЛЕЧИТСЯ.РФ, раклечится, этонелечится',
      },
    };
  },
  head() {
    if (this.metas) {
      return {
        title: this.metas.meta_title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: this.metas.meta_description || '',
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.metas.meta_keywords || '',
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.metas.meta_title || '',
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.metas.meta_description || '',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.metas.og_image || '',
          },
        ],
      };
    }
  },
};
</script>

<style scoped></style>
