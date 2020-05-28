<template>
  <section class="stories" ref="stories">
    <story-content class="story__content">
      <h3 class="stories__heading">Истории неизлечимых привычек</h3>
      <form
        @submit.prevent="appliedStoriesName = storiesName"
        class="stories__box"
      >
        <input
          v-model="storiesName"
          minlength="2"
          placeholder="Введите имя или ключевую фразу"
          class="stories__input"
        />
        <input-button
          class="button button_search"
          :text="textButtonForm"
        ></input-button>
      </form>
      <stories-grid
        class="stories__list"
        :relevantStories="initiallyFilteredStories"
        :start="start"
        :limit="widthLimit"
      />
      <stories-pagination
        class="stories__menu"
        :allStories="initiallyFilteredStories.length"
        :limit="limit"
        @pagClick="changePage"
      ></stories-pagination>
    </story-content>
  </section>
</template>

<script>
import Content from '@/components/ui/Content';
import Button from '@/components/ui/Button';
import StoriesGrid from '@/components/StoriesGrid';
import Pagination from '@/components/ui/Pagination';
export default {
  components: {
    'story-content': Content,
    'input-button': Button,
    'stories-grid': StoriesGrid,
    'stories-pagination': Pagination,
  },
  computed: {
    widthLimit() {
      this.limit = 16;
      if (window.innerWidth <= 1000) {
        this.limit = 12;
      }
      if (window.innerWidth <= 700) {
        this.limit = 9;
      }
      return this.limit;
    },
    initiallyFilteredStories() {
      const { stories } = this.$store.state;
      if (!this.appliedStoriesName || this.appliedStoriesName === '') {
        return stories.stories;
      }
      return stories.stories.filter(
        item =>
          item.author
            .toLowerCase()
            .indexOf(this.appliedStoriesName.toLowerCase()) > -1 ||
          item.text
            .toLowerCase()
            .indexOf(this.appliedStoriesName.toLowerCase()) > -1
      );
    },
  },
  methods: {
    changePage(index) {
      this.start = (index - 1) * this.limit;
      const up = this.$refs.stories;
      up.scrollIntoView({ block: 'start', behavior: 'smooth' });
    },
  },
  data() {
    return {
      storiesName: '',
      appliedStoriesName: '',
      textButtonForm: 'Поиск',
      start: 0,
    };
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
.stories__input {
  font-size: 18px;
  line-height: 24px;
  padding-left: 5px;
  border: 1px solid #e8e8e8;
  margin-bottom: 70px;
  outline: none;
  width: 1074px;
  height: 52px;
}
.stories__menu {
  margin-top: 140px;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  flex-flow: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
}
.button_search {
  width: 226px;
}

@media (max-width: 1350px) {
  .button_search {
    height: 48px;
  }
  .stories__input {
    font-size: 16px;
    line-height: 22px;
  }
}

@media (max-width: 1350px) {
  .stories__input {
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
    grid-gap: 60px 40px;
  }
}

@media (max-width: 1350px) {
  .stories__menu {
    margin-top: 130px;
    margin-bottom: 90px;
  }
}

@media (max-width: 1250px) {
  .stories__list {
    grid-template-columns: repeat(auto-fill, 208px);
    grid-gap: 46px 30px;
  }
}

@media (max-width: 1250px) {
  .stories__input {
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

@media (max-width: 1250px) {
  .stories__menu {
    margin-top: 110px;
    margin-bottom: 80px;
  }
}

@media (max-width: 1000px) {
  .stories__menu {
    margin-top: 130px;
  }
  .stories__input {
    font-size: 15px;
    line-height: 19px;
  }
}

@media (max-width: 1000px) {
  .stories__input {
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
  .stories__menu {
    margin-top: 50px;
    margin-bottom: 50px;
  }
}

@media (max-width: 700px) {
  .stories__page {
    margin-bottom: 50px;
  }
}

@media (max-width: 700px) {
  .stories__input {
    margin-bottom: 30px;
    width: 238px;
    height: 46px;
  }
  .stories__input {
    font-size: 13px;
    line-height: 16px;
  }
}

@media (max-width: 700px) {
  .stories__menu {
    justify-content: space-between;
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
    color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
}

@media (max-width: 700px) {
  .stories__list {
    grid-template-columns: repeat(auto-fill, 290px);
    grid-gap: 30px 20px;
  }
}
</style>
