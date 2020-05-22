<template>
  <div class="social">
    <h3 class="social__title">Поделитесь</h3>
    <div class="social__icons">
      <a class="social__link"
        ><my-img class="social__img" src="/social-img/fb.svg" alt="Facebook"
      /></a>
      <a class="social__link"
        ><my-img class="social__img" src="/social-img/twit.svg" alt="Twitter"
      /></a>
      <a class="social__link"
        ><my-img class="social__img" src="/social-img/vk.svg" alt="VK"
      /></a>
      <a class="social__link"
        ><my-img class="social__img" src="/social-img/ok.svg" alt="OK"
      /></a>
      <a class="social__link"
        ><my-img class="social__img" src="/social-img/insta.svg" alt="Instagram"
      /></a>
      <a class="social__link"
        ><my-img class="social__img" src="/social-img/yt.svg" alt="YouTube"
      /></a>
    </div>
  </div>
</template>

<script>
import SocialImage from '@/components/ui/SocialImage';
export default {
  components: {
    'my-img': SocialImage,
  },
};
</script>

<style scoped>
.social {
  width: 840px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social__icons {
  width: 388px;
  margin: 106px auto 67px;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.social__link {
  cursor: pointer;
}

.social__title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.12;
  color: #000;
}

@media (max-width: 1350px) {
  .social {
    width: 720px;
  }
}

@media (max-width: 900px) {
  .social {
    width: 500px;
  }
}

@media (max-width: 620px) {
  .social {
    width: 350px;
  }

  .social__icons {
    width: 100%;
  }
}

@media (max-width: 450px) {
  .social {
    width: 260px;
  }

  .social__icons {
    margin: 57px auto 47px;
  }

  .social__img {
    width: 80%;
  }

  .social__title {
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
