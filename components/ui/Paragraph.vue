<template>
  <div class="paragraph">
    <div>
      <p class="paragraph__span">{{ spanFirst }}</p>
      <p class="paragraph__span">{{ spanSecond }}</p>
    </div>
    <div>
      <p class="paragraph__text">{{ textFirst }}</p>
      <p class="paragraph__text">{{ textSecond }}</p>
    </div>
  </div>
</template>

<script>
export default {
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
}

.paragraph__text {
  width: 645px;
  margin-bottom: 35px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}

.paragraph__span:last-of-type {
  font-weight: normal;
}

.paragraph__text:last-of-type {
  margin-bottom: 0;
}
</style>
