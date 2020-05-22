<template>
  <section class="stories">
    <stories-content class="stories__content">
      <h3 class="stories__heading">Истории неизлечимых привычек</h3>
      <ul class="stories__list">
        <li v-for="card in storyArr" :key="card.id" class="stories__item">
          <story
            :url="card.url"
            :name="card.name"
            :content="card.content"
            @storyClick="goToStory(card.id)"
          />
        </li>
      </ul>
      <nuxt-link to="/stories" class="stories__page">Больше статей</nuxt-link>
    </stories-content>
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
    'stories-content': Content,
    'input-button': Button,
  },
  methods: {
    goToStory(id) {
      this.$router.push(`/stories/${id}`);
    },
  },
  computed: {
    storyArr() {
      return this.$store.getters['stories/getStoryArr'];
    },
  },
  data() {
    return {
      textButtonForm: 'Поиск',
      storiesName: '',
    };
  },
};
</script>

<style scoped>
.stories__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 70px 40px;
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
.stories__box {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.stories__link {
  text-decoration: none;
}
.stories__form-button {
  border: 1px solid #e8e8e8;
  margin-bottom: 70px;
  width: 1074px;
  height: 52px;
}
.button_search {
  width: 226px;
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
    grid-gap: 60px 40px;
  }
}

@media (max-width: 1250px) {
  .stories__list {
    grid-template-columns: repeat(auto-fill, 208px);
    grid-gap: 46px 30px;
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
  .stories__list {
    grid-template-columns: repeat(auto-fill, 216px);
    grid-gap: 40px 20px;
  }
}

@media (max-width: 1000px) {
  .stories__heading {
    margin: 80px auto 60px;
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
  .stories__heading {
    margin: 50px auto 40px;
    font-size: 18px;
    line-height: 21px;
    text-align: inherit;
  }
}

@media (max-width: 700px) {
  .stories__list {
    grid-template-columns: repeat(auto-fill, 290px);
    grid-gap: 30px 20px;
  }
}
</style>
