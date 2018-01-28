<template>
    <div class="tips" :class="[{'popup-top':show ,'popup-hide':!show},tipsType]">
        <div class="box">
            <span class="tips-icon"></span>
            <span class="tips-text">{{tipsText}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            show:{
                type:Boolean,
                default:false,
            },
            tipsText:{
                type:String,
                default:'提示信息',
            },
            tipsType:{
                type:String,
                default:'normal',
                validator: function (value) {
                    //验证props的数据
                    let aimArray = ['normal','success','failed','warning'];
                    if(aimArray.includes(value)){
                        return value;
                    }else{
                        return false;
                    }

                }
            }
        },
        watch:{
            /**
             * 监听tips显示的变化
             * @param val
             * @param oldVal
             */
            show(val,oldVal) {
                let that = this;
                if(val){
                    setTimeout(function () {
                        that.$emit('update:show',false)
                    },2000)
                }
            },
        }
    }
</script>
<style lang="less">
  @import "tips.less";
</style>
