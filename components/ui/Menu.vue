<template>
    <nav class="menu">
        <nuxt-link class = "menu__element" to="/">Главная</nuxt-link>
        <nuxt-link class = "menu__element" to="/stories">Истории</nuxt-link>
        <header-button class = "menu__element menu__element_button" :text = 'text' @btnClick="$emit('btnClick')" />
    </nav>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    'header-button': Button,
  },

  data(){
    return {
      text: 'Рассказать историю'
    }
  }
}
</script>


<style scoped>
  .menu {
    display: flex;
  }

  .menu__element {
    color: black;
    text-decoration: none;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    margin-right: 40px;
    transition: opacity .5s;
  }

  .menu__element:hover {
    opacity: .5;
  }

  .menu__element:last-child {
    margin-right: 0;
  }

  .menu__element_button /deep/ button {
    background-color: white;
    color: black;
    width: 182px;
    height: 24px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
  }
</style>