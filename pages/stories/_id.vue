<template>
  <div>
    <story-content class="story__content">
      <section class="title title_desctop">
        <div class="title__image-wrapper">
          <img :src="storyArr[0].url" alt="" class="title__image" />
        </div>
        <div class="title__container">
          <p class="title__content">
            <span class="title__content-name">{{ storyArr[0].name }}: </span>
            <span class="title__content-text">«{{ storyArr[0].content }}»</span>
          </p>
          <div class="title__footer">
            <p class="share" @click="$emit('clickSocial')">
              Поделитесь &#8599;
            </p>
            <p class="title__date">{{ storyArr[0].date }}</p>
          </div>
        </div>
      </section>
      <section class="title title_mobile">
        <div class="title__image-wrapper">
          <img :src="storyArr[0].url" alt="" class="title__image" />
        </div>
        <p class="title__content">
          <span class="title__content-name">{{ storyArr[0].name }}: </span>
          <span class="title__content-text">«{{ storyArr[0].content }}»</span>
        </p>
        <div class="title__footer">
          <p class="share" @click="$emit('clickSocial')">
            Поделитесь &#8599;
          </p>
          <p class="title__date">{{ storyArr[0].date }}</p>
        </div>
      </section>

      <section class="main">
        <p class="main__content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          similique totam nesciunt atque dolores enim deleniti autem quisquam
          sit! Dolorum nemo accusantium dignissimos recusandae autem vel
          cupiditate ut adipisci asperiores?
        </p>
        <div class="main__share">
          <p class="share" @click="$emit('clickSocial')">
            Поделитесь этой статьей в своих социальных сетях &#8599;
          </p>
        </div>
      </section>

      <ul class="stories__list">
        <li v-for="card in storyArr" :key="card.id" class="story__item">
          <nuxt-link to="/stories/card.id" class="stories__link"
            ><story :url="card.url" :name="card.name" :content="card.content"
          /></nuxt-link>
        </li>
      </ul>
      <nuxt-link to="/stories" class="stories__page">Больше статей</nuxt-link>
    </story-content>
  </div>
</template>

<script>
import Story from '@/components/ui/Story';
import Content from '@/components/ui/Content';
export default {
  components: {
    story: Story,
    'story-content': Content,
  },
  data() {
    return {
      storyArr: [
        {
          id: '1',
          name: 'Владимир Тен',
          content:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url:
            'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg',
          date: '20 апреля 2018',
        },
        {
          id: '2',
          name: 'Владимир Познер',
          content: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          url:
            'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
        },
        {
          id: '3',
          name: 'Александр Тарханов',
          content: 'Я не могу победить свою пунктуальность в отличии от рака.',
          url:
            'https://static.tildacdn.com/tild6466-3937-4564-a561-383966623266/noroot.png',
        },
        {
          id: '4',
          name: 'Владимир Тен',
          content:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url:
            'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.story__content {
  max-width: 1440px;
  padding: 0 60px 0;
}

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
  grid-gap: 40px 40px;
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

.stories__link {
  text-decoration: none;
}

.title_mobile {
  display: none;
}

@media screen and (max-width: 1280px) {
  .main__content {
    font-size: 20px;
    line-height: 28px;
  }

  .story__content {
    padding: 0 50px 0;
  }

  .title__container {
    max-width: 602px;
  }

  .title__content {
    font-size: 34px;
    line-height: 44px;
  }
}

@media screen and (max-width: 1024px) {
  .main__content {
    font-size: 18px;
    line-height: 27px;
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

@media screen and (max-width: 768px) {
  .title {
    display: flex;
    flex-flow: column;
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

  .story__content {
    padding: 0 64px 0;
  }

  .main__content {
    margin: 100px auto 80px;
  }

  .main__share {
    margin-bottom: 120px;
  }

  .stories__page {
    margin: 40px 0 80px;
  }

  .title_desctop {
    display: none;
  }

  @media screen and (max-width: 420px) {
    .main__content {
      font-size: 13px;
      line-height: 16px;
    }

    .title__content {
      font-size: 18px;
      line-height: 21px;
    }

    .title__footer {
      font-size: 13px;
      margin-bottom: 16px;
    }

    .story__content {
      padding: 0 15px 0;
    }

    .title__image-wrapper {
      width: 100%;
      padding-bottom: 100%;
    }
  }
}
</style>
