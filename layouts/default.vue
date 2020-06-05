<template>
  <div v-if="!this.loading">
    <mobile-menu v-if="isMobileMenuOpened" class="mobile-menu" />
    <my-header />
    <nuxt />
    <my-footer />
    <popup v-if="popupStoryShown" @closeClick="toggleStoryPopup">
      <my-form />
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
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  methods: {
    toggleStoryPopup() {
      this.$store.commit('error/errorFalse');
      this.$store.commit('popup/toggleStoryPopup');
    },
    toggleSocialPopup() {
      this.$store.commit('popup/toggleSocialPopup');
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  async created() {
    await this.$store.dispatch('stories/fetchStories');
    await this.$store.dispatch('blocks/fetchBlockArr');
    await this.$store.dispatch('stats/fetchStatsArr');
    await this.$store.dispatch('videos/fetchVideos');
    await this.$store.dispatch('instagram/GET_PHOTOS');
    console.log('loading...');
    this.loading = false;
    console.log('finished loading');
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
