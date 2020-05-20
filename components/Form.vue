<template>
  <form class="form" id="form" name="form" method="post" action="#">
    <h3 class="form__title">{{ title }}</h3>
    <fieldset class="form__fieldset">
      <legend class="form__subtitle">{{ subtitle }}</legend>
      <my-input
        addClass="form__input"
        placeholder="Напишите тут"
        id="fullname"
        type="text"
        :bottomBordered="true"
        name="fullname"
      />
    </fieldset>
    <div class="form__buttons">
      <button class="button button_before" type="button">Назад</button>
      <my-button class="button button_next" :text="textButtonForm" />
    </div>
  </form>
</template>

<script>
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
export default {
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  },
  components: {
    'my-input': Input,
    'my-button': Button,
  },
  data() {
    return {
      textButtonForm: 'Далее',
    };
  },
};
</script>

<style scoped>
.button {
  border: none;
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
}

.button_next {
  width: 226px;
}

.form {
  width: 840px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form__buttons {
  display: flex;
  align-items: center;
  margin-top: auto;
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

.form__title {
  margin: 0 0 40px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: black;
}

.form__subtitle {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  padding: 0;
  margin: 0 0 134px;
  width: 100%;
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
}

@media (max-width: 620px) {
  .form {
    width: 350px;
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
  }

  .form__input {
    margin-bottom: 252px;
  }

  .button_next {
    width: 206px;
    height: 40px;
    font-size: 13px;
    line-height: 16px;
  }

  .button_before {
    width: 39px;
    height: 16px;
    font-size: 13px;
    line-height: 16px;
    margin-right: 15px;
  }
}
</style>
