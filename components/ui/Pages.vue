<template>
    <nav class="pages">
       <nuxt-link to="/stories" :class="['pages__menu', {'pages__menu_is_not-active': $route.path !== '/stories'}]">Первая</nuxt-link>
        <nuxt-link to="/stories" :class="['pages__polygon_back', {'pages__menu_is_not-active': $route.path !== '/stories'}]"></nuxt-link>
        <nuxt-link to="/stories" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories'}]">1</nuxt-link>
        <nuxt-link to="/stories/2" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories/2'}]">2</nuxt-link>
        <nuxt-link to="/stories/3" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories/3'}]">3</nuxt-link>
        <nuxt-link to="/stories/4" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories/4'}]">4</nuxt-link>
        <nuxt-link to="/stories/5" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories/5'}]">5</nuxt-link>
        <nuxt-link to="/stories/6" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories/6'}]">6</nuxt-link>
        <nuxt-link to="/stories/7" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories/7'}]">7</nuxt-link>
        <nuxt-link to="/stories" :class="['pages__polygon', {'pages__menu_is_not-active': $route.path !== '/stories'}]"></nuxt-link>
        <nuxt-link to="/stories" :class="['pages__menu', {'pages__menu_is_not-active': $route.path !== '/stories'}]">Последняя</nuxt-link>
    </nav>
</template>

<script>

export default {
    components: {

    }
}
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
  color: #000000;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1250px) {
  .pages__menu  {
  font-size: 15px;
  line-height: 18px;
  }
}

.pages__menu_is_not-active {
  color: #A2A2A2;
}

.pages__polygon_back {
    width: 58px;
    height: 58px;
    background-image: url(/polygon.svg);
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
}

@media (max-width: 1350px) {
  .pages__polygon_back  {
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 1250px) {
  .pages__polygon_back  {
    width: 50px;
    height: 50px;
  }
}

.pages__polygon {
    width: 58px;
    height: 58px;
    background-image: url(/polygon__17.svg);
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
}

@media (max-width: 1350px) {
  .pages__polygon  {
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 1250px) {
  .pages__polygon  {
    width: 50px;
    height: 50px;
  }
}



.page {
  width: 58px;
  height: 58px;
  background: #F4F4F4;
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

@media (max-width: 1350px) {
  .page  {
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 1250px) {
  .page  {
    width: 50px;
    height: 50px;
  }
}

.pages__link:last-child {
    margin-right: 0;
}

.pages__link_is_not-active {
  background: #FBFBFB;
  }
</style>