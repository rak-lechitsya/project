<template>
    <nav class="menu">
        <nuxt-link class = "menu__link" to="/">Главная</nuxt-link>
        <nuxt-link class = "menu__link" to="/stories">Истории</nuxt-link>
    </nav>
</template>

<script>
export default {}
</script>


<style scoped>
  .menu {
    display: flex;
  }

  .menu__link {
    color: black;
    text-decoration: none;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    margin-right: 40px;
    transition: opacity .3s;
  }

  .menu__link:hover {
    opacity: .5;
  }

  .menu__link:last-child {
    margin-right: 0;
  }
</style>