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
      <pages class="stories__menu"></pages>
    </story-content>
  </section>

</template>

<script>
import Story from '@/components/ui/Story';
import Content from '@/components/ui/Content';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Pages from '@/components/ui/Pages';
export default {
  components: {
    story: Story,
    pages: Pages,
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
                {
          id: '9',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
                {
          id: '10',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
               {
          id: '11',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
                {
          id: '12',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
               {
          id: '13',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
                {
          id: '14',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
               {
          id: '15',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: 'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg'
        },
                {
          id: '16',
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
.stories__menu {
    margin-top: 140px;
    display: flex;
    justify-content: center;
    margin-bottom:100px;
}
.button_search {
  width: 226px;
}

@media (max-width: 1350px) {
  .button_search {
    height: 48px;
  }
}

@media (max-width: 1350px) {
  .stories__form-button {
    margin-bottom: 60px;
    width: 934px;
    height: 48px;
  }
}

@media (max-width: 1350px) {
  .stories__heading {
margin: 90px 0 60px;
font-size: 28px;
line-height: 32px;
  }
}

@media (max-width: 1350px) {
  .stories__page {
margin-bottom: 90px;
margin-top: 60px;
  }
}
@media (max-width: 1350px) {
  .stories__list {
grid-template-columns: repeat(auto-fill, 265px);
grid-gap: 60px 40px ;
  }
}

@media (max-width: 1250px) {
  .stories__list {
grid-template-columns: repeat(auto-fill, 208px);
grid-gap: 46px 30px;
  }
}

@media (max-width: 1250px) {
  .stories__form-button {
    margin-bottom: 46px;
    width: 696px;
    height: 46px;
  }
}

@media (max-width: 1250px) {
  .button_search {
    margin-bottom: 46px;
    width: 208px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media (max-width: 1250px) {
  .stories__heading {
margin: 80px 0 46px;
font-size: 24px;
line-height: 28px;
max-width: 288px;
  }
}

@media (max-width: 1250px) {
  .stories__page {
margin-bottom: 80px;
margin-top: 46px;
font-size: 13px;
line-height: 20px;
  }
}

@media (max-width: 1000px) {
  .stories__form-button {
    margin-bottom: 60px;
    width: 460px;
    height: 46px;
  }
}

@media (max-width: 1000px) {
  .stories__list {
grid-template-columns: repeat(auto-fill, 216px);
grid-gap: 40px 20px;
  }
}

@media (max-width: 1000px) {
  .stories__heading {
margin: 80px auto 50px;
text-align: center;
  }
}

@media (max-width: 1000px) {
  .stories__page {
margin-bottom: 80px;
margin-top: 40px;
  }
}

@media (max-width: 700px) {
  .stories__page {
margin-bottom: 50px;
  }
}

@media (max-width: 700px) {
  .stories__form-button {
    margin-bottom: 30px;
    width: 238px;
    height: 46px;
  }
}

@media (max-width: 700px) {
  .stories__heading {
    margin: 50px auto 40px;
    font-size: 18px;
    line-height: 21px;
    text-align: inherit;
  }
}

@media (max-width: 700px) {
  .button_search {
    width: 46px;
    background-image: url(/search.svg);
  }
}

@media (max-width: 700px) {
  .stories__list {
grid-template-columns: repeat(auto-fill, 290px);
grid-gap: 30px 20px;
  }
}

</style>
