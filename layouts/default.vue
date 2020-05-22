<template>
  <div>
    <my-header />
    <nuxt />
    <my-footer />
    <popup v-if="popupStoryShown" @closeClick="toggleStoryPopup">
      <my-form title="Шаг 1 из 12" subtitle="Как вас зовут?" />
    </popup>
    <popup v-if="popupSocialShown" @closeClick="toggleSocialPopup">
      <social />
    </popup>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import Form from '@/components/Form';
import Social from '@/components/Social';
export default {
  components: {
    'my-header': Header,
    popup: Popup,
    'my-footer': Footer,
    'my-form': Form,
    social: Social,
  },
  computed: {
    popupStoryShown() {
      return this.$store.getters['popup/getPopupStoryShown'];
    },
    popupSocialShown() {
      return this.$store.getters['popup/getPopupSocialShown'];
    },
  },
  methods: {
    toggleStoryPopup() {
      this.$store.commit('popup/toggleStoryPopup');
    },
    toggleSocialPopup() {
      this.$store.commit('popup/toggleSocialPopup');
    },
  },
};
</script>

<style>
html {
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
