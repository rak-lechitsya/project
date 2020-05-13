<template>
  <div class="mainVideo">
    <div class="mainVideo__description">
      <mainVideo-title :title="title" class="mainVideo__title" />
      <mainVideo-subtitle :subtitle="subtitle" class="mainVideo__subtitle" />
      <div class="nextbutton">
        <div class="lessbutton"  />
        <div class="morebutton"  />
      </div>
    </div>
    <figure class="mainVideo__story">
      <iframe class="mainVideo__item" src="https://www.youtube.com/embed/ou60K0WfcJ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <figcaption class="captiontext">Все видео вы можете найте на нашем <a class="link" href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ" target="_blank">YouTube канале</a>.</figcaption>
    </figure>
   </div>
</template>

<script>
import Title from '@/components/ui/Title';
import Subtitle from '@/components/ui/Subtitle';
export default {
  components: {
    'mainVideo-title' : Title,
    'mainVideo-subtitle' : Subtitle,
  },
  data() {
    return {
      title: 'Истории людей, победивших рак, но не свои привычки',
      subtitle: 'Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии, страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с их историями.',
    };
  },
};
</script>

<style scoped>
.mainVideo {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 100px 60px 100px;
  background-color: white;

}

@media screen and (max-width: 1400px) {
  .mainVideo {
    padding: 90px 50px 90px;
  }
}
.mainVideo__description {
  display: flex;
  flex-direction: column;
}

.mainVideo__title {
  margin-top: 10px;

}

.mainVideo__subtitle {
  max-width: 360px;
  margin-top: 32px;
}

.mainVideo__story {
  width: 867px;
  height: 450px;
}

.mainVideo__item {
  width: 100%;
  height: 450px;
}

@media screen  and (max-width: 1400px) {

  .mainVideo__story {
    max-width: 773px;
    height: 400px;
  }

  .mainVideo__item {
    height: 400px;
}
  .mainVideo__title {
    font-size: 28px;
    line-height: 32px;
    max-width: 367px;
  }

  .mainVideo__subtitle {
    font-size: 16px;
    line-height: 20px;
  }
}

.nextbutton {
  display: flex;
  margin-block-start: auto;
  
}

.morebutton {
    width: 40px;
    height: 40px;
    background-color: #FBFBFB;
    background-image: url(/morebutton.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 8px;
    transition: opacity .5s;
}
 .lessbutton {
    width: 40px;
    height: 40px;
    background-color: #FBFBFB;
    background-image: url(/lessbutton.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 8px;
  }

  .morebutton:hover {
    opacity: .5;
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
   opacity: .5;
 }

</style>
