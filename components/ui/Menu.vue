<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">
        <nuxt-link
          to="/"
          :class="[
            'menu__link',
            { 'menu__link_is_not-active': $route.path !== '/' },
          ]"
          >Главная</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link
          to="/stories"
          :class="[
            'menu__link',
            { 'menu__link_is_not-active': $route.path !== '/stories' },
          ]"
          >Истории</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu__list {
  list-style-type: none;
  display: flex;
}

.menu__item {
  margin-right: 40px;
}

.menu__link {
  color: black;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: underline;
  transition: opacity 0.3s;
}

.menu__link_is_not-active:hover {
  opacity: 0.8;
}

.menu__item:last-child {
  margin-right: 0;
}

.menu__link_is_not-active {
  text-decoration: none;
}

@media screen and (max-width: 1350px) {
  .menu__link {
    font-size: 16px;
  }
}

@media screen and (max-width: 1250px) {
  .menu__link {
    margin-right: 30px;
  }
}
</style>
