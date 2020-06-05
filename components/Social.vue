<template>
  <section class="social">
    <div class="social__content">
      <h3 class="social__title">Поделитесь</h3>
      <div class="social__icons">
        <a
          v-for="share in shares"
          :key="share.url"
          class="social__link"
          target="_blank"
          :href="share.url"
          :style="`background-image: url('${share.img}')`"
        >
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import SocialImage from '@/components/ui/SocialImage';
export default {
  components: {
    'my-img': SocialImage,
  },
  data() {
    return {
      shares: [
        {
          name: 'facebook',
          url: `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(
            window.location.href
          )}&title=${document.querySelector('title').innerText}`,
          img: '/social-img/fb.svg',
        },
        {
          name: 'twitter',
          url: `https://twitter.com/intent/tweet?text=${
            document.querySelector('title').innerText
          }&url=${encodeURI(window.location.href)}`,
          img: '/social-img/twit.svg',
        },
        {
          name: 'vkontakte',
          url: `https://vk.com/share.php?url=${encodeURI(
            window.location.href
          )}&title=${document.querySelector('title').innerText}`,
          img: '/social-img/vk.svg',
        },
        {
          name: 'odnoklassniki',
          url: `https://connect.ok.ru/offer?url=${encodeURI(
            window.location.href
          )}&amp;title=${document.querySelector('title').innerText}`,
          img: '/social-img/ok.svg',
        },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/raklechitsa/',
          img: '/social-img/insta.svg',
        },
        {
          name: 'youtube',
          url:
            'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
          img: '/social-img/yt.svg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.social {
  width: 920px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social__content {
  padding: 40px;
  width: 100%;
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
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 32px;
  height: 32px;
}

.social__title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.12;
  color: #000;
  text-align: center;
}

@media (max-width: 1350px) {
  .social {
    width: 800px;
  }
}

@media (max-width: 900px) {
  .social {
    width: 580px;
  }
}

@media (max-width: 620px) {
  .social {
    width: 430px;
  }

  .social__icons {
    width: 100%;
  }
}

@media (max-width: 450px) {
  .social {
    width: 290px;
  }

  .social__content {
    padding: 15px;
  }

  .social__icons {
    margin: 57px auto 47px;
  }

  .social__link {
    width: 24px;
    height: 24px;
  }

  .social__title {
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
