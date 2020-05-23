<template>
  <section class="video">
    <video-content class="video__content">
      <div class="video__description">
        <h3 class="video__title">
          Истории людей, победивших рак, но не свои привычки
        </h3>
        <p class="video__subtitle">
          Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
          страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди
          с их историями.
        </p>
        <div class="video__container">
          <button
            :class="[
              'video__toggle video__toggle_less',
              { video__toggle_is_active: !previousDisable },
            ]"
            @click="previousVideo"
            :disabled="previousDisable"
          ></button>
          <button
            :class="[
              'video__toggle video__toggle_more',
              { video__toggle_is_active: !nextDisable },
            ]"
            @click="nextVideo"
            :disabled="nextDisable"
          ></button>
        </div>
      </div>
      <figure class="video__story">
        <iframe
          class="video__item"
          :src="videosUrl[counter].url"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <figcaption class="video__captiontext">
          Все видео вы можете найте на нашем
          <a
            class="video__link"
            href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
            target="_blank"
            >YouTube канале</a
          >.
        </figcaption>
      </figure>
    </video-content>
  </section>
</template>

<script>
import Content from '@/components/ui/Content';
export default {
  components: {
    'video-content': Content,
  },
  computed: {
    videosUrl() {
      return this.$store.getters['videos/getVideos'];
    },
    nextDisable() {
      if (this.counter + 1 === this.videosUrl.length) {
        return true;
      }
    },
    previousDisable() {
      if (this.counter === 0) {
        return true;
      }
    },
  },
  methods: {
    nextVideo() {
      this.counter++;
    },
    previousVideo() {
      this.counter--;
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style scoped>
.video {
  margin: 0 auto;
  padding: 100px 60px 100px;
  background-color: white;
}

.video__content {
  display: flex;
  justify-content: space-between;
}

.video__description {
  display: flex;
  flex-direction: column;
}

.video__title {
  margin-top: 10px;
  max-width: 400px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
}

.video__subtitle {
  max-width: 360px;
  margin-top: 32px;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.video__story {
  width: 867px;
  height: 450px;
}

.video__item {
  width: 100%;
  height: 450px;
}

.video__container {
  display: flex;
  margin-block-start: auto;
}

.video__toggle {
  width: 40px;
  height: 40px;
  background-color: #fbfbfb;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 8px;
  transition: transform 0.3s;
  border: none;
  opacity: 0.5;
  outline: none;
}

.video__toggle_is_active {
  opacity: 1;
  cursor: pointer;
}

.video__toggle_more {
  background-image: url(/morebutton.svg);
}

.video__toggle_less {
  background-image: url(/lessbutton.svg);
}

.video__captiontext {
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}

.video__link {
  color: #666666;
  transition: opacity 0.3s;
}

.video__toggle_is_active:hover {
  transform: scale(1.3);
}

@media screen and (max-width: 1400px) {
  .video {
    padding: 90px 50px 90px;
  }

  .video__story {
    max-width: 773px;
    height: 400px;
  }

  .video__item {
    height: 400px;
  }
  .video__title {
    font-size: 28px;
    line-height: 32px;
    max-width: 367px;
  }

  .video__subtitle {
    font-size: 16px;
    line-height: 20px;
    margin-top: 30px;
  }
}

@media screen and (max-width: 1250px) {
  .video {
    padding: 80px 50px 80px;
  }

  .video__story {
    max-width: 606px;
    height: 314px;
  }

  .video__item {
    height: 314px;
  }

  .video__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
  }

  .video__subtitle {
    font-size: 13px;
    line-height: 16px;
    margin-top: 20px;
    max-width: 260px;
  }
}

@media screen and (max-width: 1000px) {
  .video {
    padding: 80px 40px 80px;
  }

  .video__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .video__story {
    max-width: 580px;
    height: 300px;
    margin-top: -40px;
  }

  .video__item {
    height: 300px;
    margin-top: 0;
  }

  .video__title {
    margin: 0 auto;
    max-width: 380px;
    text-align: center;
  }

  .video__subtitle {
    margin: 26px auto;
    max-width: 390px;
    margin-bottom: 60px;
  }

  .video__container {
    width: 688px;
    display: flex;
    height: 40px;
    justify-content: space-between;
    position: relative;
    top: 125px;
  }
}

@media screen and (max-width: 750px) {
  .video__container {
    max-width: 580px;
  }

  .video__toggle {
    background-color: transparent;
  }
}

@media screen and (max-width: 620px) {
  .video {
    padding: 50px 15px 50px;
  }

  .video__title {
    font-size: 18px;
    line-height: 21px;
    max-width: 290px;
    text-align: left;
  }

  .video__subtitle {
    margin: 16px auto;
    max-width: 290px;
  }

  .video__story {
    max-width: 290px;
    height: 150px;
    margin-top: -20px;
  }

  .video__item {
    height: 150px;
  }

  .video__container {
    display: flex;
    position: relative;
    top: 75px;
    max-width: 310px;
  }

  .video__captiontext {
    visibility: hidden;
  }

  .video__toggle {
    margin-block-start: 0px;
  }
}
</style>
