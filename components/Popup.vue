<template>
  <div class='popup'>
    <my-form @closeClick="$emit('closeClick')" />
  </div>
</template>

<script>
import Form from '@/components/Form';
export default {
  components: {
    'my-form': Form,
  },
}
</script>

<style scoped>
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
}
</style>
