<template>
  <div class="pagination">
    <div
      v-for="index in countPages"
      :key="index"
      @click="setActive(index)"
      :class="[
        'pagination__item',
        { pagination__item_is_active: index === active },
      ]"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allStories: Number,
    limit: Number,
  },
  computed: {
    countPages() {
      return Math.ceil(this.allStories / this.limit);
    },
  },
  methods: {
    setActive(index) {
      this.active = index;
      this.$emit('pagClick', index);
    },
  },
  data() {
    return {
      active: 1,
    };
  },
};
</script>

<style scoped>
.pagination {
  margin-bottom: 102px;
  display: flex;
  justify-content: center;
}

.pagination__item {
  margin-right: 10px;
  width: 58px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  background: #fbfbfb;
  color: #181818;
  cursor: pointer;
}

.pagination__item_is_active {
  color: #000;
  background: #f4f4f4;
}

.pagination__item:hover {
  background: #f8f8f8;
}

.pagination__item:last-child {
  margin-right: 0;
}

@media (max-width: 1250px) {
  .pagination__item {
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 1000px) {
  .pagination__item {
    width: 50px;
    height: 50px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media (max-width: 700px) {
  .pagination {
    justify-content: left;
    overflow: auto;
  }
  .pagination__item {
    flex-shrink: 0;
  }
}
</style>
