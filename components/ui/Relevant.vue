<template>
  <section class="relevant">
    <relevant-content class="relevant__content">
      <stories-grid
        class="relevant__list"
        :relevantStories="celebrityStories"
        :start="0"
        :limit="limit"
      />
    </relevant-content>
  </section>
</template>

<script>
import Content from '@/components/ui/Content';
import StoriesGrid from '@/components/StoriesGrid';
export default {
  components: {
    'relevant-content': Content,
    'stories-grid': StoriesGrid,
  },
  computed: {
    blockArr() {
      return this.$store.getters['blocks/getBlockArr'];
    },
    blockStories() {
      return this.blockArr.find(el => el.block === 'stories');
    },
    celebrityStories() {
      const { stories } = this.$store.state;

      return stories.stories.filter(item => item.celebrity === true);
    },
  },
  data() {
    return {
      limit: 4,
    };
  },
};
</script>

<style scoped>
.relevant__list {
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 70px 40px;
  padding: 0;
  list-style-type: none;
}

.relevant__box {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.relevant__link {
  text-decoration: none;
}

@media screen and (max-width: 1350px) {
  .relevant__list {
    grid-template-columns: repeat(auto-fill, 265px);
    grid-gap: 60px 40px;
  }
}

@media screen and (max-width: 1250px) {
  .relevant__list {
    grid-template-columns: repeat(auto-fill, 208px);
    grid-gap: 46px 30px;
  }
}

@media screen and (max-width: 1000px) {
  .relevant__list {
    grid-template-columns: repeat(2, 216px);
    grid-gap: 40px 20px;
    margin-top: 80px;
  }

  .relevant__content {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 700px) {
  .relevant__list {
    grid-template-columns: repeat(auto-fill, 290px);
    grid-gap: 30px 20px;
    margin-top: 50px;
  }
}
</style>
