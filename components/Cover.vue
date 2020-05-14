<template>
  <section class="cover">
    <h1 class="cover__heading">#раклечится</h1>
    <div class="cover__arrow"></div>
  </section>
</template>

<script>
  export default {};
</script>

<style scoped>
.cover {
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: #613a93;
  margin: 0 auto;
  height: 690px;
}

.cover__heading {
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  color: #fff;
  margin: auto;
  text-transform: uppercase;
}

.cover__arrow {
  position: absolute;
  width: 36px;
  height: 12px;
  left: 50%;
  bottom: 40px;
  background-image: url('/cover-row.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transform: translateX(-50%);
}
</style>
