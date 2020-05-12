<template>
  <div class="paragraph">
    <div class = "paragraph__container">
      <p 
        @click="toggle=true" 
        class="paragraph__span" 
        :class="{'paragraph__span_is_active': toggle===true}"
      >{{ spanFirst }}</p>
      <p 
        @click="toggle=false" 
        class="paragraph__span" 
        :class="{'paragraph__span_is_active': toggle===false}"
      >{{ spanSecond }}</p>
    </div>
    <div class = "paragraph__container">
      <p 
        v-if="toggle===true" 
        class="paragraph__text"
      >{{ textFirst }}</p>
      <p 
        v-else 
        class="paragraph__text"
      >{{ textToggle }}</p>
      <share-button 
        v-if="textSecond === '' && toggle===true" 
        :text='textForm' 
        @btnClick="$emit('btnClick')" 
        class="paragraph__share-button"  
      />
      <share-button 
        v-if="textSecond === '' && toggle===false" 
        :text='textContact' 
        class="paragraph__share-button" 
      />
      <p 
        v-if="toggle===true && textSecond !== ''" 
        class="paragraph__text"
      >{{ textSecond }}</p>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    'share-button': Button
  },

  props: ['textFirst', 'textSecond', 'spanFirst', 'spanSecond', 'textToggle'],

  data() {
    return {
      toggle: true,
      textForm: 'Заполнить форму',
      textContact: 'Оставить контакт'
    }
  }
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
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #A2A2A2;
  cursor: pointer
}

.paragraph__span_is_active {
  font-weight: 500;
  color: black;
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

.paragraph__text:last-of-type {
  margin-bottom: 0;
}

.paragraph__share-button {
  margin-top: 78px;
}
</style>
