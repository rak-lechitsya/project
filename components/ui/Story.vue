<template>
  <div class="story" @click="$emit('storyClick')">
    <img
      :src="`https://strapi.kruzhok.io${url}`"
      :alt="author"
      class="story__image"
    />
    <h2 class="story__name">{{ author }}</h2>
    <p class="story__content">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: ['url', 'author', 'title'],
};
</script>

<style scoped>
.story {
  max-width: 300px;
  display: flex;
  flex-flow: column;
  cursor: pointer;
  transition: all 0.4s;
}

.story__image {
  /* Temp */
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.story__name {
  padding: 20px 0 14px 0;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  color: #000;
}

.story__content {
  max-width: 250px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666;
}

.story:hover {
  transform: translate(0, -5px);
}

@media (max-width: 1350px) {
  .story__image {
    width: 265px;
    height: 265px;
  }
}

@media (max-width: 1250px) {
  .story__content {
    font-size: 13px;
    line-height: 16px;
    max-width: 190px;
  }

  .story__name {
    padding: 16px 0 16px 0;
    font-size: 18px;
    line-height: 22px;
  }

  .story__image {
    width: 208px;
    height: 208px;
  }
}

@media (max-width: 1000px) {
  .story__name {
    padding: 16px 0 16px 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }

  .story__content {
    font-size: 13px;
    line-height: 16px;
    max-width: 200px;
  }

  .story__image {
    width: 216px;
    height: 216px;
  }
}

@media (max-width: 700px) {
  .story__image {
    width: 290px;
    height: 290px;
  }

  .story__content {
    max-width: 290px;
  }
}
</style>
