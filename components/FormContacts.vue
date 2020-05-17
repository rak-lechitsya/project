<template>
  <form class="form" id="form-contacts" name="form-contacts" method="post" action="#">
    <h3 class="form__title">Оставьте контакт для связи</h3>
    <p class="form__subtitle">Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории и разместить ее на сайте.</p>
    <fieldset class="form__fieldset">
      <legend class="form__question">Как вас зовут?</legend>
      <my-input
        addClass='form__input'
        placeholder="Напишите тут"
        id="fullname"
        type="text"
        :bottomBordered='true'
        name="fullname"
      />
      <div class="form__mail-tel">
        <div class="form__block">
          <legend class="form__question">Электронная почта</legend>
          <my-input
            addClass='form__input'
            placeholder="pochta@example.com"
            id="e-mail"
            type="email"
            :bottomBordered='true'
            name="e-mail"
          />
        </div>
        <div class="form__block">
          <legend class="form__question">Телефон</legend>
          <my-input
            addClass='form__input'
            placeholder="+7 000 000 00 00"
            id="tel"
            type="tel"
            :bottomBordered='true'
            name="tel"
          />
        </div>
      </div>
      <legend class="form__question">Напишите, если есть предпочтительный способ связи и удобное время</legend>
      <my-input
        addClass='form__input'
        placeholder="Телефон / почта и удобное время"
        id="time"
        type="text"
        :bottomBordered='true'
        name="time"
      />
    </fieldset>
    <div class='form__buttons'>
      <my-button
      class='button'
      :text='textButtonForm'
      type='submit' />
      <p class="form__politic">Нажимая на кнопку «отправить», вы даете согласие на 
      <nuxt-link to="/policy" target="_blank" class='form__link'>обработку персональных данных</nuxt-link></p>
    </div>
  </form>
</template>

<script>
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
export default {
  components: {
    'my-input': Input,
    'my-button': Button,
  },
  data() {
    return {
      textButtonForm: 'Отправить',
    }
  }
};
</script>

<style scoped>
.button {
  width: 226px;
}

.form {
  width: 840px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form__block {
  width: calc(50% - 20px);
}

.form__buttons {
  display: flex;
  align-items: center;
  margin-top: auto;
}

.form__link {
  text-decoration: underline;
  cursor: pointer;
  transition: opasity .3s;
  color: #666666;
}

.form__link:hover {
  opacity: .9;
}

.form__mail-tel {
  display: flex;
  justify-content: space-between;
}

.form__politic {
  max-width: 378px;
  margin-left: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666;
}

.form__fieldset {
  margin: 0 0 50px;
  padding: 0;
  border: none;
  width: 100%;
}

.form__question {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #000;
  margin-top: 40px;
  margin-bottom: 40px;
}

.form__title {
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.12;
  display: flex;
  align-items: flex-end;
  color: #000;
}

.form__subtitle {
  margin: 40px auto 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #000;
}
</style>
