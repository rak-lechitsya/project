<template>
  <div class="paragraph">
    <div>
      <p class="paragraph__span">{{ spanFirst }}</p>
      <p class="paragraph__span">{{ spanSecond }}</p>
    </div>
    <div>
      <p class="paragraph__text">{{ textFirst }}</p>
      <share-button @btnClick="$emit('btnClick')" v-if = "textSecond === ''" class="paragraph__share-button"  />
      <p v-else class="paragraph__text">{{ textSecond }}</p>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    'share-button': Button
  },

  props: ['textFirst', 'textSecond', 'spanFirst', 'spanSecond'],
};
</script>

<style scoped>
.paragraph {
  display: flex;
}
.paragraph__span {
  margin: 0 40px 10px 0;
  text-align: right;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000;
}

.paragraph__text {
  width: 640px;
  margin-bottom: 35px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

.paragraph__span:last-of-type {
  font-weight: normal;
  color: #A2A2A2;
}

.paragraph__text:last-of-type {
  margin-bottom: 0;
}

.paragraph__share-button {
  margin-top: 78px;
}
</style>
