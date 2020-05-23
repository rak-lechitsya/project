<template>
  <div class="story-page">
    <story-content class="story__content">
      <section class="title title_desctop">
        <div class="title__image-wrapper">
          <img
            :src="`https://strapi.kruzhok.io${story.ImageUrl[0].url}`"
            alt=""
            class="title__image"
          />
        </div>
        <div class="title__container">
          <p class="title__content">
            <span class="title__content-name">{{ story.author }}: </span>
            <span class="title__content-text">«{{ story.title }}»</span>
          </p>
          <div class="title__footer">
            <p class="share" @click="toggleSocialPopup">
              Поделитесь &#8599;
            </p>
            <p class="title__date">{{ story.date }}</p>
          </div>
        </div>
      </section>
      <section class="title title_mobile">
        <div class="title__image-wrapper">
          <img alt="" class="title__image" />
        </div>
        <p class="title__content">
          <span class="title__content-name">{{ story.author }}: </span>
          <span class="title__content-text">«{{ story.title }}»</span>
        </p>
        <div class="title__footer">
          <p class="share" @click="toggleSocialPopup">
            Поделитесь &#8599;
          </p>
          <p class="title__date">{{ story.date }}</p>
        </div>
      </section>

      <section class="main">
        <p class="main__content" v-html="story.text"></p>
        <div class="main__share">
          <p class="share" @click="toggleSocialPopup">
            Поделитесь этой статьей в своих социальных сетях &#8599;
          </p>
        </div>
      </section>
      <stories-grid class="stories__list" />
      <nuxt-link to="/stories" class="stories__page">Больше статей</nuxt-link>
    </story-content>
  </div>
</template>

<script>
import Content from '@/components/ui/Content';
import StoriesGrid from '@/components/ui/StoriesGrid';
export default {
  components: {
    'story-content': Content,
    'stories-grid': StoriesGrid,
  },

  methods: {
    toggleSocialPopup() {
      this.$store.commit('popup/toggleSocialPopup');
    },
  },

  computed: {
    story() {
      return this.$store.getters['stories/getCurrentStory'];
    },
  },

  async fetch({ store, route }) {
    await store.dispatch('stories/fetchStoryWithId', { id: route.params.id });
    await store.dispatch('stories/fetchStoryArr');
  },

  data() {
    return {
      popupSocial: false,
    };
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}

.title__container {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  max-width: 680px;
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;
  margin-left: 60px;
}

.title__content {
  margin-top: 30px;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  color: #000;
}

.title__image-wrapper {
  margin-right: 40px;
  float: left;
  position: relative;
  width: 43.94%;
  padding-bottom: 43.94%;
}

.title__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.title__footer {
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  margin-bottom: 30px;
}

.share {
  color: #121212;
  cursor: pointer;
  transition: opacity 0.3s;
  width: fit-content;
  text-align: center;
}

.footer__share:hover {
  opacity: 0.8;
}

.main__content {
  max-width: 780px;
  margin: 130px auto 70px;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  color: #000;
}

.main__share {
  max-width: 1320px;
  min-height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 160px;
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;
}

.stories__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 40px;
  padding: 0;
  list-style-type: none;
}

.stories__page {
  margin: 70px auto 100px;
  max-width: 1320px;
  min-height: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  line-height: 20px;
  color: #000;
  background-color: #fbfbfb;
  transition: background-color 0.3s;
}

.stories__page:hover {
  background-color: #f8f8f8;
}

.share:hover {
  opacity: 0.8;
}

.stories__link {
  text-decoration: none;
}

.title_mobile {
  display: none;
}

@media screen and (max-width: 1350px) {
  .main__content {
    font-size: 20px;
    line-height: 28px;
    margin: 120px auto 60px;
  }

  .stories__list {
    grid-template-columns: repeat(auto-fill, 265px);
    grid-gap: 60px 40px;
  }

  .main__share {
    margin-bottom: 150px;
  }

  .stories__page {
    margin: 60px auto 90px;
  }

  .title__container {
    max-width: 602px;
  }

  .title__content {
    font-size: 34px;
    line-height: 44px;
  }
}

@media screen and (max-width: 1250px) {
  .main__content {
    font-size: 18px;
    line-height: 27px;
    margin: 90px auto 46px;
  }

  .stories__list {
    grid-template-columns: repeat(auto-fill, 208px);
    grid-gap: 46px 30px;
  }

  .main__share {
    margin-bottom: 120px;
    min-height: 72px;
  }

  .stories__page {
    margin: 46px auto 80px;
    min-height: 78px;
  }

  .title__container {
    max-width: 477px;
    margin-left: 40px;
  }

  .title__content {
    font-size: 30px;
    line-height: 38px;
  }

  .title__footer {
    font-size: 16px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 1000px) {
  .title {
    display: flex;
    flex-flow: column;
  }

  .stories__list {
    grid-template-columns: repeat(auto-fill, 216px);
    grid-gap: 40px 20px;
  }

  .title_mobile {
    padding-top: 20px;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
  }

  .title__content {
    order: 0;
    margin-bottom: 60px;
    margin-top: 0;
  }

  .title__footer {
    order: 2;
  }

  .title__image-wrapper {
    position: relative;
    width: 65.65%;
    padding-bottom: 65.65%;
    margin: 0 auto 60px;
    order: 1;
  }

  .main__content {
    margin: 100px auto 80px;
  }

  .stories__page {
    margin: 40px 0 80px;
    min-height: 50px;
  }

  .title_desctop {
    display: none;
  }

  @media screen and (max-width: 700px) {
    .main__content {
      font-size: 13px;
      line-height: 16px;
      margin: 40px auto;
    }

    .main__share {
      margin-bottom: 100px;
      min-height: 64px;
    }

    .title__content {
      margin-bottom: 30px;
      font-size: 18px;
      line-height: 21px;
    }

    .stories__list {
      grid-template-columns: repeat(auto-fill, 290px);
      grid-gap: 30px 20px;
    }

    .title {
      margin-top: 70px;
    }

    .title__footer {
      font-size: 13px;
      margin-bottom: 16px;
    }

    .stories__page {
      margin: 40px 0 50px;
    }

    .title__image-wrapper {
      width: 100%;
      padding-bottom: 100%;
      margin: 0 auto 30px;
    }
  }
}
</style>
