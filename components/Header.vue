<template>
  <header class="main-header">
    <h3 class="main-header__logo"> Проект Благотворительного Фонда Константина Хабенского </h3>
    <main-menu /> 
  </header>  
</template>

<script>
import Menu from '@/components/Menu'
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
    color: black;
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

  }

  .main-header /deep/ a {
    color: black;
    text-decoration: none;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    margin: 0 40px 0 0;

  }

  .main-header /deep/ :last-of-type {
    margin-right: 0;
  }

  .main-header /deep/ a:hover {
    text-decoration: underline;
  }

</style>
