<template>
  <button class="button" @click="$emit('btnClick')">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style scoped>
.button {
  font-family: 'Inter', Arial, sans-serif;
  width: 280px;
  height: 52px;
  background-color: #613a93;
  color: white;
  padding: 0;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.3s;
  outline: none;
}

.button:hover {
  opacity: 0.9;
}
</style>
