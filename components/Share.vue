<template>
  <div class="share">
    <share-content class="share__content">
      <h3 class="share__title">{{ blockShare.title }}</h3>
      <div class="share__container">
        <p class="share__subtitle" v-html="blockShare.text"></p>
        <div class="share__text">
          <div class="share__span-container">
            <p
              @click="toggleFirstSpan"
              :class="[
                'share__text-span',
                { 'share__text-span_is_active': toggle === true },
              ]"
            >
              {{ blockShare.extraTexts[0].title }}
            </p>
            <p
              @click="toggleSecondSpan"
              :class="[
                'share__text-span',
                { 'share__text-span_is_active': toggle === false },
              ]"
              v-html="blockShare.extraTexts[1].title"
            ></p>
          </div>
          <div class="share__text-container">
            <p
              v-if="toggle === true"
              class="share__text-paragraph"
              v-html="blockShare.extraTexts[0].text"
            ></p>
            <p
              v-if="toggle === false"
              class="share__text-paragraph"
              v-html="blockShare.extraTexts[1].text"
            ></p>
            <share-button
              v-if="toggle === true"
              :text="textButtonForm"
              @btnClick="toggleStoryPopup"
              class="share__text-button"
            />
            <share-button
              v-if="toggle === false"
              :text="textButtonContact"
              @btnClick="toggleContactsPopup"
              class="share__text-button"
            />
          </div>
        </div>
      </div>
    </share-content>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import Content from '@/components/ui/Content';
export default {
  components: {
    'share-button': Button,
    'share-content': Content,
  },
  computed: {
    blockArr() {
      return this.$store.getters['blocks/getBlockArr'];
    },
    blockShare() {
      return this.blockArr.find(el => el.block === 'story');
    },
  },
  methods: {
    toggleFirstSpan() {
      this.toggle = true;
    },
    toggleSecondSpan() {
      this.toggle = false;
    },
    toggleContactsPopup() {
      this.$store.commit('popup/toggleContactsPopup');
    },
    toggleStoryPopup() {
      this.$store.commit('popup/toggleStoryPopup');
    },
  },
  data() {
    return {
      toggle: true,
      textButtonForm: 'Заполнить форму',
      textButtonContact: 'Оставить контакт',
    };
  },
};
</script>

<style scoped>
.share {
  margin: 0 auto;
  width: 100%;
  padding: 100px 14px 60px;
  background-color: #f7f7f7;
}

.share__title {
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: black;
}

.share__container {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}

.share__subtitle {
  max-width: 340px;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.share__text {
  display: flex;
}

.share__text-span {
  margin: 0 40px 10px 0;
  text-align: right;
  font-size: 18px;
  line-height: 22px;
  color: #a2a2a2;
  cursor: pointer;
  transition: color 0.3s;
}

.share__text-span_is_active {
  font-weight: 500;
  color: black;
}

.share__text-paragraph {
  min-height: 90px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.share__text-container {
  max-width: 640px;
}

.share__text-button {
  margin-top: 78px;
}

.share__text-paragraph:last-of-type {
  margin-bottom: 0;
}

.share__text-span:hover {
  color: black;
}

@media (max-width: 700px) {
  .share {
    padding: 50px 10px;
  }

  .share__content {
    max-width: 295px;
  }

  .share__title {
    margin: 0 auto 16px;
    font-size: 21px;
    line-height: 18px;
  }

  .share__container {
    flex-direction: column;
    align-items: center;
  }

  .share__text {
    display: block;
  }

  .share__subtitle {
    margin-bottom: 40px;
    font-size: 13px;
    line-height: 16px;
    max-width: 295px;
  }

  .share__text-span {
    margin: 0 16px 16px 0;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
  }

  .share__span-container {
    display: flex;
  }

  .share__text-paragraph {
    font-size: 13px;
    line-height: 16px;
    min-height: 98px;
  }

  .share__text-span_is_active {
    border-bottom: 2px solid #613a93;
  }

  .share__text-button {
    width: 290px;
    height: 40px;
    margin-top: 30px;
    font-size: 13px;
    line-height: 16px;
  }
}

@media (min-width: 701px) and (max-width: 1000px) {
  .share {
    padding: 80px 50px;
  }

  .share__content {
    max-width: 390px;
  }

  .share__title {
    text-align: center;
    margin: 0 auto 26px;
    font-size: 24px;
    line-height: 28px;
  }

  .share__container {
    flex-direction: column;
    align-items: center;
  }

  .share__text {
    display: block;
  }

  .share__subtitle {
    margin-bottom: 80px;
    font-size: 13px;
    line-height: 16px;
    max-width: 380px;
  }

  .share__text-span {
    margin: 0 30px 24px 0;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
  }

  .share__span-container {
    display: flex;
  }

  .share__text-paragraph {
    font-size: 15px;
    line-height: 19px;
    min-height: 97px;
  }

  .share__text-span_is_active {
    border-bottom: 2px solid #613a93;
  }

  .share__text-button {
    width: 230px;
    height: 48px;
    margin-top: 59px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media (min-width: 1001px) and (max-width: 1250px) {
  .share {
    padding: 80px 50px;
  }

  .share__title {
    margin: 0 0 30px;
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
  }

  .share__subtitle {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
  }

  .share__text-span {
    margin: 0 30px 8px 0;
    font-size: 15px;
    line-height: 19px;
  }

  .share__text-container {
    max-width: 457px;
  }

  .share__text-paragraph {
    font-size: 15px;
    line-height: 19px;
    min-height: 78px;
  }

  .share__text-button {
    width: 230px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media (min-width: 1251px) and (max-width: 1350px) {
  .share {
    padding: 80px 50px 90px;
  }

  .share__title {
    margin: 0 0 30px;
  }

  .share__text-container {
    max-width: 580px;
  }

  .share__text-button {
    width: 230px;
    height: 48px;
  }
}
</style>
