<template>
  <div class="pagination">
    <p
      :class="['pagination__first', { pagination__first_active: isFirst }]"
      @click="setActive((index = 1))"
    >
      Первая
    </p>
    <button
      class="pagination__button pagination__polygon_back"
      @click="setActive(itemBack)"
      :disabled="isFirst"
    ></button>
    <div
      v-for="index in countPages"
      :key="index"
      @click="setActive(index)"
      :class="[
        'pagination__item',
        { pagination__item_active: index === active },
      ]"
    >
      {{ index }}
    </div>
    <button
      class="pagination__button pagination__polygon"
      @click="setActive(itemForward)"
      :disabled="isLast"
    ></button>
    <p
      :class="['pagination__last', { pagination__last_active: isLast }]"
      @click="setActive((index = countPages))"
    >
      Последняя
    </p>
  </div>
</template>

<script>
export default {
  props: {
    allStories: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    itemForward() {
      return this.active + 1;
    },
    itemBack() {
      return this.active - 1;
    },
    countPages() {
      return Math.ceil(this.allStories / this.limit);
    },
    isLast() {
      return this.active === this.countPages;
    },
    isFirst() {
      return this.active === 1;
    },
  },
  methods: {
    setActive(index) {
      this.active = index;
      this.$emit('pagClick', index);
    },
  },
};
</script>

<style scoped>
.pagination__button {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 0;
}
.pagination__button:focus {
  outline: none;
}
.pagination__button_left {
  margin-right: 30px;
}
.pagination__button_right {
  margin-left: 20px;
}

.pagination__polygon_back {
  width: 58px;
  height: 58px;
  background-image: url(/polygon.svg);
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
.pagination__polygon {
  width: 58px;
  height: 58px;
  background-image: url(/polygon__17.svg);
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
.pagination {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination__item {
  display: flex;
  width: 58px;
  height: 58px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: #fbfbfb;
  transition: background-color 0.3s;
}
.pagination__item:last-child {
  margin-right: 0;
}
.pagination__item:hover,
.pagination__item_active {
  background-color: #f4f4f4;
  transition: background-color 0.3s;
}
.pagination__first {
  cursor: pointer;
  color: #181818;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-right: 10px;
}
.pagination__last {
  cursor: pointer;
  margin-left: 10px;
  color: #181818;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
.pagination__first_active {
  color: #a2a2a2;
}
.pagination__last_active {
  color: #a2a2a2;
}

@media screen and (max-width: 1000px) {
  .pagination__item {
    width: 50px;
    height: 50px;
  }
  .pagination__first {
    font-size: 15px;
    line-height: 18px;
  }
  .pagination__last {
    font-size: 15px;
    line-height: 18px;
  }
  .pagination__item:nth-child(7) {
    display: none;
  }
  .pagination__item:nth-child(8) {
    display: none;
  }
  .pagination__item:nth-child(9) {
    display: none;
  }
  .pagination__item:nth-child(10) {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  .pagination {
    max-width: 320px;
  }
  .pagination__first {
    margin-top: 34px;
    order: 99;
    margin-left: 25px;
  }
  .pagination__last {
    margin-top: 34px;
    order: 100;
    margin-right: 25px;
  }
  .pagination__button_left {
    margin-right: 10px;
  }
  .pagination__button_right {
    margin-left: 10px;
  }
  .pagination__item {
    margin-right: 8px;
  }

  .pagination__item:nth-child(6) {
    display: none;
  }
}
</style>
