<template>
  <div class="listTableButtonGroup-contain">
      <img class="listTable" @click="itemClickProp(index)"  :src="item"  v-for="(item,index) of srcs">
  </div>
</template>

<script>


    export default {
        components: {

        },
        data(){
            return {


            }
        },
        props: {
          srcs:{
            type:Array,
            default(){
              return [];
            }
          },
          srcsType:{
            type:Array,
            default(){
              return [];
            }
          },
          itemClick:{
             type:Function
          }
        },
        methods: {
          itemClickProp(index){
              this.itemClick(this.srcsType[index]);
          }
        },
        computed: {},
        mounted(){

        },
        destroyed(){

        }
    }
</script>

<style lang="less">
  @import "listItemButtonGroup.less";
</style>
