<template>
  <div class="about">
    <about-content class="about__content">
      <h2 class="about__heading">#раклечится</h2>
      <h3 class="about__title">О проекте</h3>
      <div class="about__container">
        <p class="about__subtitle">
          Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </p>
        <div class="about__text">
          <div class="about__text-container">
            <p
              @click="toggleFirstSpan"
              :class="[
                'about__text-span',
                { 'about__text-span_is_active': toggle === true },
              ]"
            >
              Рак Лечится
            </p>
            <p
              @click="toggleSecondSpan"
              :class="[
                'about__text-span',
                { 'about__text-span_is_active': toggle === false },
              ]"
            >
              Фонд Хабенского
            </p>
          </div>
          <div class="about__text-container">
            <p v-if="toggle === true" class="about__text-paragraph">
              Есть вещи, которые не лечатся. Особенности характера, страстные
              увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
              приобрели в детстве. Список можно продолжать до бесконечности, но
              одна болезнь в него точно не войдет. Эта болезнь — рак. Рак
              лечится, и лучшее доказательство — люди с их неизлечимыми
              особенностями, которые сумели победить рак.
            </p>
            <p v-if="toggle === true" class="about__text-paragraph">
              Рак лечится — проект Благотворительного Фонда Константина
              Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
              изменить отношение людей к раку и заставить каждого поверить:
              онкологическое заболевание — это не приговор.
            </p>
            <p v-else class="about__text-paragraph">
              Благотворительный Фонд Константина Хабенского с 2008 года помогает
              детям с онкологическими и другими тяжелыми заболеваниями головного
              мозга. Фонд не только поддерживает семью заболевшего ребенка в
              самый сложный момент, оплачивая обследования, лечение и
              медицинские препараты, но и в целом меняет систему оказания помощи
              детям с опухолями мозга в России.
            </p>
          </div>
        </div>
      </div>
    </about-content>
  </div>
</template>

<script>
import Content from '@/components/ui/Content';
export default {
  components: {
    'about-content': Content,
  },
  data() {
    return {
      toggle: true,
    };
  },
  methods: {
    toggleFirstSpan() {
      this.toggle = true;
    },
    toggleSecondSpan() {
      this.toggle = false;
    },
  },
};
</script>

<style scoped>
.about {
  margin: 0 auto;
  padding: 90px 60px 100px;
  max-width: 100%;
  background-color: #613a93;
}

.about__heading {
  text-align: center;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-transform: uppercase;
  color: white;
}

.about__title {
  margin-top: 70px;
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: white;
}

.about__container {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}

.about__subtitle {
  max-width: 340px;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
}

.about__text {
  display: flex;
  min-height: 260px;
}

.about__text-span {
  margin: 0 40px 10px 0;
  text-align: right;
  font-size: 18px;
  line-height: 22px;
  color: #c9c9c9;
  cursor: pointer;
  transition: color 0.3s;
}

.about__text-span_is_active {
  font-weight: 500;
  color: white;
}

.about__text-paragraph {
  width: 640px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
}

.about__text-paragraph:last-of-type {
  margin-bottom: 0;
}

.about__text-span:hover {
  color: white;
}
</style>
