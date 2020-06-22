<template>
  <div class="form-error">
    <p class="form-error__text">
      Ошибка отпраки данных, пожалуйста, попробуйте еще раз.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-error {
  width: 100%;
  margin-top: 40px;
  display: flex;
  background-color: #f0f0f0;
  height: 50px;
  border: 1px solid red;
  align-items: center;
  justify-content: center;
}

.form-error__text {
  font-size: 14px;
  line-height: 17px;
  color: #ff0000;
}

@media (max-width: 900px) {
  .form-error__text {
    font-size: 11px;
    line-height: 13px;
  }
}

@media (max-width: 450px) {
  .form-error {
    margin-top: 15px;
  }
  .form-error__text {
    text-align: center;
  }
}
</style>
