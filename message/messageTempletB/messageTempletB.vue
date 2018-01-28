<template>
  <cwMessage :closeFun="closeFun" :visible.sync="tVisible">
    <div class="message-templetB">
      <div class="message-templetB-img-c">
        <img  :src="icon">
      </div>
      <div class="message-templetB-title-c">
        <div class="message-templetB-title"><span>{{title}}</span></div>
        <div class="message-templetB-content"><span>{{content}}</span></div>
      </div>
    </div>

      <div slot="footer" class="message-templetB-button-c clear-fix">
        <div @click="leftBtnClick"  class="message-templetB-left-btn"><span>{{leftBtn}}</span></div>
      </div>
  </cwMessage>
</template>

<script>

  import cwMessage from "../message.vue"
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
      leftClick:{
        type:Function
      },

    },
    methods: {
      closeFun(){
        this.$emit('update:visible', false);
      },
      leftBtnClick(){
        this.leftClick();
      },
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
  @import "messageTempletB.less";
</style>
