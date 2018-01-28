<template>
    <div @click="click" class="itemEditContainer">
       <i  :class="{hidden:editState}"  class="iconfont itemIcon">&#xe637;</i>
       <input  ref="cwedittitle" @blur="blur" :value="value"   @input="$emit('input', $event.target.value)" @keyup.enter="editState=false" class="itemEditText" placeholder="填写属性值">
    </div>
</template>

<script>


    export default {
        components: {},
        data(){
            return {
              editState: false
            }

        },
        props: {
          value: {
            type: [String,Number]
          },
        },
        methods: {

          click(){
            this.editState=true;
            this.$nextTick(()=>{
              this.$refs.cwedittitle.focus()
            })
          },
          blur(){
              let length = this.$refs.cwedittitle.value.length;

              if(length === 0){
                 this.editState=false
              }
          }
        },
        computed: {},
        mounted(){
             console.log("11111",this.value);
             if(this.value != ""){
               this.editState = true;
             }
             if(this.value == undefined){
               this.editState = false;
             }

        },
        destroyed(){

        }
    }
</script>

<style lang="less">
  @import "listItemEditText.less";
</style>
