<template>
    <div class="accordion" >
        <div class="li-container" @click="clickFunc(outObj)">
            <div class="arrow">
                <!--<div :class="{'arrow-right':!outObj.show,'arrow-down':outObj.show}"></div>-->
                <div :class="{rotate:outObj.show}" class="arrow-right"></div>
            </div>

            <div class="folder"></div>
            <div class="text">
                <p>{{outObj.value}}</p>
            </div>
        </div>
        <cw-transition name="fold"
                    v-on:afterEnter="afterEnter"
                    v-on:afterLeave="afterLeave">
            <div v-show="outObj.show" class="container" >
                <slot>
                </slot>
            </div>
        </cw-transition>
    </div>
</template>
<script>
    import cwTransition from '@UiComponents/transition/transition.vue'
    export default {
        data() {
            return {
            }
        },
        components: {
            cwTransition
        },
        props:{
            outObj:{
                type: Object,
                default: function () {
                    return {
                        value:"布局方式",
                        show:true
                    }

                }
            }
        },
        methods:{
            clickFunc(outObj){
                this.$emit('listClick');
                return outObj.show = ! outObj.show
            },
            afterLeave(){
                //console.log("cw-afterLeave")
                this.$emit('finished');
            },
            afterEnter(){
                //console.log("cw-afterEnter")
                this.$emit('afterEnter');
            },
            test(){
                //console.log("abc")
            }
        },
        mounted(){

        }
    }
</script>
<style type="text/css" lang="less">
    @import "accordion";
</style>