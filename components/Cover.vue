<template>
  <section class="cover" ref="cover">
    <div class="cover__container">
      <h1 class="cover__heading">{{ blockCover.hashtag }}</h1>
      <story-button
        :text="textButtonCover"
        @btnClick="toggleStoryPopup"
        class="cover__button"
      />
    </div>
    <button @click="scroll" class="cover__arrow"></button>
  </section>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    'story-button': Button,
  },
  computed: {
    blockArr() {
      return this.$store.getters['blocks/getBlockArr'];
    },
    blockCover() {
      return this.blockArr.find(el => el.block === 'cover');
    },
  },
  methods: {
    scroll() {
      const video = this.$refs.cover.nextElementSibling;
      video.scrollIntoView({ block: 'start', behavior: 'smooth' });
    },
    toggleStoryPopup() {
      this.$store.commit('form/finishFalse');
      this.$store.commit('popup/toggleStoryPopup');
    },
  },
  data() {
    return {
      textButtonCover: 'Рассказать историю',
    };
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

.cover__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 245px auto;
}

.cover__button {
  width: 294px;
  height: 56px;
  margin: 0 auto;
  font-size: 24px;
  line-height: 36px;
  border: 2px solid white;
  border-radius: 60px;
  transition: opacity 0.3s;
}

.cover__heading {
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  color: #fff;
  margin-bottom: 30px;
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

.cover__button:hover {
  opacity: 0.7;
}

.cover__arrow:hover {
  opacity: 0.7;
}

@media screen and (max-width: 1350px) {
  .cover {
    height: 620px;
  }

  .cover__heading {
    font-size: 78px;
    line-height: 94px;
  }

  .cover__container {
    margin: 219px auto;
  }

  .cover__button {
    width: 314px;
    height: 58px;
    font-size: 22px;
  }
}

@media screen and (max-width: 1250px) {
  .cover {
    height: 540px;
  }

  .cover__container {
    margin: 185px auto;
  }

  .cover__button {
    width: 294px;
    height: 56px;
    font-size: 20px;
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

  .cover__container {
    margin: 308px auto;
  }
}

@media screen and (max-width: 700px) {
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

  .cover__container {
    margin: 187px auto;
  }

  .cover__button {
    width: 224px;
    height: 44px;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
