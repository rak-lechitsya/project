<template>
    <nav class="main-header__menu">
        <nuxt-link to="/">Главная</nuxt-link>
        <a href="" target="blanc">Истории</a>
        <header-button @btnClick="$emit('btnClick')">Рассказать историю</header-button>
  </nav>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    'header-button': Button,
  }
}
</script>


<style scoped>
    a {
        transition: opacity .8s;
    }
</style>