<template>
  <section class="stories">
    <story-content class="story__content">
      <h3 class="stories__heading">Истории неизлечимых привычек</h3>
      <div class = "stories__box">
      <input-stories v-model="storiesName" addClass='stories__form-button'></input-stories>
      <input-button class='button button_search' :text='textButtonForm'></input-button>
      </div>
      <ul class="stories__list">
        <li v-for="card in storyArr" :key="card.id" class="story__item">
          <nuxt-link to="/stories/card.id"  class="stories__link"><story :url='card.url' :name='card.name' :content='card.content'/></nuxt-link>
        </li>
      </ul>
      <nuxt-link to="/stories" class="stories__page">Больше статей</nuxt-link>
    </story-content>
  </section>

</template>

<script>
import Story from '@/components/ui/Story';
import Content from '@/components/ui/Content';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
export default {
  components: {
    story: Story,
    'input-stories': Input,
    'story-content': Content,
    'input-button': Button,
    
  },
  data () {
    return {
      textButtonForm: 'Поиск',
      storiesName: '',
      storyArr: [
        {
          id: '1',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
        {
          id: '2',
          name: 'Владимир Познер',
          content: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          url: 'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg'
        },
        {
          id: '3',
          name: 'Александр Тарханов',
          content: 'Я не могу победить свою пунктуальность в отличии от рака.',
          url: 'https://static.tildacdn.com/tild6466-3937-4564-a561-383966623266/noroot.png'
        },
        {
          id: '4',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
        {
          id: '5',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
        {
          id: '6',
          name: 'Владимир Познер',
          content: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          url: 'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg'
        },
        {
          id: '7',
          name: 'Александр Тарханов',
          content: 'Я не могу победить свою пунктуальность в отличии от рака.',
          url: 'https://static.tildacdn.com/tild6466-3937-4564-a561-383966623266/noroot.png'
        },
        {
          id: '8',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
      ]
    }
  },
};
</script>

<style scoped>

.stories__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 40px 40px;
  padding: 0;
  list-style-type: none;
}

.stories__heading {
  margin: 100px 0 60px;
  padding: 0;
  max-width: 410px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
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
  transition: background-color .3s;
}

.stories__page:hover {
  background-color: #F8F8F8;
}
.stories__box {
      display: flex;
    width: 100%;
    justify-content: space-between;
}
.stories__link {
  text-decoration: none;
}
.stories__form-button {
  border: 1px solid #E8E8E8;
  margin-bottom: 70px;
  width: 1074px;
  height: 52px;
}
.button_search {
  width: 226px;
}
</style>
