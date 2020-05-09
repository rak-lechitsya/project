<template>
  <div class="instagram">
    <div class="instagram__container">
      <div class="instagram__text">
        <instagram-title :title="title" class="instagram__title" />
        <instagram-subtitle :subtitle="subtitle" class="instagram__subtitle" />
      </div>
      <div class="instagram__pictures">
        <div class="instagram__item"></div>
        <div class="instagram__item"></div>
        <div class="instagram__item"></div>
        <div class="instagram__item"></div>
        <div class="instagram__item"></div>
        <div class="instagram__item"></div>
        <div class="instagram__item"></div>
        <div class="instagram__item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/ui/Title';
import Subtitle from '@/components/ui/Subtitle';

export default {
  components: {
    'instagram-title': Title,
    'instagram-subtitle': Subtitle,
  },
  data() {
    return {
      title: 'Инстаграм',
      subtitle:
        'Два раза в неделю мы просматриваем все посты по хештегу #этонелечится. Все истории, где нет нецензурных выражений и запрещенного контента попадают сюда. Следите за правильным написанием хештега, чтобы мы не пропустили вашу историю.',
    };
  },
};
</script>

<style scoped>
.instagram {
  margin: 0 auto;
  max-width: 1440px;
  padding: 90px 60px 100px;
  background-color: white;
  color: black;
}

.instagram__container {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}

.instagram__title {
  text-decoration: underline;
  margin-bottom: 32px;
  margin-top: 0;
}
.instagram__subtitle {
  max-width: 343px;
}

.instagram__pictures {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
}

@media (max-width: 1439px) {
  .instagram__pictures {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 1150px) {
  .instagram__pictures {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 910px) {
  .instagram__pictures {
    grid-template-columns: 1fr;
  }
}

.instagram__item {
  height: 195px;
  width: 195px;
  background: #ededed;
}
</style>
