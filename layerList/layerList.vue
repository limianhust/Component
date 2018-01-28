<template>
  <div class="layer-list" :class="{ 'layer-list-is-checked': value }">
    <label @click="handleChange" class="layer-list-title">
      <span v-if="checkBox" class="layer-list__input" :class="{'is-checked': value}"></span><!--
    --><span class="layer-list__label">{{label}}</span>
    </label>
    <div class="layer-list-url">{{layerUrl}}</div>
    <div class="layer-list-type">{{layerType}}</div>
    <div class="layer-list-operate">
      <img src="../../../static/img/layer_list_edit.png" alt="">
      <img src="../../../static/img/layer_list_delete.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cwLayerList',
    props: {
      value: [Boolean],
      checkBox: {
        type: [Boolean],
        default: false
      },
      label: {
        type: [String],
        default: ''
      },
      layerUrl: {
        type: [String],
        default: ''
      },
      layerType: {
        type: [String],
        default: ''
      },
    },
    methods: {
      handleChange() {
        console.log('45678')
        this.$emit('input',!this.value)
        this.$emit('change')
      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import "./layerList.less";
</style>
