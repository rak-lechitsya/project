<template>
  <section class="error">
    <div class="error__404">
      <h1 class="error__title">404</h1>
      <p class="error__subtitle">Страница не найдена.</p>
    </div>
    <nuxt-link class="error__link" to="/">Перейти на главную.</nuxt-link>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 76px);
}

.error__title {
  margin: 0;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  line-height: 1.2;
}

@media screen and (max-width: 425px) {
  .error__title {
    font-size: 72px;
  }
}

.error__subtitle {
  margin: 10px 0 0;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.2;
}

.error__link {
  margin: 0;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  transition: 0.25s;
}

@media screen and (max-width: 1280px) {
  .error__subtitle,
  .error__link {
    font-size: 16px;
  }
}

@media screen and (max-width: 425px) {
  .error__subtitle,
  .error__link {
    font-size: 13px;
  }
}

.error__link:hover {
  opacity: 0.7;
}
</style>
