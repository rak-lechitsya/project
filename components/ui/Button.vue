<template>
    <div>
        <button class="button" @click="$emit('btnClick')">Заполнить форму</button>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
.button {
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
  cursor: pointer;
}
</style>
