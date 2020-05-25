<template>
  <div class="statistics">
    <statistics-content class="statistics__content">
      <h3 class="statistics__header">{{ blockStatistics.title }}</h3>
      <div class="statistics__container">
        <div class="statistics__pictures">
          <div class="statistics__item">
            <p class="statistics__text">
              {{ statsArr[0].description }}
            </p>
            <div class="statistics__box">
              <progress-bar
                :progress="progress"
                class="progress-bar"
                :value="statsArr[0].currentValue"
                :maxValue="statsArr[0].maxValue"
              />
              <h2 class="statistics__title">{{ statsArr[0].summary }}</h2>
              <p class="statistics__author">{{ statsArr[0].source }}</p>
            </div>
          </div>
          <div class="statistics__item">
            <p class="statistics__text">{{ statsArr[1].description }}</p>
            <div class="statistics__box">
              <progress-bar
                :progress="progress"
                class="progress-bar"
                :value="statsArr[1].currentValue"
                :maxValue="statsArr[1].maxValue"
              />
              <h2 class="statistics__title">{{ statsArr[1].summary }}</h2>
              <p class="statistics__author">{{ statsArr[1].source }}</p>
            </div>
          </div>
          <div class="statistics__item">
            <p class="statistics__text">
              {{ statsArr[2].description }}
            </p>
            <div class="statistics__box">
              <double-progress-bar
                :doubleProgress="doubleProgress"
                class="progress-bar-double"
                :oldValue="55"
                :maxValue="statsArr[2].maxValue"
                :newValue="70"
              />
              <h2 class="statistics__title">{{ statsArr[2].summary }}</h2>
              <p class="statistics__author">{{ statsArr[2].source }}</p>
            </div>
          </div>
          <div class="statistics__item">
            <p class="statistics__text">
              {{ statsArr[3].description }}
            </p>
            <div class="statistics__box">
              <double-progress-bar
                :doubleProgress="doubleProgress"
                class="progress-bar-double"
                :oldValue="70"
                :maxValue="statsArr[3].maxValue"
                :newValue="55"
              />
              <h2 class="statistics__title">{{ statsArr[3].summary }}</h2>
              <p class="statistics__author">{{ statsArr[2].source }}</p>
            </div>
          </div>
        </div>
      </div>
    </statistics-content>
  </div>
</template>

<script>
import Content from '@/components/ui/Content';
import Progress from '@/components/ui/Progress-bar';
import doubleProgress from '@/components/ui/Double_Progress-bar';

export default {
  components: {
    'progress-bar': Progress,
    'double-progress-bar': doubleProgress,
    'statistics-content': Content,
  },
  computed: {
    blockArr() {
      return this.$store.getters['blocks/getBlockArr'];
    },
    statsArr() {
      return this.$store.getters['stats/getStatsArr'];
    },
    blockStatistics() {
      return this.blockArr.find(el => el.block === 'statistics');
    },
  },
  data() {
    return {
      progress: '',
      doubleProgress: '',
    };
  },
};
</script>

<style scoped>
.statistics {
  margin: 0 auto;
  background-color: white;
  color: black;
}

.statistics__container {
  margin-bottom: 100px;
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
  margin-left: auto;
  margin-right: auto;
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

.statistics__header {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-align: end;
  margin-top: 100px;
  margin-bottom: 70px;
  color: black;
  max-width: 413px;
}

.statistics__title {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: end;
  margin-top: 20px;
  color: black;
  max-width: 413px;
}

.statistics__author {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: end;
  margin-top: 20px;
  margin-bottom: 20px;
}

@media (max-width: 1350px) {
  .statistics__header {
    font-size: 28px;
    line-height: 32px;
    margin-top: 90px;
    margin-bottom: 60px;
  }
}

@media (max-width: 1350px) {
  .statistics__item {
    height: 265px;
    width: 265px;
  }
}

@media (max-width: 1350px) {
  .statistics__container {
    margin-bottom: 90px;
  }
}

@media (max-width: 1250px) {
  .statistics__header {
    font-size: 24px;
    line-height: 28px;
    max-width: 380px;
    margin: 80px 0 46px 0;
  }
}

@media (max-width: 1250px) {
  .statistics__author {
    font-size: 10px;
    line-height: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

@media (max-width: 1250px) {
  .statistics__title {
    font-size: 26px;
    line-height: 30px;
    margin-top: 10px;
  }
}
@media (max-width: 1250px) {
  .statistics__text {
    font-size: 10px;
    line-height: 14px;
    margin: 10px 10px 0;
  }
}

@media (max-width: 1250px) {
  .statistics__container {
    margin-bottom: 80px;
  }
}

@media (max-width: 1250px) {
  .statistics__item {
    height: 208px;
    width: 208px;
  }
}

@media (max-width: 1250px) {
  .statistics__pictures {
    grid-gap: 30px;
  }
}

@media (max-width: 1000px) {
  .statistics__pictures {
    grid-gap: 20px;
  }
}

@media (max-width: 1000px) {
  .statistics__item {
    height: 216px;
    width: 216px;
  }
}

@media (max-width: 1000px) {
  .statistics__container {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
}
@media (max-width: 1000px) {
  .statistics__header {
    font-size: 24px;
    line-height: 28px;
    max-width: 380px;
    margin: 80px auto 60px auto;
    text-align: center;
  }
}

@media (max-width: 700px) {
  .statistics__header {
    font-size: 18px;
    line-height: 21px;
    margin: 50px 0 30px 0;
    text-align: inherit;
  }
}
@media (max-width: 700px) {
  .statistics__container {
    margin-bottom: 50px;
  }
}
</style>
