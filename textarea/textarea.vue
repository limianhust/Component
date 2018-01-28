<template>
  <textarea :disabled="disabled" :class="{'cw-error': error}"
         :placeholder="placeholder" class="as-form-textarea"
         @input="$emit('input', $event.target.value)"
         :value="value" type="text">
  </textarea>
</template>

<script>
  export default {
    name: 'cwInput',
    props: {
      placeholder: {
        type: [String,Number]
      },
      value: {
        type: [String,Number]
      },
      error: {
        type: [Boolean],
        default: false
      },
      disabled: {
        type: [Boolean],
        default: false
      }
    },
  }
</script>

<style lang="less" type="text/less">
  @import "./textarea.less";
</style>
