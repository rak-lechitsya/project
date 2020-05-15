<template>
  <section class="video">
    <video-content class="video__content">
    <div class="video__description">
      <h3 class="video__title">Истории людей, победивших рак, но не свои привычки</h3>
      <p class="video__subtitle">Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии, страхи. 
      Но это точно не рак. Рак лечится. Лучшее доказательство — люди с их историями.</p>
      <div class="video__container">
        <div class="video__toggle video__toggle_less"></div>
        <div class="video__toggle video__toggle_more"></div>
      </div>
    </div>
    <figure class="video__story">
      <iframe class="video__item" src="https://www.youtube.com/embed/ou60K0WfcJ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <figcaption class="captiontext">Все видео вы можете найте на нашем <a class="link" href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F" target="_blank">YouTube канале</a>.</figcaption>
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
  };
</script>

<style scoped>
.video {
  margin: 0 auto;
  padding: 100px 60px 100px;
  background-color: white;

}

@media screen and (max-width: 1400px) {
  .video {
    padding: 90px 50px 90px;
  }
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

@media screen  and (max-width: 1400px) {

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
  }
}

.video__container {
  display: flex;
  margin-block-start: auto;
  
}

.video__toggle {
    width: 40px;
    height: 40px;
    background-color: #FBFBFB;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 8px;
    cursor: pointer;
}

.video__toggle_more {
  background-image: url(/morebutton.svg);
  transition: opacity .5s;
}
 .video__toggle_less {
    background-image: url(/lessbutton.svg);
  }

  .video__toggle:hover {
    opacity: .8;
  }

 .captiontext {
   font-size: 12px;
   line-height: 16px;
   color: #666666;
 }

 .link {
   color: #666666;
   transition: opacity .3s;
 }

 .link:hover {
   opacity: .8;
 }

</style>
