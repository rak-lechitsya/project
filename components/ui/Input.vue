<template>
  <input 
  :class="['input', addClass, {
    'input-bottom-bordered': bottomBordered
  }]"
  >
</template>

<script>
export default {
  props: {
    value: String,
    bottomBordered: Boolean,
    placeholder: String,
    addClass: String,
    type: {
      type: String,
      default: 'text',
      validator: value => 'text|number|email|password|search|url|tel'.split('|').indexOf(value)
        > -1
    }
  },
  data () {
    return {
      content: this.value
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', this.content)
    }
  }

}
</script>

<style scoped>
.input {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.33;
  color: #666;
  width: 100%;
}
</style>