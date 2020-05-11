<template>
    <nav class="main-header__menu">
        <nuxt-link to="/">Главная</nuxt-link>
        <nuxt-link to="/all-stories" target="blanc">Истории</nuxt-link>
        <a href="" target="blanc">Рассказать историю</a>
  </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    a {
        transition: opacity .8s;
    }
</style>