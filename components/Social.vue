<template>
  <div class="social">
    <h3 class="social__title">Поделитесь</h3>
    <div class="social__icons">
      <a
        class="social__link"
        target="_blank"
        href="https://www.facebook.com/sharer.php?src=sp&u=https%3A%2F%2Fraklechitsa.ru%2F&title=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&utm_source=share2"
        ><my-img class="social__img" src="/social-img/fb.svg" alt="Facebook"
      /></a>
      <a
        class="social__link"
        target="_blank"
        href="https://twitter.com/intent/tweet?text=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&url=https%3A%2F%2Fraklechitsa.ru%2F&utm_source=share2"
        ><my-img class="social__img" src="/social-img/twit.svg" alt="Twitter"
      /></a>
      <a
        class="social__link"
        target="_blank"
        href="https://vk.com/share.php?url=https%3A%2F%2Fraklechitsa.ru%2F&title=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&utm_source=share2"
        ><my-img class="social__img" src="/social-img/vk.svg" alt="VK"
      /></a>
      <a
        class="social__link"
        target="_blank"
        href="https://connect.ok.ru/offer?url=https%3A%2F%2Fraklechitsa.ru%2F&title=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&utm_source=share2"
        ><my-img class="social__img" src="/social-img/ok.svg" alt="OK"
      /></a>
      <a
        class="social__link"
        target="_blank"
        href="https://www.instagram.com/raklechitsa/"
        ><my-img class="social__img" src="/social-img/insta.svg" alt="Instagram"
      /></a>
      <a
        class="social__link"
        target="_blank"
        href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
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
