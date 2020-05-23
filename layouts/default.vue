<template>
  <div>
    <mobile-menu class="mobile-menu" />
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
import MobileMenu from '@/components/ui/MobileMenu';
export default {
  components: {
    'my-header': Header,
    popup: Popup,
    'my-footer': Footer,
    'my-form': Form,
    social: Social,
    'mobile-menu': MobileMenu,
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

.mobile-menu {
  display: none;
}

@media (max-width: 1000px) {
  .mobile-menu {
    display: block;
  }
}
</style>
