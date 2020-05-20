<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  max-width: 1320px;
  margin: 0 auto;
}

@media (max-width: 1350px) {
  .content {
    max-width: 1180px;
  }
}
@media (max-width: 1250px) {
  .content {
    max-width: 924px;
  }
}

@media (max-width: 1000px) {
  .content {
    max-width: 688px;
  }
}

@media (max-width: 700px) {
  .content {
    max-width: 290px;
  }
}
</style>
