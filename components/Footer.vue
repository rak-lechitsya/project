<template>
  <footer class='footer'>
    <div class='footer__content'>
      <div class='footer__menu'>
        <footer-title :title="title" class="footer__title" />
        <nav class='footer__links'>
          <a class='link' href='#'>Главная</a>
          <a class='link link_stories' href='#'>Истории</a>
        </nav>
        <nav class='footer__links_social'>
          <p>Мы в <a class='link' href='https://www.instagram.com/raklechitsa/' target='_blank'>Инстаграме</a> и <a class='link' href='https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F' target='_blank'> Youtube</a></p>
          <a class='link link_share' href='#'>Поделитесь &#8599;</a>
        </nav>
      </div>
      <div class='footer__author'>
        <p>Рак лечится 2020</p>
        <p>Сделано студентами Яндекс Практикум</p>
      </div>
    </div>
  </footer>
</template>

<script>
import Title from '@/components/ui/Title';
export default {
  components: {
    'footer-title': Title,
  },
  data() {
    return {
      title: 'Спасибо всем, кто помог состояться этому проекту',
    };
  },
};
</script>

<style scoped>
.footer {
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
  max-width: 1440px;
  height: 356px;
  margin: 0 auto;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer__links {
  margin-left: 113px;
  display: flex;
}

.footer__links_social {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 60px;
}

.footer__menu {
  display: flex;
}

.footer__title {
  max-width: 340px;
  margin: 0;
}

.link {
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.33;
  color: #000;
  transition: opacity .5s;
}

.link:hover {
  opacity: .5;
}

.link_share {
  margin-top: 44px;
}

.link_stories {
  margin-left: 40px;
}
</style>
