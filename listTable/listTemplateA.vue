<template>
  <div class="listTemplateA">
    <listTableItemTitle :columns="columns" class="listTemplateA-title"></listTableItemTitle>
      <div class="listTemplateA-tableItemC">
          <cwTransition v-for="(item, index) in data" :key="index">
              <listTableItem :buttonClick="itemDelClickProp"    :buttonGroupClick="buttonGroupClickProp" v-if="showFun(item)" :index="index" class="listTemplateA-item"   :data="item"  :columns="columns"    ></listTableItem>
          </cwTransition>
      </div>

    <div class="listTemplateA-addButton">
      <cwButton @click="addMore">加载更多</cwButton>
    </div>
  </div>
</template>

<script>
  import listTableItem from "./listTableItem.vue";
  import listTableItemTitle from "./title/listTableItemTitle.vue";
  import cwButton from "../button/button.vue";
  import cwTransition from "../cwTransition.vue";


  export default {
    components: {
      listTableItem,
      listTableItemTitle,
      cwButton,
      cwTransition
    },
    data(){
      return {
          showIndex:2,
          layerArr:[],
      }
    },
    props: {

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
      addMore(){
        let numIndex = 0;
        for(let i = 0 ; i < this.data.length; i++){
            if(this.data[i].TABLE_SHOW == false){
                if(numIndex < this.showIndex){
                  this.data[i].TABLE_SHOW = true;
                  numIndex = numIndex + 1;
                }
            }
        }

      },
      itemDelClickProp(data,index){
        this.$emit('buttonClick',data,index);
      },
      buttonGroupClickProp(srcType,data,index){
        this.$emit('buttonGroupClick',srcType,data,index);
      },
      showFun(item){
        if( item.TABLE_SHOW == undefined || item.TABLE_SHOW == false){
            return false;
        }
        return true;

      }

    },
    computed: {
    },
    mounted(){

    },
    destroyed(){

    }
  }
</script>

<style lang="less">
  @import "listTemplateA.less";
</style>
