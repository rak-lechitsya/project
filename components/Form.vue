<template>
  <div>
    <div v-if="getFinish" class="form form_finish">
      <h3 class="form__title form__title_finish">
        Спасибо что приняли участие!
      </h3>
      <my-button
        class="button button_next button_is_active"
        @btnClick="toggleStoryPopup"
        :text="textButtonFormClose"
        type="button"
      />
    </div>

    <form @submit.prevent="prevent" v-else class="form" id="form" name="form">
      <h3 class="form__title">{{ title }}</h3>
      <fieldset class="form__fieldset">
        <legend class="form__subtitle">
          {{ questions[number - 1].question }}
          <span class="form__question-extra">
            {{ questions[number - 1].questionExtra }}</span
          >
        </legend>
        <my-input
          v-model="answers[number - 1]"
          :value="answers[number - 1]"
          addClass="form__input"
          placeholder="Напишите тут"
          id="answers"
          type="text"
          :bottomBordered="true"
          name="answers"
        />
      </fieldset>
      <span class="form__span" v-if="lastQuestion && !loading"
        >email в формате: example@yandex.ru</span
      >
      <span class="form__span" v-if="loading">Загрузка...</span>
      <div class="form__buttons">
        <button
          class="button button_before"
          @click="prevQuestion"
          type="button"
        >
          Назад
        </button>
        <my-button
          id="next"
          v-if="!lastQuestion"
          @btnClick="nextQuestion"
          :text="textButtonForm"
          type="submit"
          :disabled="isButtonDisabled"
          :class="[
            'button button_next',
            { button_is_active: !isButtonDisabled },
          ]"
        />
        <my-button
          v-if="lastQuestion"
          @btnClick="send"
          :text="textButtonFormSend"
          :disabled="isButtonDisabled"
          :class="[
            'button button_next',
            { button_is_active: !isButtonDisabled },
          ]"
          type="submit"
        />

        <p v-if="lastQuestion" class="form__politic">
          Нажимая на кнопку «отправить», вы даете согласие на
          <nuxt-link to="/policy" target="_blank" class="form__link"
            >обработку персональных данных</nuxt-link
          >
        </p>
      </div>
    </form>
    <form-error class="form__error" v-if="getError" />
  </div>
</template>

<script>
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import FormError from '@/components/ui/FormError';
export default {
  components: {
    'my-input': Input,
    'my-button': Button,
    'form-error': FormError,
  },
  data() {
    return {
      textButtonForm: 'Далее',
      textButtonFormSend: 'Отправить',
      textButtonFormClose: 'Закрыть',
      answers: [],
      number: 1,
      sent: false,
      isButtonDisabled: true,
      regex: /^([a-zA-Z0-9]+[_\.-]?)+@(([a-zA-Z0-9]+[_-]?)+\.)+(([a-zA-Z]{2,}))+$/,
      loading: false,
    };
  },
  watch: {
    answers() {
      if (this.checkLength) {
        if (this.lastQuestion) {
          if (this.validEmail) return (this.isButtonDisabled = false);
          return (this.isButtonDisabled = true);
        }
        return (this.isButtonDisabled = false);
      }
      return (this.isButtonDisabled = true);
    },
  },
  computed: {
    questions() {
      return this.$store.getters['form/getQuestions'];
    },
    lastQuestion() {
      return Boolean(this.questions.length === this.number);
    },
    title() {
      return `Шаг ${this.number} из ${this.questions.length}`;
    },
    answerKeys() {
      return this.questions.map(el => el.answerKey);
    },
    checkLength() {
      return this.answers[this.number - 1].length > 0;
    },
    validEmail() {
      return this.regex.test(this.answers[this.number - 1]);
    },
    getFinish() {
      return this.$store.getters['form/getFinish'];
    },
    getError() {
      return this.$store.getters['error/getError'];
    },
  },
  methods: {
    nextQuestion() {
      if (!this.lastQuestion) this.number++;
      if (this.number > this.answers.length) this.isButtonDisabled = true;
    },
    prevQuestion() {
      if (this.number > 1) {
        this.isButtonDisabled = false;
        this.number--;
      }
    },
    prevent(event) {
      event.preventDefault();
    },
    toggleStoryPopup() {
      this.$store.commit('popup/toggleStoryPopup');
    },
    async send() {
      this.$store.commit('error/errorFalse');
      this.loading = true;
      const promise = await new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1500);
      });
      this.sent = true;
      let result = {};
      this.answerKeys.forEach((key, index) => {
        result = { ...result, [key]: this.answers[index] || null };
      });
      await this.$store.dispatch('form/sentData', result);
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.form__span {
  position: absolute;
  margin-top: 270px;
  color: grey;
  text-align: left;
  font-size: 14px;
  margin-left: 2px;
}

.button {
  border: none;
  background-color: grey;
}

.button_is_active {
  background-color: #613a93;
  cursor: pointer;
}

.button_before {
  width: 48px;
  height: 20px;
  background-color: white;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #c0c0c0;
  margin-right: 30px;
  cursor: pointer;
  outline: none;
}

.button_next {
  width: 226px;
  padding: 0;
  outline: none;
  cursor: default;
}

.form {
  width: 840px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form_finish {
  align-items: center;
}

.form__buttons {
  display: flex;
  align-items: center;
  margin-top: auto;
  flex-flow: row wrap;
}

.form__fieldset {
  padding: 0;
  margin: 0;
  border: none;
  width: 100%;
}

.form__input {
  margin-bottom: 200px;
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

.form__politic {
  margin-left: 30px;
  max-width: 378px;
  font-size: 14px;
  line-height: 17px;
}

.form__question-extra {
  color: #666;
}

.form__title {
  margin: 0 0 40px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: black;
}

.form__title_finish {
  margin-bottom: 428px;
}

.form__subtitle {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  padding: 0;
  margin: 0 0 80px;
  width: 100%;
  min-height: 72px;
  text-align: left;
}

@media (max-width: 1350px) {
  .form {
    width: 720px;
  }

  .form__title {
    font-size: 28px;
    line-height: 32px;
  }

  .form__subtitle {
    font-size: 16px;
    line-height: 22px;
    margin: 0 0 100px;
  }

  .form__input {
    margin-bottom: 164px;
  }

  .form__span {
    margin-top: 280px;
  }

  .button_next {
    width: 200px;
    height: 48px;
  }
}

@media (max-width: 1050px) {
  .form__title {
    font-size: 26px;
    line-height: 30px;
  }

  .form__subtitle {
    font-size: 15px;
  }

  .form__input {
    margin-bottom: 168px;
  }

  .button_next {
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }

  .button_before {
    font-size: 15px;
    line-height: 18px;
  }
}

@media (max-width: 900px) {
  .form {
    width: 500px;
  }

  .form__input {
    margin-bottom: 171px;
  }

  .form__politic {
    margin-top: 40px;
    margin-left: 0;
    font-size: 11px;
    line-height: 13px;
  }
}

@media (max-width: 620px) {
  .form {
    width: 350px;
  }
  .form__span {
    margin-top: 290px;
    font-size: 12px;
  }
}

@media (max-width: 450px) {
  .form {
    width: 260px;
  }

  .form__title {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 30px;
  }

  .form__subtitle {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 40px;
  }

  .form__input {
    margin-bottom: 260px;
  }

  .button_next {
    width: 206px;
    height: 40px;
    font-size: 13px;
    line-height: 16px;
  }

  .form__span {
    margin-top: 200px;
    font-size: 12px;
  }

  .button_before {
    width: 39px;
    height: 16px;
    font-size: 13px;
    line-height: 16px;
    margin-right: 15px;
  }

  .form__politic {
    margin-top: 10px;
  }
}
</style>
