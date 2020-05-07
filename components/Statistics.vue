<template>
  <div class="statistics">
    <statistics-title :title="title" class="statistics__title" />
    <div class="statistics__container">
      <div class="statistics__pictures">
        <div class="statistics__item">1</div>
        <div class="statistics__item">1</div>
        <div class="statistics__item">1</div>
        <div class="statistics__item">1</div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/ui/Title';

export default {
  components: {
    'statistics-title': Title,
  },
  data() {
    return {
      title: 'Статистика по онкозаболеваниям',
    };
  },
};
</script>

<style scoped>
.statistics {
  margin: 0 auto;
  max-width: 1440px;
  padding: 90px 60px 100px;
  background-color: white;
  color: black;
}

.statistics__container {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}
.statistics__pictures {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
}
.statistics__item {
  height: 300px;
  width: 300px;
}
</style>
