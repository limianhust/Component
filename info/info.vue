<template>
  <div class="cw-info-ct">
    <span class="iconfont info">&#xe62b;</span>
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: 'cwInfo',
  }
</script>

<style lang="less" type="text/less">
  @import "info.less";
</style>
