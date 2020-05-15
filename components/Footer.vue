<template>
  <footer class='footer'>
    <my-content class='footer__content'>
      <div class='footer__menu'>
        <h3 class="footer__title">Спасибо всем, кто помог состояться этому проекту</h3>
        <my-menu class='footer__links' />
        <nav class='footer__links-social'>
          <p>Мы в <a class='link link_social' href='https://www.instagram.com/raklechitsa/' target='_blank'>Инстаграме</a> и <a class='link link_social' href='https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F' target='_blank'> Youtube</a></p>
          <a class='link link_share' href='#'>Поделитесь &#8599;</a>
        </nav>
      </div>
      <div class='footer__author'>
        <p>Рак лечится {{year}}</p>
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
  line-height: 1;
  color: #898989;
  text-decoration: underline;
}

.link_social {
  text-decoration: underline;
}

.link_share {
  margin-top: 44px;
  color: #121212;
}

.link_stories {
  margin-left: 40px;
}
</style>
