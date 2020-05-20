<template>
  <div class="about">
    <about-content class = "about__content">
      <h2 class="about__heading">#раклечится</h2>
      <h3 class="about__title">О проекте</h3>
      <div class="about__container">
        <p class="about__subtitle">Этот проект был создан благотворительным фондом Константина Хабенского.</p>
        <div class="about__text">
          <div class = "about__span-container">
            <p @click="toggleFirstSpan" :class="['about__text-span', {'about__text-span_is_active': toggle===true}]">Рак Лечится</p>
            <p @click="toggleSecondSpan" :class="['about__text-span', {'about__text-span_is_active': toggle===false}]">Фонд Хабенского</p>
          </div>
          <div class = "about__text-container">
            <p v-if="toggle===true" class="about__text-paragraph">Есть вещи, которые не лечатся. 
            Особенности характера, страстные увлечения, привычки, ставшие частью нашего «я», фобии, которые мы приобрели в детстве. 
            Список можно продолжать до бесконечности, но одна болезнь в него точно не войдет. Эта болезнь — рак. 
            Рак лечится, и лучшее доказательство — люди с их неизлечимыми особенностями, которые сумели победить рак.</p>
            <p v-if="toggle===true" class="about__text-paragraph">Рак лечится — проект Благотворительного Фонда Константина Хабенского и 
            Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей к раку и заставить каждого поверить: 
            онкологическое заболевание — это не приговор.</p>
            <p v-else class="about__text-paragraph">Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с онкологическими и 
            другими тяжелыми заболеваниями головного мозга. Фонд не только поддерживает семью заболевшего ребенка в самый сложный момент, 
            оплачивая обследования, лечение и медицинские препараты, но и в целом меняет систему оказания помощи детям с опухолями мозга в России.</p>
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
      toggle: true
    }
  },
  methods: {
    toggleFirstSpan() {
      this.toggle = true;
    },
    toggleSecondSpan() {
      this.toggle = false;
    }
  }
};
</script>

<style scoped>
.about {
  margin: 0 auto;
  padding: 90px 60px 100px;
  max-width: 100%;
  min-height: 665px;
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
  margin: 70px 0 32px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: white;
}

.about__container {
  display: flex;
  justify-content: space-between;
}

.about__subtitle {
  max-width: 260px;
  font-size: 18px;
  line-height: 22px;
  color: #DEDEDE;
}

.about__text {
  display: flex;
}

.about__text-span {
  margin: 0 40px 10px 0;
  text-align: right;
  font-size: 18px;
  line-height: 22px;
  color: #C9C9C9;
  cursor: pointer;
  transition: color .3s;
}

.about__text-span_is_active {
  font-weight: 500;
  color: white;
}

.about__text-paragraph {
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 22px;
  color: #DEDEDE;
}

.about__text-container{
  max-width: 650px;
}

.about__text-paragraph:last-of-type {
  margin-bottom: 0;
}

.about__text-span:hover {
  color: white;
}

@media (max-width : 700px) {
  .about {
    padding: 50px 14px;
    min-height: 628px;
  }

  .about__content {
    max-width: 295px;
  }

  .about__heading {
    display: none;
  }

  .about__title {
    margin: 0 auto 16px;
    font-size: 21px;
    line-height: 18px;
  }

  .about__container {
    flex-direction: column;
    align-items: center;
  }

  .about__text {
    display: block;
  }

  .about__subtitle {
    margin-bottom: 40px;
    font-size: 13px;
    line-height: 16px;
    max-width: 295px;
  }

  .about__text-span {
    margin: 0 16px 16px 0;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
  }

  .about__span-container {
    display: flex;
  }

  .about__text-paragraph {
    font-size: 15px;
    line-height: 19px;
  }

  .about__text-span_is_active {
    border-bottom: 2px solid #fff;
  }
}

@media (min-width : 701px) and (max-width : 1000px) {
  .about {
    padding: 80px 50px;
    min-height: 687px;
  }

  .about__content {
    max-width: 390px;
  }

  .about__heading {
    display: none;
  }

  .about__title {
    text-align: center;
    margin: 0 auto 26px;
    font-size: 24px;
    line-height: 28px;
  }

  .about__container {
    flex-direction: column;
    align-items: center;
  }

  .about__text {
    display: block;
  }

  .about__subtitle {
    margin-bottom: 80px;
    font-size: 13px;
    line-height: 16px;
    max-width: 380px;
  }

  .about__text-span {
    margin: 0 30px 24px 0;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
  }

  .about__span-container {
    display: flex;
  }

  .about__text-paragraph {
    font-size: 15px;
    line-height: 19px;
  }

  .about__text-span_is_active {
    border-bottom: 2px solid #fff;
  }
}


@media (min-width : 1001px) and (max-width : 1250px) {
  .about {
    padding: 80px 50px;
    min-height: 586px;
  }

  .about__heading {
    font-size: 52px;
    line-height: 63px;
  }

  .about__title {
    margin: 46px 0 30px;
    font-size: 24px;
    line-height: 28px;
  }

  .about__subtitle {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
  }

  .about__text-span {
    margin: 0 30px 8px 0;
    font-size: 15px;
    line-height: 19px;
  }

  .about__text-container {
    max-width: 457px;
  }

  .about__text-paragraph {
    font-size: 15px;
    line-height: 19px;
  }
}

@media (min-width : 1251px) and (max-width : 1350px) {
  .about {
    padding: 80px 50px 90px;
    min-height: 641px;
  }

  .about__title {
    margin: 60px 0 30px;
  }

  .about__text-container {
    max-width: 580px;
  }
}
</style>