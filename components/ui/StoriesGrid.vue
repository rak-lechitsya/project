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
    relevantStories() {
      return this.$store.getters['stories/getRelevantStories'](
        this.start,
        this.limit
      );
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
