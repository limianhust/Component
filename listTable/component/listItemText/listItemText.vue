<template>
  <div class="listTable-span">
    <span ><a href="javascript:void(0)" :title="value">{{value}}</a></span>
  </div>
</template>

<script>


    export default {
        components: {},
        data(){
            return {}
        },
        props: {
          value: {
            type: [String],
            default:""
          },
        },
        methods: {},
        computed: {},
        mounted(){

        },
        destroyed(){

        }
    }
</script>

<style lang="less">
  @import "listItemText.less";
</style>
