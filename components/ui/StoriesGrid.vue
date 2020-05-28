<template>
  <ul class="stories__list">
    <li v-for="card in relevantStories" :key="card.id" class="stories__item">
      <story
        :url="card.ImageUrl[0].url"
        :author="card.author"
        :title="card.title"
        @storyClick="goToStory(card.id)"
      />
    </li>
  </ul>
</template>

<script>
import Story from '@/components/ui/Story';
export default {
  props: {
    start: Number,
    limit: Number,
  },
  components: {
    story: Story,
  },
  computed: {
    allStories() {
      return this.$store.getters['stories/getAllStories'];
    },
    relevantStories() {
      let copyArr = this.allStories.slice(0);
      let relevantStories = [];
      return (relevantStories = copyArr.splice(this.start, this.limit));
    },
  },
  methods: {
    goToStory(id) {
      this.$router.push(`/stories/${id}`);
    },
  },
};
</script>

<style scoped></style>
