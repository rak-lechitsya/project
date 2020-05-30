<template>
  <form
    @submit.prevent="prevent"
    class="form"
    id="form-contacts"
    name="form-contacts"
  >
    <h3 class="form__title">Оставьте контакт для связи</h3>
    <p class="form__subtitle">
      Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории
      и разместить ее на сайте.
    </p>
    <fieldset class="form__fieldset">
      <legend class="form__question">Как вас зовут?</legend>
      <my-input
        addClass="form__input"
        placeholder="Напишите тут"
        id="fullname"
        type="text"
        :bottomBordered="true"
        name="fullname"
        v-model="fullName"
      />
      <div class="form__mail-tel">
        <div class="form__block">
          <legend class="form__question">Электронная почта</legend>
          <my-input
            addClass="form__input"
            placeholder="pochta@example.com"
            id="email"
            type="email"
            :bottomBordered="true"
            name="email"
            v-model="email"
          />
        </div>
        <div class="form__block">
          <legend class="form__question">Телефон</legend>
          <my-input
            addClass="form__input"
            placeholder="+7 000 000 00 00"
            id="tel"
            type="tel"
            :bottomBordered="true"
            name="tel"
            v-model="phone"
          />
        </div>
      </div>
      <legend class="form__question">
        Напишите, если есть предпочтительный способ связи и удобное время
      </legend>
      <my-input
        addClass="form__input"
        placeholder="Телефон / почта и удобное время"
        id="time"
        type="text"
        :bottomBordered="true"
        name="time"
        v-model="preferred"
      />
    </fieldset>
    <div class="form__buttons">
      <my-button
        @btnClick="sentData"
        class="button"
        :text="textButtonForm"
        type="submit"
      />
      <p class="form__politic">
        Нажимая на кнопку «отправить», вы даете согласие на
        <nuxt-link to="/policy" target="_blank" class="form__link"
          >обработку персональных данных</nuxt-link
        >
      </p>
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
  methods: {
    prevent(event) {
      event.preventDefault();
    },
    async sentData() {
      const answers = {
        fullName: this.fullName,
        email: this.email,
        phone: this.phone,
        preferred: this.preferred,
      };
      await this.$store.dispatch('contacts/sentData', answers);
      this.$store.commit('popup/toggleContactsPopup');
    },
  },
  data() {
    return {
      textButtonForm: 'Отправить',
      fullName: '',
      email: '',
      phone: '',
      preferred: '',
    };
  },
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
  transition: opasity 0.3s;
  color: #666666;
}

.form__link:hover {
  opacity: 0.9;
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

@media (max-width: 1350px) {
  .form {
    width: 720px;
  }

  .form__question {
    font-size: 16px;
    line-height: 22px;
  }

  .form__title {
    font-size: 28px;
    line-height: 32px;
  }

  .form__subtitle {
    font-size: 16px;
    line-height: 22px;
    margin-top: 37px;
    margin-bottom: 47px;
  }

  .button {
    font-size: 16px;
    line-height: 19px;
  }
}

@media (max-width: 900px) {
  .button {
    width: 200px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }

  .form {
    width: 500px;
  }

  .form__fieldset {
    margin-bottom: 57px;
  }

  .form__politic {
    max-width: 270px;
    font-size: 11px;
    line-height: 13px;
  }

  .form__question {
    font-size: 15px;
    line-height: 19px;
  }

  .form__title {
    font-size: 26px;
    line-height: 30px;
  }

  .form__subtitle {
    font-size: 15px;
    line-height: 19px;
    margin-top: 50px;
    margin-bottom: 40px;
  }
}

@media (max-width: 620px) {
  .form {
    width: 350px;
  }
}

@media (max-width: 450px) {
  .button {
    width: 260px;
    height: 40px;
    font-size: 13px;
    line-height: 16px;
  }

  .form {
    width: 260px;
  }

  .form__buttons {
    flex-direction: column;
  }

  .form__fieldset {
    margin-bottom: 29px;
  }

  .form__mail-tel {
    flex-direction: column;
  }

  .form__politic {
    font-size: 11px;
    line-height: 13px;
    margin-top: 10px;
    margin-left: 0;
    min-width: 260px;
  }

  .form__question {
    margin-top: 26px;
    margin-bottom: 17px;
    font-size: 13px;
    line-height: 16px;
  }

  .form__title {
    font-size: 18px;
    line-height: 21px;
    max-width: 185px;
  }

  .form__subtitle {
    font-size: 13px;
    line-height: 16px;
    margin-top: 32px;
    margin-bottom: 27px;
  }
}
</style>
