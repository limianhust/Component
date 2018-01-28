<template>
    <div class="cw-panel-ct" :class="{'cw-panel-border':showBorder}">
         <slot name="left"></slot>
         <slot name="middle"></slot>
         <slot name="right"></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'cwPanel',
        components: {},
        data(){
            return {}
        },
        props: {
            showBorder:{
                type:Boolean,
                default:true
            }
        },
        methods: {},
        computed: {},
        mounted(){

        },
        destroyed(){

        }
    }
</script>

<style lang="less">
   @import "panel.less";
</style>
