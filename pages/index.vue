<template>
  <div class="content">
    <cover />
    <videostory />
    <banner :title="blockBannerSml.title" />
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
};
</script>

<style scoped></style>
