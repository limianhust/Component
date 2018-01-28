<template>
  <div>
    <img class="listTableButton" :src="src">
  </div>
</template>

<script>


    export default {
        components: {},
        data(){
            return {}
        },
        props: {
          src: {
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
  @import "listItemButton.less";
</style>
