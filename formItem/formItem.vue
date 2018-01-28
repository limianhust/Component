<template>
<div class="as-form-item">
  <div class="label">
    <span class="label-text"><span class="required" v-if="required">*</span>  {{label}}: </span>
    <div class="form-input">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: 'asFormItem',
        props: {
          label: {
            type: [String]
          },
          required: {
            type: [Boolean],
            default: true
          },
        }
    }
</script>

<style lang="less" type="text/less">
  @import "./formItem.less";
</style>
