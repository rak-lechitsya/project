<template>
  <div class="about">
    <div class = "about__content">
      <about-heading class="about__heading" />
      <about-title :title="title" class="about__title" />
      <div class="about__container">
        <about-subtitle :subtitle="subtitle" class="about__subtitle" />
        <about-paragraph
          :textFirst="textFirst"
          :textSecond="textSecond"
          :spanFirst="spanFirst"
          :spanSecond="spanSecond"
          class="about__paragraph"
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
    'about-heading': Heading,
    'about-title': Title,
    'about-subtitle': Subtitle,
    'about-paragraph': Paragraph,
  },
  data() {
    return {
      title: 'О проекте',
      subtitle:
        'Этот проект был создан благотворительным фондом Константина Хабенского.',
      textFirst:
        'Есть вещи, которые не лечатся. Особенности характера, страстные увлечения, привычки, ставшие частью нашего «я», фобии, которые мы приобрели в детстве. Список можно продолжать до бесконечности, но одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и лучшее доказательство — люди с их неизлечимыми особенностями, которые сумели победить рак.',
      textSecond:
        'Рак лечится — проект Благотворительного Фонда Константина Хабенского и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей к раку и заставить каждого поверить: онкологическое заболевание — это не приговор.',
      spanFirst: 'Рак Лечится',
      spanSecond: 'Фонд Хабенского',
    };
  },
};
</script>

<style scoped>
.about {
  margin: 0 auto;
  padding: 90px 0 100px;
  max-width: 100%;
  background-color: #613a93;
}

.about__content {
  max-width: 1320px;
  margin: 0 auto;
}

.about__heading {
  font-weight: 800;
  font-size: 64px;
}

.about__container {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}

.about__title {
  color: white;
}

.about__subtitle {
  color: #DEDEDE;
}

.about__paragraph /deep/ .paragraph__span {
  color: white;
}

.about__paragraph /deep/ .paragraph__span:last-of-type {
  color: #C9C9C9;
}

.about__paragraph /deep/ .paragraph__text {
  color: #DEDEDE;
}

</style>
