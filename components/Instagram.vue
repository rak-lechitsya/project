<template>
  <div class="instagram">
    <instagram-title :title="title" class="instagram__title" />
    <div class="instagram__container">
      <instagram-subtitle :subtitle="subtitle" class="instagram__subtitle" />
      <div class="instagram__pictures">
        <div class="instagram__item">1</div>
        <div class="instagram__item">1</div>
        <div class="instagram__item">1</div>
        <div class="instagram__item">1</div>
        <div class="instagram__item">1</div>
        <div class="instagram__item">1</div>
        <div class="instagram__item">1</div>
        <div class="instagram__item">1</div>
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
  background-color: #f7f7f7;
  color: black;
}

.instagram__container {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}

.instagram__title {
  text-decoration: underline;
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
.instagram__item {
  height: 195px;
  width: 195px;
}
</style>
