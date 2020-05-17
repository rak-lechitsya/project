<template>
    <nav class="pages">
        <nuxt-link to="/stories" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories'}]">1</nuxt-link>
        <nuxt-link to="/stories/2" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories/2'}]">2</nuxt-link>
        <nuxt-link to="/stories/3" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories/3'}]">3</nuxt-link>
        <nuxt-link to="/stories/4" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories/4'}]">4</nuxt-link>
        <nuxt-link to="/stories/5" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories/5'}]">5</nuxt-link>
        <nuxt-link to="/stories/6" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories/6'}]">6</nuxt-link>
        <nuxt-link to="/stories/7" :class="['page', {'pages__link_is_not-active': $route.path !== '/stories/7'}]">7</nuxt-link>
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

.pages__link:last-child {
    margin-right: 0;
}

.pages__link_is_not-active {
  background: #FBFBFB;
  }
</style>