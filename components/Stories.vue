<template>
  <section class="stories">
    <story-title :title='title' class="stories__heading" />
    <ul class="stories__list">
      <li v-for="card in storyArr" :key="card.id" class="story__item">
        <story :url='card.url' :name='card.name' :content='card.content'/>
        </li>
    </ul>
    <div class="stories__container-page"><nuxt-link to="/stories" class="stories__page">Больше статей</nuxt-link></div>
  </section>

</template>

<script>
import Story from '@/components/Story';
import Title from '@/components/ui/Title';
export default {
  components: {
    story: Story,
    'story-title': Title,
  },
  data () {
    return {
      title: 'Истории неизлечимых привычек',
      storyArr: [
        {
          id: '1',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: '#'
        },
        {
          id: '2',
          name: 'Владимир Познер',
          content: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          url: '#'
        },
        {
          id: '3',
          name: 'Александр Тарханов',
          content: 'Я не могу победить свою пунктуальность в отличии от рака.',
          url: '#'
        },
        {
          id: '4',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: '#'
        },
        {
          id: '5',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: '#'
        },
        {
          id: '6',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: '#'
        },
        {
          id: '7',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: '#'
        },
        {
          id: '8',
          name: 'Владимир Тен',
          content: 'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          url: '#'
        },
      ]
    }
  },
};
</script>

<style scoped>

.stories {
  max-width: 1320px;
  margin: 0 auto;
}

.stories__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 40px 40px;
  padding: 0;
  list-style-type: none;
}

.stories__heading {
  margin: 100px 0 70px;
  padding: 0;
  max-width: 410px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
}

.stories__container-page {
  display: flex;
  max-width: 1320px;
  min-height: 82px;
  background-color: #fbfbfb;
  margin: 70px auto 100px;
}

.stories__page {
  display: block;
  width: 200px;
  text-align: center;
  margin: auto;
  text-decoration: none;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #000;
}


</style>
