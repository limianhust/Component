<template>
  <div :class="{defaulthtml: !$slots.default}" class="search-input-ct">
    <div  v-if="$slots.default" class="search-input-prepend">
      <slot></slot>
    </div>
    <input :disabled="disabled" :class="{error: error}"
           :placeholder="placeholder"
           @input="$emit('input', $event.target.value)"
           :value="value" type="text">
    <span @click="iconClick" class="iconfont">&#xe642;</span>
  </div>
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
    data(){
      return {
        selected: ''
      }
    },
    methods: {
      change($event){
        console.log(this.selected)
      },
      iconClick(){
        this.$emit('iconClick')
      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import "./searchInput.less";
</style>
