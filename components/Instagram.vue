<template>
  <div class="instagram">
        <instagram-content class = "instagram__content">
    <div class="instagram__container">
      <div class="instagram__text">
        <h3 class="instagram__title">Инстаграм</h3>
        <p class="instagram__subtitle">Два раза в неделю мы просматриваем все посты по хештегу #этонелечится. 
        Все истории, где нет нецензурных выражений и запрещенного контента попадают сюда. 
        Следите за правильным написанием хештега, чтобы мы не пропустили вашу историю.</p>
      </div>
      <ul class="instagram__pictures">
        <li v-for="pic in instaArr" :key="pic.id" class="instagram__item">
        <nuxt-link to="#"  class="instagram__link"><insta-item :url='pic.url' /></nuxt-link>
      </li>
      </ul>
    </div>
    </instagram-content>
  </div>
</template>

<script>
import Content from '@/components/ui/Content';
import InstaItem from '@/components/ui/InstaItem';
export default {
  components: {
    'insta-item': InstaItem,
    'instagram-content': Content,
  },
  data() {
    return {
      InstaItem:'',
      instaArr: [
        {
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
        {
          url: 'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg'
        },
        {
          url: 'https://static.tildacdn.com/tild6466-3937-4564-a561-383966623266/noroot.png'
        },
        {
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
        {
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
        {
          url: 'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg'
        },
        {
          url: 'https://static.tildacdn.com/tild6466-3937-4564-a561-383966623266/noroot.png'
        },
        {
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
      ],
    };
  },
};
</script>

<style scoped>
.instagram {
  margin: 0 auto;
  padding: 90px 60px 100px;
  background-color: white;
  color: black;
}

.instagram__container {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}

.instagram__title {
  text-decoration: underline;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 32px;
  margin-top: 0;
  color: black;
}

.instagram__subtitle {
  max-width: 343px;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.instagram__pictures {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  list-style: none;
  padding-left: 0;
}

@media (max-width: 1439px) {
  .instagram__pictures {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 1150px) {
  .instagram__pictures {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 910px) {
  .instagram__pictures {
    grid-template-columns: 1fr;
  }
}

</style>
