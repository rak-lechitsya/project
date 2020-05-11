<template>
  <div class="share">
    <div class="share__content">
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
    </div>
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
  width: 100%;
  padding: 100px 60px;
  background-color: #f7f7f7;
}

.share__content {
  margin: 0 auto;
  max-width: 1320px;
}

.share__container {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}


</style>
