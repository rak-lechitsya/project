<template>
  <header class="main-header">
    <header-content class="main-header__content">
      <nuxt-link to="/" class="main-header__logo-container">
        <h3 class="main-header__logo">
          Проект Благотворительного Фонда Константина Хабенского
        </h3>
      </nuxt-link>
      <div class="main-header__container">
        <main-menu class="main-header__menu" />
        <header-button
          class="main-header__button"
          :text="textButtonMenu"
          @btnClick="toggleStoryPopup"
        />
      </div>
    </header-content>
  </header>
</template>

<script>
import Content from '@/components/ui/Content';
import Menu from '@/components/ui/Menu';
import Button from '@/components/ui/Button';
export default {
  components: {
    'header-content': Content,
    'main-menu': Menu,
    'header-button': Button,
  },
  data() {
    return {
      textButtonMenu: 'Рассказать историю',
    };
  },
  methods: {
    toggleStoryPopup() {
      this.$store.commit('popup/toggleStoryPopup');
    },
  },
};
</script>

<style scoped>
.main-header {
  margin: 0 auto;
  padding: 18px 60px 18px;
  background-color: white;
  align-items: center;
  min-height: 76px;
  border-bottom: 1px solid #efefef;
}

.main-header__content {
  display: flex;
  justify-content: space-between;
}

.main-header__logo {
  width: 290px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: black;
}

.main-header__logo-container {
  text-decoration: none;
}

.main-header__container {
  display: flex;
  align-items: center;
}

.main-header__button {
  margin-left: 40px;
  background-color: white;
  color: black;
  width: 182px;
  height: 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  transition: opacity 0.3s;
}

.main-header__button:hover {
  opacity: 0.8;
}

@media screen and (max-width: 1350px) {
  .main-header {
    padding: 18px 50px 18px;
  }

  .main-header__logo {
    line-height: 18px;
  }

  .main-header__button {
    width: 162px;
    font-size: 16px;
  }
}

@media screen and (max-width: 1250px) {
  .main-header__button {
    margin-left: 30px;
  }

  .main-header {
    min-height: 36px;
  }
}

@media screen and (max-width: 700px) {
  .main-header {
    padding: 18px 15px 18px;
    min-height: 28px;
  }

  .main-header__logo {
    width: 216px;
    font-size: 12px;
    line-height: 14px;
  }

  .main-header__container {
    display: none;
  }
}
</style>
