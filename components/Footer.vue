<template>
  <footer class="footer">
    <my-content class="footer__content">
      <div class="footer__menu">
        <h3 class="footer__title">{{ blockFooter.title }}</h3>
        <my-menu class="footer__links" />
        <div class="footer__links-social">
          <p>
            Мы в
            <a class="link link_social" :href="instUrl" target="_blank"
              >Инстаграме</a
            >
            и
            <a class="link link_social" :href="youtubeUrl" target="_blank">
              Youtube</a
            >
          </p>
          <p class="footer__share" @click="toggleSocialPopup">
            Поделитесь &#8599;
          </p>
        </div>
      </div>
      <div class="footer__author">
        <div class="footer__container">
          <p class="footer__year" v-html="blockFooter.text" />
          <p class="footer__year year">{{ year }}</p>
        </div>
        <p>
          Сделано студентами
          <a
            class="link link_author"
            href="https://praktikum.yandex.ru/"
            target="_blank"
            >Яндекс Практикум</a
          >
        </p>
      </div>
    </my-content>
  </footer>
</template>

<script>
import Content from '@/components/ui/Content';
import Menu from '@/components/ui/Menu';
export default {
  components: {
    'my-content': Content,
    'my-menu': Menu,
  },
  computed: {
    blockArr() {
      return this.$store.getters['blocks/getBlockArr'];
    },
    blockFooter() {
      return this.blockArr.find(el => el.block === 'footer');
    },
  },
  methods: {
    toggleSocialPopup() {
      this.$store.commit('popup/toggleSocialPopup');
    },
  },
  data() {
    return {
      year: new Date().getFullYear(),
      instUrl: process.env.INST_URL,
      youtubeUrl: process.env.YOUTUBE_URL,
    };
  },
};
</script>

<style scoped>
.footer {
  padding: 60px;
  width: 100%;
  background-color: #fbfbfb;
}

.footer__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer__menu {
  display: flex;
  margin-bottom: 110px;
}

.footer__title {
  max-width: 340px;
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: black;
}

.footer__links {
  margin-left: 113px;
  align-items: flex-start;
}

.footer__links-social {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 60px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.33;
  color: #000;
}

.footer__share {
  margin-top: 44px;
  color: #121212;
  cursor: pointer;
  transition: opacity 0.3s;
  width: fit-content;
}

.footer__author {
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1;
  color: #898989;
}

.footer__container {
  display: flex;
}

.link {
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.33;
  color: #000;
  transition: opacity 0.3s;
}

.link_social {
  text-decoration: underline;
}

.link_author {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
  text-decoration: underline;
}

.year {
  margin-left: 6px;
}

.footer__share:hover {
  opacity: 0.8;
}

.link:hover {
  opacity: 0.8;
}

@media (max-width: 700px) {
  .footer {
    padding: 50px 15px 50px;
    width: 100%;
  }

  .footer__content {
    max-width: 290px;
  }
  .footer__menu {
    flex-direction: column;
  }

  .footer__author {
    font-size: 13px;
    display: block;
  }

  .footer__links {
    margin-left: 0;
  }

  .footer__links {
    flex-direction: column;
    margin-bottom: 18px;
  }

  .footer__links-social {
    margin: 0;
    font-size: 13px;
    line-height: 15px;
  }

  .footer__menu {
    margin-bottom: 50px;
  }

  .footer__title {
    max-width: 268px;
    margin-bottom: 50px;
    font-size: 18px;
    line-height: 21px;
  }

  .link {
    font-size: 13px;
    line-height: 15px;
  }

  .footer__share {
    margin-top: 18px;
  }

  .footer__year {
    margin-bottom: 10px;
  }

  .footer__links /deep/ .menu__link {
    margin-bottom: 14px;
    font-size: 13px;
    line-height: 15px;
  }

  .footer__links /deep/ .menu__link:last-child {
    margin-bottom: 0px;
  }
}

@media (min-width: 701px) and (max-width: 1000px) {
  .footer {
    padding: 50px;
    width: 100%;
  }

  .footer__author {
    font-size: 16px;
  }

  .footer__links {
    margin-left: 30px;
  }

  .footer__links {
    flex-direction: column;
  }

  .footer__links-social {
    margin-right: 0;
    font-size: 16px;
    line-height: 24px;
  }

  .footer__menu {
    margin-bottom: 90px;
  }

  .footer__title {
    max-width: 268px;
    font-size: 24px;
    line-height: 28px;
  }

  .link {
    font-size: 16px;
    line-height: 24px;
  }

  .footer__links /deep/ .menu__link {
    margin-bottom: 14px;
    font-size: 16px;
  }

  .footer__links /deep/ .menu__link:last-child {
    margin-bottom: 0px;
  }
}

@media (min-width: 1001px) and (max-width: 1250px) {
  .footer {
    padding: 50px;
    width: 100%;
  }

  .footer__author {
    font-size: 16px;
  }

  .footer__links {
    margin-left: 30px;
  }

  .footer__links-social {
    margin-right: 0;
    font-size: 16px;
    line-height: 24px;
  }

  .footer__menu {
    margin-bottom: 90px;
  }

  .footer__title {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }

  .link {
    font-size: 16px;
    line-height: 24px;
  }
}

@media (min-width: 1251px) and (max-width: 1350px) {
  .footer {
    padding: 50px;
    width: 100%;
  }

  .footer__author {
    font-size: 16px;
  }

  .footer__links {
    margin-left: 102px;
  }

  .footer__links-social {
    margin-right: 50px;
    font-size: 16px;
    line-height: 24px;
  }

  .footer__menu {
    margin-bottom: 104px;
  }

  .footer__title {
    max-width: 305px;
    font-size: 28px;
    line-height: 32px;
  }

  .link {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
