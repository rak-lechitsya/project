<template>
  <div class="instagram">
    <instagram-content class="instagram__content">
      <div class="instagram__text">
        <h3 class="instagram__title">
          <a
            href="https://www.instagram.com/raklechitsa/"
            target="_blank"
            class="instagram__title-link"
            >{{ blockArr[5].title }}</a
          >
        </h3>
        <client-only
          ><p class="instagram__subtitle" v-html="blockArr[5].text"></p
        ></client-only>
      </div>
      <ul class="instagram__pictures">
        <li v-for="pic in instaArr" :key="pic.id" class="instagram__item">
          <a href="#" target="_blank" class="instagram__link"
            ><insta-item :url="pic.url"
          /></a>
        </li>
      </ul>
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
  computed: {
    blockArr() {
      return this.$store.getters['blocks/getBlockArr'];
    },
  },
  data() {
    return {
      InstaItem: '',
      instaArr: [
        {
          url:
            'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg',
        },
        {
          url:
            'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
        },
        {
          url:
            'https://static.tildacdn.com/tild6466-3937-4564-a561-383966623266/noroot.png',
        },
        {
          url:
            'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg',
        },
        {
          url:
            'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg',
        },
        {
          url:
            'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
        },
        {
          url:
            'https://static.tildacdn.com/tild6466-3937-4564-a561-383966623266/noroot.png',
        },
        {
          url:
            'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.instagram {
  margin: 0 auto;
  padding: 90px 0px 100px;
  background-color: white;
  color: black;
}

.instagram__content {
  display: flex;
  justify-content: space-between;
}

.instagram__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 32px;
  margin-top: 0;
  color: black;
}

.instagram__title-link {
  color: black;
  transition: opacity 0.3s;
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

.instagram__title-link:hover {
  opacity: 0.8;
}

@media (max-width: 1350px) {
  .instagram {
    padding: 90px 0;
  }
  .instagram__pictures {
    grid-gap: 27px;
  }
  .insta__image {
    width: 171px;
    height: 171px;
  }
  .instagram__title {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 30px;
  }
  .instagram__subtitle {
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
}

@media (max-width: 1250px) {
  .instagram {
    padding: 80px 0px;
  }
  .instagram__pictures {
    grid-gap: 20px;
  }
  .insta__image {
    width: 136px;
    height: 136px;
  }
  .instagram__title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 20px;
  }
  .instagram__subtitle {
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
  }
}

@media (max-width: 1000px) {
  .instagram__content {
    flex-direction: column;
    align-items: center;
  }
  .insta__image {
    width: 157px;
    height: 157px;
  }
  .instagram__title {
    margin-bottom: 26px;
    text-align: center;
  }
  .instagram__subtitle {
    max-width: 380px;
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 60px;
  }
}

@media (max-width: 700px) {
  .instagram {
    padding: 60px 0 50px;
  }
  .insta__image {
    width: 140px;
    height: 140px;
  }
  .instagram__pictures {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 10px;
  }
  .instagram__title {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 26px;
    text-align: left;
  }
  .instagram__subtitle {
    max-width: 290px;
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 40px;
  }
}
</style>
