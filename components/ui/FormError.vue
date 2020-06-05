<template>
  <div class="form__error">
    <p class="form__error-text">
      Ошибка отпраки данных, пожалуйста, попробуйте еще раз.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form__error {
  width: 100%;
  margin-top: 40px;
  display: flex;
  background-color: #f0f0f0;
  height: 50px;
  border: 1px solid red;
  align-items: center;
  justify-content: center;
}

.form__error-text {
  font-size: 14px;
  line-height: 17px;
  color: #ff0000;
}
</style>
