<template>
  <div
    :class="['mobile-button', { 'mobile-button_type_close': isMenuOpened }]"
    @click="toggleMobile"
  ></div>
</template>

<script>
export default {
  computed: {
    isMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  methods: {
    toggleMobile() {
      this.$store.commit('mobile-menu/toggleMobileMenu');
    },
  },
};
</script>

<style scoped>
.mobile-button {
  width: 32px;
  height: 32px;
  background-image: url(/burger.svg);
  background-position: center;
  background-size: cover;
}

.mobile-button.mobile-button_type_close {
  background-image: url(/button-close.svg);
}

@media screen and (max-width: 700px) {
  .mobile-button {
    width: 26px;
    height: 26px;
  }
}
</style>
