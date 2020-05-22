<template>
  <div class="content">
    <cover />
    <videostory />
    <banner :text="textSml" />
    <stories />
    <banner :text="textBg" />
    <instagram />
    <share />
    <statistics />
    <about />
    <popup v-if="popupContactsShown" @closeClick="showContactsPopup">
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
import Banner from '@/components/ui/Banner';
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
  },

  methods: {
    showContactsPopup() {
      this.$store.commit('popup/toggleContactsPopup');
    },
  },

  data() {
    return {
      popupShown: false,
      popupContacts: false,
      textSml: 'И в отличии от рака,',
      textBg: 'рассказывайте ваши истории в инстаграм',
    };
  },
};
</script>

<style scoped></style>
