<template>
  <nav class="pages">
    <nuxt-link
      to="/stories"
      :class="[
        'pages__menu',
        { 'pages__menu_is_not-active': $route.path !== '/stories' },
      ]"
      >Первая</nuxt-link
    >
    <nuxt-link
      to="/stories"
      :class="[
        'pages__polygon_back',
        { 'pages__menu_is_not-active': $route.path !== '/stories' },
      ]"
    ></nuxt-link>
    <nuxt-link
      to="/stories"
      :class="[
        'page',
        { 'pages__link_is_not-active': $route.path !== '/stories' },
      ]"
      >1</nuxt-link
    >
    <nuxt-link
      to="/stories/2"
      :class="[
        'page',
        { 'pages__link_is_not-active': $route.path !== '/stories/2' },
      ]"
      >2</nuxt-link
    >
    <nuxt-link
      to="/stories/3"
      :class="[
        'page',
        { 'pages__link_is_not-active': $route.path !== '/stories/3' },
      ]"
      >3</nuxt-link
    >
    <nuxt-link
      to="/stories/4"
      :class="[
        'page page_invisible',
        { 'pages__link_is_not-active': $route.path !== '/stories/4' },
      ]"
      >4</nuxt-link
    >
    <nuxt-link
      to="/stories/5"
      :class="[
        'page page_invisible',
        { 'pages__link_is_not-active': $route.path !== '/stories/5' },
      ]"
      >5</nuxt-link
    >
    <nuxt-link
      to="/stories/6"
      :class="[
        'page page_invisible',
        { 'pages__link_is_not-active': $route.path !== '/stories/6' },
      ]"
      >6</nuxt-link
    >
    <nuxt-link
      to="/stories/7"
      :class="[
        'page page_invisible',
        { 'pages__link_is_not-active': $route.path !== '/stories/7' },
      ]"
      >7</nuxt-link
    >
    <nuxt-link
      to="/stories"
      :class="[
        'pages__polygon',
        { 'pages__menu_is_not-active': $route.path !== '/stories' },
      ]"
    ></nuxt-link>
    <nuxt-link
      to="/stories"
      :class="[
        'pages__menu',
        { 'pages__menu_is_not-active': $route.path !== '/stories' },
      ]"
      >Последняя</nuxt-link
    >
  </nav>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.pages {
  display: flex;
}

.pages__menu {
  margin-right: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pages__menu_is_not-active {
  color: #a2a2a2;
}

.pages__polygon_back {
  width: 58px;
  height: 58px;
  background-image: url(/polygon.svg);
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.pages__polygon {
  width: 58px;
  height: 58px;
  background-image: url(/polygon__17.svg);
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.page {
  width: 58px;
  height: 58px;
  background: #f4f4f4;
  margin-right: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pages__link:last-child {
  margin-right: 0;
}

.pages__link_is_not-active {
  background: #fbfbfb;
}

@media (max-width: 1350px) {
  .page {
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 1350px) {
  .pages__polygon {
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 1350px) {
  .pages__polygon_back {
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 1250px) {
  .pages__polygon_back {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 1250px) {
  .pages__polygon {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 1250px) {
  .page {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 1250px) {
  .pages__menu {
    font-size: 15px;
    line-height: 18px;
  }
}

@media (max-width: 700px) {
  .pages__menu {
    order: 2;
    margin-top: 34px;
    margin-left: 15px;
  }
}

@media (max-width: 700px) {
  .page_invisible {
    display: none;
  }
}
</style>
