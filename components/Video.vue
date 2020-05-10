<template>
  <div class="mainVideo">
    <div class="mainVideo__description">
      <mainVideo-title :title="title" class="mainVideo__title" />
      <mainVideo-subtitle :subtitle="subtitle" class="mainVideo__subtitle" />
    </div>
    <iframe class="mainVideo__item" src="https://www.youtube.com/embed/ou60K0WfcJ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  display: flex;
  justify-content: space-between;
  padding: 100px 4% 100px;
  background-color: white;
  min-height: 650px;
  border: 1px solid red;

}

@media screen and (max-width: 1400px) {
  .mainVideo {
    padding: 90px 4% 90px;
  }
}
.mainVideo__description {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
}

.mainVideo__title {
  margin-top: 0;
  margin-bottom: 32px;
}

.mainVideo__subtitle {
  max-width: 360px;
}

.mainVideo__item {
  width: 867px;
  height: auto;
}

@media screen  and (max-width: 1400px) {
  .mainVideo__item {
  width: 773px;
  height: auto;
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

</style>
