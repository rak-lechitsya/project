<template>
  <div class="share">
    <share-title :title="title" class="share__title" />
    <div class="share__container">
      <share-subtitle :subtitle="subtitle" class="share__subtitle" />
      <share-paragraph
        :textFirst="textFirst"
        :textSecond="textSecond"
        :spanFirst="spanFirst"
        :spanSecond="spanSecond"
        class="share__paragraph"
      />
    </div>
    <button class="share__button">Заполнить форму</button>
  </div>
</template>

<script>
import Heading from '@/components/ui/Heading';
import Title from '@/components/ui/Title';
import Subtitle from '@/components/ui/Subtitle';
import Paragraph from '@/components/ui/Paragraph';

export default {
  components: {
    'share-title': Title,
    'share-subtitle': Subtitle,
    'share-paragraph': Paragraph,
  },
  data() {
    return {
      title: 'Расскажите свою историю',
      subtitle:
        'Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта поделиться своей историей неизлечимых привычек, навязчивых идей и болезненных привязанностей.',
      textFirst:
        'Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.',
      textSecond: '',
      spanFirst: '1-й вариант',
      spanSecond: '2-й вариант',
    };
  },
};
</script>

<style scoped>
.share {
  margin: 0 auto;
  max-width: 1440px;
  padding: 100px 60px;
  background-color: #f7f7f7;
  color: black;
}

.share__container {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}

.share__subtitle {
  color: #666;
}

.share__paragraph {
  color: #666666;
}

.share__button {
  margin: 56px 0 0 675px;
  background-color: #613a93;
  color: white;
  width: 280px;
  height: 52px;
  padding: 0;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
}
</style>
