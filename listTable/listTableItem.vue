<template>
    <div  class="listTableItem-Contain clear-fix">
      <slot v-for="item in columns">
        <listItemEditText v-if="item.type == 'editText'"  v-model="data[item.key]" >

        </listItemEditText>

        <listItemText :value="data[item.key]" v-if="item.type == 'text'">

        </listItemText>

        <listItemButton v-if="item.type == 'button'" @click.native="delClickProp"   :src="item.src"></listItemButton>

        <listItemButtonGroup  :itemClick="itemClick" v-if="item.type == 'buttonGroup'" :srcsType="item.srcsType"  :srcs="item.srcs"></listItemButtonGroup>
      </slot>

    </div>
</template>

<script>


    import  listItemEditText from  "./component/listItemEditText/listItemEditText.vue";
    import  listItemButton from  "./component/listItemButton/listItemButton.vue";
    import  listItemText from  "./component/listItemText/listItemText.vue";
    import listItemButtonGroup from "./component/listItemButtonGroup/listItemButtonGroup.vue"

    export default {
        components: {
          listItemEditText,
          listItemButton,
          listItemText,
          listItemButtonGroup
        },
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
          index:{
            type:[Number],
            default:0
          },
          data:{
            type:Object,
            default(){
              return {};
            }
          },
          buttonClick:{
            type:Function
          },
          buttonGroupClick:{
            type:Function
          }
        },
        methods: {
          delClickProp(){
             this.buttonClick(this.data,this.index);
          },
          itemClick(srcType){
             this.buttonGroupClick(srcType,this.data,this.index);

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

  @import "listTableItem.less";

</style>
