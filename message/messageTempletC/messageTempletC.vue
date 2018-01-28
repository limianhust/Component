<template>
    <cwMessage :closeFun="closeFun" :visible.sync="tVisible">
        <div class="message-templetC">
            <div class="message-templetC-img-c">
                <img  :src="icon">
            </div>
            <div class="message-templetC-title-c">
                <div class="message-templetC-title"><span>{{title}}</span></div>
                <div class="message-templetC-content"><span>{{content}}</span></div>
            </div>
        </div>

        <!--<div slot="footer" class="clear-fix">-->
            <!--<div @click="leftBtnClick"  class="message-templetC-left-btn"><span>{{leftBtn}}</span></div>-->
            <!--<div @click="rightBtnClick" class="message-templetC-right-btn"><span>{{rightBtn}}</span></div>-->
        <!--</div>-->

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

        },
        methods: {
            closeFun(){
                this.$emit('update:visible', false);
            },

        },
        computed: {

        },
        watch:{
            visible(val,oldVal) {
                let that = this;
                if(val){
                    setTimeout(function () {
                        that.$emit('update:visible',false)
                    },3000)
                }
            },
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
    @import "messageTempletC.less";
</style>
