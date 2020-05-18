<template>
  <footer class='footer'>
    <my-content class='footer__content'>
      <div class='footer__menu'>
        <h3 class="footer__title">Спасибо всем, кто помог состояться этому проекту</h3>
        <my-menu class='footer__links' />
        <nav class='footer__links-social'>
          <p>Мы в <a class='link link_social' href='https://www.instagram.com/raklechitsa/' target='_blank'>Инстаграме</a> и <a class='link link_social' href='https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F' target='_blank'> Youtube</a></p>
          <p class='footer__share' @click="$emit('clickSocial')" >Поделитесь &#8599;</p>
        </nav>
      </div>
      <div class='footer__author'>
        <p class = 'footer__year'>Рак лечится {{year}}</p>
        <p>Сделано студентами <a class='link link_author' href='https://praktikum.yandex.ru/' target='_blank'>Яндекс Практикум</a></p>
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
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>

<style scoped>
.footer {
  padding: 60px;
  width: 100%;
  background-color: #FBFBFB;
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

.footer__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.link {
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.33;
  color: #000;
  transition: opacity .3s;
}

.link:hover {
  opacity: .8;
}

.link_author {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
  text-decoration: underline;
}

.link_social {
  text-decoration: underline;
}

.footer__share {
  margin-top: 44px;
  color: #121212;
  cursor: pointer;
  transition: opacity .3s;
  width: fit-content;
}

.footer__share:hover {
  opacity: .8;
}

@media (min-width : 320px) and (max-width : 744px) {
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

@media (min-width : 745px) and (max-width : 879px) {
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

@media (min-width : 880px) and (max-width : 1199px) {
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

@media (min-width : 1200px) and (max-width : 1280px) {
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
