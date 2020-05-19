<template>
  <div class="story">
    <img :src="url" :alt="name" class="story__image">
    <h2 class="story__name">{{name}}</h2>
    <p class="story__content">{{content}}</p>
  </div>
</template>

<script>
  export default {
    props: ['url', 'name', 'content'],
  }
</script>

<style scoped>

.story {
  display: flex;
  flex-flow: column;
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
  }
}

@media (max-width: 1250px) {
  .story__name {
    padding: 16px 0 16px 0;
    font-size: 18px;
    line-height: 22px;
  }
}

@media (max-width: 1250px) {
  .story__image {
  width: 208px;
  height: 208px;
  }
}

@media (max-width: 1000px) {
  .story__image {
  width: 216px;
  height: 216px;
  }
}

@media (max-width: 1000px) {
  .story__name {
    padding: 16px 0 16px 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
}

@media (max-width: 1000px) {
  .story__content {
font-size: 13px;
    line-height: 16px;
  }
}

@media (max-width: 700px) {
  .story__image {
  width: 290px;
  height: 290px;
  }
}

</style>
