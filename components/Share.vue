<template>
  <div class="share">
    <share-content class="share__content">
      <h3 class="share__title">Расскажите свою историю</h3>
      <div class="share__container">
        <p class="share__subtitle">Мы публикуем новые истории на сайте раз в неделю.
        Есть 2 варианта поделиться своей историей неизлечимых привычек, навязчивых идей и болезненных привязанностей.</p>
        <div class="share__text">
          <div class = "share__text-container">
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
  padding: 100px 60px;
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
  width: 640px;
  min-height: 88px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 22px;
  color: #666;
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
</style>
