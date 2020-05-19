<template>
  <header class="main-header">
    <header-content class="main-header__content">
      <h3 class="main-header__logo">
        Проект Благотворительного Фонда Константина Хабенского
      </h3>
      <div class="main-header__container">
        <main-menu
          class="main-header__menu"
          @btnClick="$emit('btnClick')"
        ></main-menu>
        <header-button
          class="main-header__button"
          :text="textButtonMenu"
          @btnClick="$emit('btnClick')"
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
};
</script>

<style scoped>
.main-header {
  margin: 0 auto;
  padding: 18px 60px 18px;
  background-color: white;
  align-items: center;
  min-height: 76px;
}

.main-header__content {
  display: flex;
  justify-content: space-between;
}

.main-header__logo {
  max-width: 340px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: black;
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
</style>
