<template>
  <div>
    <section class="title">
      <img :src="storyArr[0].url" alt="" class="title__image" />
      <div class="title__container">
        <p class="title__content">
          <span class="title__content-name">{{ storyArr[0].name }}: </span
          ><span class="title__content-text">«{{ storyArr[0].content }}»</span>
        </p>
        <div class="title__footer">
          <p class="share" @click="$emit('clickSocial')">Поделитесь &#8599;</p>
          <p class="title__date">{{ storyArr[0].date }}</p>
        </div>
      </div>
    </section>

    <section class="main">
      <p class="main__content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt similique
        totam nesciunt atque dolores enim deleniti autem quisquam sit! Dolorum
        nemo accusantium dignissimos recusandae autem vel cupiditate ut adipisci
        asperiores?
      </p>
      <div class="main__share">
        <p class="share" @click="$emit('clickSocial')">
          Поделитесь этой статьей в своих социальных сетях &#8599;
        </p>
      </div>
    </section>

    <story-content class="story__content">
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
.title {
  display: flex;
  justify-content: space-between;
  max-width: 1320px;
  margin: 100px auto 0;
}

.title__container {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  max-width: 680px;
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;
}

.title__content {
  margin-top: 30px;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  color: #000;
}

.title__image {
  display: flex;
  width: 580px;
  height: 580px;
  object-fit: cover;
}

.title__footer {
  display: flex;
  justify-content: space-between;
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
</style>
