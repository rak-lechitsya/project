<template>
  <nav class="menu">
    <nuxt-link
      to="/"
      :class="[
        'menu__link',
        { 'menu__link_is_not-active': $route.path !== '/' },
      ]"
      >Главная</nuxt-link
    >
    <nuxt-link
      to="/stories"
      :class="[
        'menu__link',
        { 'menu__link_is_not-active': $route.path !== '/stories' },
      ]"
      >Истории</nuxt-link
    >
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  display: flex;
}

.menu__link {
  color: black;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-right: 40px;
  text-decoration: underline;
  cursor: default;
  transition: opacity 0.3s;
}

.menu__link_is_not-active:hover {
  opacity: 0.8;
}

.menu__link:last-child {
  margin-right: 0;
}

.menu__link_is_not-active {
  text-decoration: none;
  cursor: pointer;
}
</style>
