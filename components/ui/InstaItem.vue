<template>
    <img :src="url" class="insta__image">
</template>

<script>
  export default {
    props: ['url'],
  }
</script>

<style scoped>



.insta__image {
   /* Temp */
  width: 195px;
  height: 100%;
  object-fit: cover;
}


</style>
