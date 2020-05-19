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
  line-height: 1.33;
  color: #000;
  padding: 0;
  margin: 0 0 134px;
  width: 100%;
  text-align: left;
}
</style>
