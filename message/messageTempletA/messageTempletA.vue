<template>
    <cwMessage :closeFun="closeFun" :visible.sync="tVisible">
          <div class="message-templetA">
              <div class="message-templetA-img-c">
                 <img  :src="icon">
              </div>
              <div class="message-templetA-title-c">
                <div class="message-templetA-title"><span>{{title}}</span></div>
                <div class="message-templetA-content"><span>{{content}}</span></div>
              </div>
          </div>

            <div slot="footer" class="clear-fix">
              <div @click="leftBtnClick"  class="message-templetA-left-btn"><span>{{leftBtn}}</span></div>
              <div @click="rightBtnClick" class="message-templetA-right-btn"><span>{{rightBtn}}</span></div>
            </div>

    </cwMessage>
</template>

<script>

    import cwMessage from "../message.vue";
    import {messageTool} from "../messageTool"

    export default {
        components: {
          cwMessage
        },
        data(){
            return {
                tVisible:this.visible,
            }
        },
        props: {
          visible: {
            type: Boolean,
            default: false,
          },
          icon:{
              type:String,
              default:""
          },
          title:{
            type:String,
            default:""
          },
          content:{
              type:String,
              default:""
          },
          leftBtn:{
            type:String,
            default:""
          },
          rightBtn:{
            type:String,
            default:""
          },
        },
        methods: {
            closeFun(){
                this.$emit('update:visible', false);
            },
            leftBtnClick(){
              this.$emit('leftClick',messageTool.parameter)
            },
            rightBtnClick(){
              this.$emit('rightClick',messageTool.parameter)
            }
        },
        computed: {

        },
        mounted(){

           this.$watch("visible",function () {
               console.log(this.visible);
               if(this.visible){
                   this.tVisible = true;
               }else{
                   this.tVisible = false;
               }
           })
        },
        destroyed(){

        }
    }
</script>

<style lang="less">
   @import "messageTempletA.less";
</style>
