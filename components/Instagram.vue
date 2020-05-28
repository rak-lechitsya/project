<template>
  <div class="instagram">
    <instagram-content class="instagram__content">
      <div class="instagram__text">
        <h3 class="instagram__title">
          <a
            href="https://www.instagram.com/raklechitsa/"
            target="_blank"
            class="instagram__link_title"
            >{{ blockInstagram.title }}</a
          >
        </h3>
        <client-only
          ><p class="instagram__subtitle" v-html="blockInstagram.text"></p
        ></client-only>
      </div>
      <ul class="instagram__grid">
        <li
          v-for="photo in relevantInstagram"
          :key="relevantInstagram.indexOf(photo)"
          class="instagram__item"
        >
          <a :href="photo.url" target="_blank" class="instagram__link_photo">
            <img :src="photo.display_url" class="instagram__photo" />
          </a>
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
    blockInstagram() {
      return this.blockArr.find(el => el.block === 'instagram');
    },
    instagramArr() {
      const { instagram } = this.$store.state;
      return instagram.instagram;
    },
    relevantInstagram() {
      let copyArr = this.instagramArr.slice(0);
      let relevantInstagram = [];
      return (relevantInstagram = copyArr.splice(this.start, this.limit));
    },
  },
  data() {
    return {
      start: 0,
      limit: 8,
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

.instagram__link_title {
  color: black;
  transition: opacity 0.3s;
}

.instagram__subtitle {
  max-width: 343px;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.instagram__grid {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 30px;
  padding: 0;
  list-style: none;
  padding-left: 0;
}

.instagram__item {
  max-width: 195px;
  transition: all 0.4s;
}

.instagram__link_photo {
  display: block;
  position: relative;
  height: 100%;
}

.instagram__item:hover {
  transform: scale(1.1);
}

.instagram__photo {
  max-height: 195px;
  width: 100%;
  object-fit: cover;
}

.instagram__link_title:hover {
  opacity: 0.8;
}

@media (max-width: 1350px) {
  .instagram {
    padding: 90px 0;
  }
  .instagram__grid {
    grid-gap: 27px;
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
  .instagram__item {
    max-width: 171px;
  }
  .instagram__photo {
    max-height: 171px;
  }
}

@media (max-width: 1250px) {
  .instagram {
    padding: 80px 0px;
  }
  .instagram__grid {
    grid-gap: 20px;
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
  .instagram__item {
    max-width: 136px;
  }
  .instagram__photo {
    max-height: 136px;
  }
}

@media (max-width: 1000px) {
  .instagram__content {
    flex-direction: column;
    align-items: center;
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
  .instagram__item {
    max-width: 157px;
  }
  .instagram__photo {
    max-height: 157px;
  }
}

@media (max-width: 700px) {
  .instagram {
    padding: 60px 0 50px;
  }
  .instagram__grid {
    grid-template-columns: repeat(2, auto);
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
  .instagram__item {
    max-width: 140px;
  }
  .instagram__photo {
    max-height: 140px;
  }
}
</style>
