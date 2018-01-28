<template>
  <div :class="{isempty: isEmpty}" class="as-app-card">
    <div v-if="!isEmpty" class="app-card-img">
      <slot name="img"></slot>
      <span v-if="hasPublished == 1" class="app-card-img-title has-published">已发布</span>
      <span v-else class="app-card-img-title not-published">未发布</span>
    </div>
    <div v-if="!isEmpty" class="app-card-title-ct">
      <img v-if="mapType== '3d'" class="mapType" src="../../../static/img/map3d.png" alt="">
      <img v-if="mapType== '2d'" class="mapType" src="../../../static/img/map2d.png" alt="">
      <img v-if="mapType== ''" class="mapType" src="../../../static/img/map23d.png" alt="">
      <div class="app-card-title">{{title}}</div>
    </div>
    <slot v-if="!isEmpty" name="footerbutton">

    </slot>
    <div v-if="isEmpty">
      <div class="add-icon-title-ct">
        <span class="iconfont add-icon">&#xe643;</span>
        <span class="add-title">{{addTitle}}</span>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'cw-card',
    props: {
      hasPublished: {
        type: [String,Number],
        default: 1,       //1表示已发布,0表示未发布
      },
      mapType: {
        type: [String],
        default: '2d'     //3d表示3d地图
      },
      title: {
        type: [String],
        default: '默认地图title'
      },
      isEmpty: {
        type: [Boolean],
        default: false
      },
      addTitle: [String]
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  @import "addCard.less";
</style>
