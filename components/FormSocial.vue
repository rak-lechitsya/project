<template>
  <form class="form" id="form" name="form" method="post" action="#">
    <h3 class="form__title">Поделитесь</h3>
    <div class="form__icons">
      <a class='form__link'><my-img class='form__img' src='/social-img/fb.svg' alt='Фэйсбук.' /></a>
      <a class='form__link'><my-img class='form__img' src='/social-img/twit.svg' alt='Фэйсбук.' /></a>
      <a class='form__link'><my-img class='form__img' src='/social-img/vk.svg' alt='Фэйсбук.' /></a>
      <a class='form__link'><my-img class='form__img' src='/social-img/ok.svg' alt='Фэйсбук.' /></a>
      <a class='form__link'><my-img class='form__img' src='/social-img/insta.svg' alt='Фэйсбук.' /></a>
      <a class='form__link'><my-img class='form__img' src='/social-img/yt.svg' alt='Фэйсбук.' /></a>
    </div>
  </form>
</template>

<script>
import SocialImage from '@/components/ui/SocialImage';
export default {
  components: {
    'my-img': SocialImage
  }
}
</script>

<style scoped>
.form {
  width: 840px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form__icons {
  width: 388px;
  margin: 106px auto 67px;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.form__link {
  cursor: pointer;
}

.form__title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.12;
  color: #000;
}

@media (max-width: 1350px) {
  .form {
    width: 720px;
  }
}

@media (max-width: 900px) {
  .form {
    width: 500px;
  }
}

@media (max-width: 620px) {
  .form {
    width: 350px;
  }

  .form__icons {
    width: 100%;
  }
}

@media (max-width: 450px) {
  .form {
    width: 260px;
  }

  .form__icons {
    margin: 57px auto 47px;
  }

  .form__img {
    width: 80%;
  }

  .form__title {
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
