<template>
  <input
    :class="[
      'input',
      addClass,
      {
        'input_bottom-bordered': bottomBordered,
      },
    ]"
    :type="type"
    :placeholder="placeholder"
  />
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
      validator: value =>
        'text|number|email|password|search|url|tel'.split('|').indexOf(value) >
        -1,
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    handleInput(e) {
      this.$emit('input', this.content);
    },
  },
};
</script>

<style scoped>
.input {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #666;
  width: 100%;
}

.input_bottom-bordered {
  border: none;
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 10px;
}

@media (max-width: 1350px) {
  .input {
    font-size: 16px;
    line-height: 22px;
  }
}

@media (max-width: 900px) {
  .input {
    font-size: 15px;
    line-height: 19px;
  }
}

@media (max-width: 450px) {
  .input {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
