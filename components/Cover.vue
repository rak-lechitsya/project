<template>
  <section class="cover" ref="cover">
    <h1 class="cover__heading">{{ blockArr[0].hashtag }}</h1>
    <button @click="scroll" class="cover__arrow"></button>
  </section>
</template>

<script>
export default {
  props: ['hashtag'],

  computed: {
    blockArr() {
      return this.$store.getters['blocks/getBlockArr'];
    },
  },
  methods: {
    scroll() {
      const intro = this.$refs.cover.nextElementSibling;
      intro.scrollIntoView({ block: 'start', behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.cover {
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: #613a93;
  margin: 0 auto;
  height: 690px;
}

.cover__heading {
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  color: #fff;
  margin: auto;
  text-transform: uppercase;
}

.cover__arrow {
  margin: 0;
  padding: 0;
  width: 54px;
  height: 31px;
  border: none;
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  background-image: url('/cover-row.svg');
  background-size: 38px 15px;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 0.3s;
  cursor: pointer;
  outline: none;
}

.cover__arrow:hover {
  opacity: 0.8;
}

@media screen and (max-width: 1350px) {
  .cover {
    height: 620px;
  }

  .cover__heading {
    font-size: 78px;
    line-height: 94px;
  }
}

@media screen and (max-width: 1250px) {
  .cover {
    height: 540px;
  }
}

@media screen and (max-width: 1000px) {
  .cover {
    height: 780px;
  }

  .cover__heading {
    font-weight: 800;
    font-size: 64px;
    line-height: 77px;
  }
}

@media screen and (max-width: 1000px) {
  .cover {
    height: 480px;
  }

  .cover__heading {
    font-size: 36px;
    line-height: 44px;
  }

  .cover__arrow {
    bottom: 30px;
  }
}
</style>
