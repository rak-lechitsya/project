<template>
  <header class="main-header">
    <h3 class="main-header__logo"> Проект Благотворительного Фонда Константина Хабенского </h3>
    <main-menu @btnClick="$emit('btnClick')" />
  </header>
</template>

<script>
import Menu from '@/components/ui/Menu'
export default {
  components: {
    'main-menu': Menu,
  }
};
</script>

<style scoped>
  .main-header {
    max-width: 1440px;
    margin: 0 auto;
    padding: 18px 60px 18px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 76px;
  }

  .main-header__logo {
    max-width: 340px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: black;
  }
</style>
