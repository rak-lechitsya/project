<template>
  <form class="form" id="form" name="form" method="post" action="#">
    <div class="form__content">
      <form-title :title='title' class="form__title" />
      <button
        class="button button_close-item"
        id="close"
        type="button"
      ></button>
    </div>
    <fieldset class="form__fieldset">
      <legend class="form__subtitle">Как вас зовут?</legend>
      <input
        class="form__input"
        placeholder="Напишите тут"
        id="fullname"
        type="text"
        name="fullname"
      />
    </fieldset>
    <div class='form__buttons'>
      <button class="button button_before" type="button">Назад</button>
      <button class="button button_next" type="button">Далее</button>
    </div>
  </form>
</template>

<script>
import Title from '@/components/ui/Title';
export default {
  components: {
    'form-title': Title,
  },
  data() {
    return {
      title: 'Шаг 1 из 12',
    };
  },
};
</script>

<style scoped>
.button {
  border: none;
  padding: 0;
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
}

.button_next {
  width: 226px;
  height: 52px;
  background-color: #714dbd;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #fff;
}

.button_close-item {
  background-image: url(/button-close.svg);
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px 30px;
  background-color: rgba(0, 0, 0, 0);
}

.form {
  width: 920px;
  height: 600px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 40px;
}

.form__buttons {
  display: flex;
  align-items: center;
  margin-top: auto;
}

.form__content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
}

.form__fieldset {
  padding: 0;
  margin: 0;
  border: none;
  width: 100%;
}

.form__input {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.33;
  color: #666;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 10px;
  width: 100%;
}

.form__title {
  margin: 0;
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
