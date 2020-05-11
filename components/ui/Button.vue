<template>
    <div>
        <button class="button" @click="$emit('btnClick')">{{text}}</button>
    </div>
</template>

<script>
    export default {
        props: ['text']
    }
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
}
</style>
