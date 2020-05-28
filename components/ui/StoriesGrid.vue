<template>
  <ul class="stories__list">
    <li v-for="card in storiesToRender" :key="card.id" class="stories__item">
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
    relevantStories: Array,
  },
  components: {
    story: Story,
  },
  computed: {
    storiesToRender() {
      return this.relevantStories.filter(
        (item, idx) => idx >= this.start && idx <= this.start + this.limit - 1
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
