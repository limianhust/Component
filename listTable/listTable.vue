<template>
    <div class="listTable">
      <div class="listTable-name">{{tableName}}</div>
      <listTableItemTitle :columns="columns" class="listTable-title"></listTableItemTitle>
      <cwTransition v-for="(item, index) in data" :key="index">
        <listTableItem :buttonClick="itemDelClickProp" :buttonGroupClick="buttonGroupClickProp"  :index="index" class="listTable-item"   :data="item"  :columns="columns"   ></listTableItem>
      </cwTransition>
      <div class="listTable-addImage">
        <img @click="itemAddClickProp" :src="require('@static/img/tableadd.png')">
      </div>
    </div>
</template>

<script>
  import listTableItem from "./listTableItem.vue";
  import listTableItemTitle from "./title/listTableItemTitle.vue"
  import cwTransition from "../cwTransition.vue";

    export default {
        components: {
          listTableItem,
          listTableItemTitle,
          cwTransition
        },
        data(){
            return {}
        },
        props: {
          tableName:{
              type:[String],
              default:""
          },
          columns:{
            type:Array,
            default(){
              return [];
            }
          },
          data:{
            type:Array,
            default(){
              return [];
            }
          },
        },
        methods: {
          itemDelClickProp(data,index){
              this.$emit('buttonClick',data,index);
          },
          itemAddClickProp(){
              this.$emit('itemAddClick');
          },
          buttonGroupClickProp(srcType,data,index){
              this.$emit('buttonGroupClick',srcType,data,index);
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
   @import "listTable.less";
</style>
