<template>
  <div class="slider" v-swiper:mySwiper="swiperOptions">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(video, index) in videos" :key="index">
        <iframe
          class="swiper-slide__video"
          :src="video.url"
          frameborder="0"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videos: Array,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        navigation: {
          nextEl: '.video__toggle_more',
          prevEl: '.video__toggle_less',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      },
    };
  },
};
</script>

<style scoped>
.slider {
  width: 867px;
  height: 450px;
}

.swiper-slide__video {
  width: 100%;
  height: 100%;
}

@media (max-width: 1350px) {
  .slider {
    max-width: 773px;
    height: 400px;
  }
}
@media (max-width: 1250px) {
  .slider {
    max-width: 606px;
    height: 314px;
  }
}
@media (max-width: 1000px) {
  .slider {
    max-width: 580px;
    max-height: 300px;
  }
}
@media (max-width: 620px) {
  .slider {
    max-width: 290px;
    max-height: 150px;
  }
}
</style>
