<template>
  <div  class="listTableTitle-Contain">
      <span  class="listTableTitle-span" v-for="item in columns">{{item.title}}</span>
  </div>
</template>

<script>


    export default {
        components: {},
        data(){
            return {

            }
        },
        props: {
          columns:{
            type:Array,
            default(){
              return [];
            }
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
  @import "listTableItemTitle.less";
</style>
