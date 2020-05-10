<template>
  <div class="statistics">
    <statistics-title :title="title" class="statistics__title" />
    <div class="statistics__container">
      <div class="statistics__pictures">
        <div class="statistics__item">
          <p class="statistics__text">
            Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918
            000 человек.
          </p>
          <div class="statistics__box">
            <progress-bar
              :progress="progress"
              class="progress-bar"
              :value="1"
              :maxValue="3"
            />
            <h2 class="statistics__title">1 из 3</h2>
            <p class="statistics__author">Левада-Центр 2018</p>
          </div>
        </div>
        <div class="statistics__item">
          <p class="statistics__text">2,6% Россиян имеют онкозаболевания.</p>
          <div class="statistics__box">
            <progress-bar
              :progress="progress"
              class="progress-bar"
              :value="2.6"
              :maxValue="100"
            />
            <h2 class="statistics__title">3 700 000</h2>
            <p class="statistics__author">Росстат 2018</p>
          </div>
        </div>
        <div class="statistics__item">
          <p class="statistics__text">
            На 28% выросла доля выявления заболеваний на ранней стадии за 10
            лет.
          </p>
          <div class="statistics__box">
            <double-progress-bar
              :doubleProgress="doubleProgress"
              class="progress-bar-double"
              :oldValue="55"
              :maxValue="100"
              :newValue="70"
            />
            <h2 class="statistics__title">↑28%</h2>
            <p class="statistics__author">МНИОИ Герцена 2018</p>
          </div>
        </div>
        <div class="statistics__item">
          <p class="statistics__text">
            На 25% снизилась смертность в течение первого года после постановки
            диагноза.
          </p>
          <div class="statistics__box">
            <double-progress-bar
              :doubleProgress="doubleProgress"
              class="progress-bar-double"
              :oldValue="70"
              :maxValue="100"
              :newValue="55"
            />
            <h2 class="statistics__title">↓25%</h2>
            <p class="statistics__author">МНИОИ Герцена 2018</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/ui/Title';
import Progress from '@/components/ui/Progress-bar';
import doubleProgress from '@/components/ui/Double_Progress-bar';

export default {
  components: {
    'statistics-title': Title,
    'progress-bar': Progress,
    'double-progress-bar': doubleProgress,
  },
  data() {
    return {
      title: 'Статистика по онкозаболеваниям',
      progress: '',
      doubleProgress: '',
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

@media (max-width: 1439px) {
  .statistics__pictures {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 1106px) {
  .statistics__pictures {
    grid-template-columns: 1fr 1fr;
  }
}

.statistics__item {
  height: 300px;
  width: 300px;
  border: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.statistics__box {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-content: center;
  margin-right: 20px;
  text-align: right;
}

.statistics__text {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin-block-start: 0;
  max-width: 260px;
  margin: 20px 20px 0;
  margin-block-end: 0;
}

.statistics__title {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: end;
  margin-top: 20px;
}
.statistics__author {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: end;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
