<template>
  <div class="content">
    <cover />
    <videostory />
    <banner :text="textSml" />
    <stories />
    <banner :text="textBg" />
    <instagram />
    <share @btnClick="popupChange" @btnClickContacts="popupChangeContacts" />
    <statistics />
    <about />
    <popup v-if="popupShown" @closeClick="popupChange">
      <my-form title="Шаг 1 из 12" subtitle="Как вас зовут?" />
    </popup>
    <popup v-if="popupContacts" @closeClick="popupChangeContacts">
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
import Form from '@/components/Form';
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
    'my-form': Form,
    'form-contacts': FormContacts,
  },

  methods: {
    popupChange() {
      this.popupShown = !this.popupShown;
    },
    popupChangeContacts() {
      this.popupContacts = !this.popupContacts;
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
