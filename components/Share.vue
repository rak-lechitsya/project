<template>
  <div class="share">
    <share-content class="share__content">
      <h3 class="share__title">Расскажите свою историю</h3>
      <div class="share__container">
        <p class="share__subtitle">Мы публикуем новые истории на сайте раз в неделю.
        Есть 2 варианта поделиться своей историей неизлечимых привычек, навязчивых идей и болезненных привязанностей.</p>
        <div class="share__text">
          <div class = "share__span-container">
            <p @click="toggleFirstSpan" :class="['share__text-span', {'share__text-span_is_active': toggle===true}]">1-й вариант</p>
            <p @click="toggleSecondSpan" :class="['share__text-span', {'share__text-span_is_active': toggle===false}]">2-й вариант</p>
          </div>
          <div class = "share__text-container">
            <p v-if="toggle===true" class="share__text-paragraph">Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки.
            Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.</p>
            <p v-if="toggle===false" class="share__text-paragraph">Оставить контакт (почту или номер телефона) и мы свяжемся с вами,
            зададим вопросы, уточним детали вашей истории.</p>
            <share-button v-if="toggle===true" :text='textButtonForm' @btnClick="$emit('btnClick')" class="share__text-button"  />
            <share-button v-if="toggle===false" :text='textButtonContact' @btnClick="$emit('btnClickContacts')" class="share__text-button" />
          </div>
        </div>
      </div>
    </share-content>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import Content from '@/components/ui/Content';
export default {
  components: {
    'share-button': Button,
    'share-content': Content,
  },
  data() {
    return {
      toggle: true,
      textButtonForm: 'Заполнить форму',
      textButtonContact: 'Оставить контакт',
    };
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
.share {
  margin: 0 auto;
  width: 100%;
  padding: 100px 14px 60px;
  background-color: #f7f7f7;
}

.share__title {
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: black;
}

.share__container {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}

.share__subtitle {
  max-width: 340px;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.share__text {
  display: flex;
}

.share__text-span {
  margin: 0 40px 10px 0;
  text-align: right;
  font-size: 18px;
  line-height: 22px;
  color: #A2A2A2;
  cursor: pointer;
  transition: color .3s;
}

.share__text-span_is_active {
  font-weight: 500;
  color: black;
}

.share__text-paragraph {
  min-height: 90px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.share__text-container {
  max-width: 640px;
}

.share__text-button {
  margin-top: 78px;
}

.share__text-paragraph:last-of-type {
  margin-bottom: 0;
}

.share__text-span:hover {
  color: black;
}

@media (min-width : 320px) and (max-width : 499px) {
  .share {
    padding: 50px 10px;
  }

  .share__content {
    max-width: 295px;
  }

  .share__title {
    margin: 0 auto 16px;
    font-size: 21px;
    line-height: 18px;
  }

  .share__container {
    flex-direction: column;
    align-items: center;
  }

  .share__text {
    display: block;
  }

  .share__subtitle {
    margin-bottom: 40px;
    font-size: 13px;
    line-height: 16px;
    max-width: 295px;
  }

  .share__text-span {
    margin: 0 16px 16px 0;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
  }

  .share__span-container {
    display: flex;
  }

  .share__text-paragraph {
    font-size: 13px;
    line-height: 16px;
    min-height: 98px;
  }

  .share__text-span_is_active {
    border-bottom: 2px solid #613A93;
  }

  .share__text-button {
    width: 290px;
    height: 40px;
    margin-top: 30px;
    font-size: 13px;
    line-height: 16px;
  }
}

@media (min-width : 500px) and (max-width : 979px) {
  .share {
    padding: 80px 50px;
  }

  .share__content {
    max-width: 390px;
  }

  .share__title {
    text-align: center;
    margin: 0 auto 26px;
    font-size: 24px;
    line-height: 28px;
  }

  .share__container {
    flex-direction: column;
    align-items: center;
  }

  .share__text {
    display: block;
  }

  .share__subtitle {
    margin-bottom: 80px;
    font-size: 13px;
    line-height: 16px;
    max-width: 380px;
  }

  .share__text-span {
    margin: 0 30px 24px 0;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
  }

  .share__span-container {
    display: flex;
  }

  .share__text-paragraph {
    font-size: 15px;
    line-height: 19px;
    min-height: 97px;
  }

  .share__text-span_is_active {
    border-bottom: 2px solid #613A93;
  }

  .share__text-button {
    width: 230px;
    height: 48px;
    margin-top: 59px;
    font-size: 15px;
    line-height: 18px;
  }
}


@media (min-width : 980px) and (max-width : 1199px) {
  .share {
    padding: 80px 50px;
  }

  .share__title {
    margin: 0 0 30px;
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
  }

  .share__subtitle {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
  }

  .share__text-span {
    margin: 0 30px 8px 0;
    font-size: 15px;
    line-height: 19px;
  }

  .share__text-container {
    max-width: 457px;
  }

  .share__text-paragraph {
    font-size: 15px;
    line-height: 19px;
    min-height: 78px;
  }

  .share__text-button {
    width: 230px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media (min-width : 1200px) and (max-width : 1280px) {
  .share {
    padding: 80px 50px 90px;
  }

  .share__title {
    margin: 0 0 30px;
  }

  .share__text-container {
    max-width: 580px;
  }

  .share__text-button {
    width: 230px;
    height: 48px;
  }
}
</style>
