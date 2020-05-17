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
  margin: 108px auto 68px;
  display: flex;
  align-items: center;
}

.form__link {
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
}

.form__title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.12;
  color: #000;
}
</style>
