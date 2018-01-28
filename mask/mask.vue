<template>
    <div class="cw_mask" v-show="visible">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'cwMask',
        data() {
            return {
            }
        },
        props:{
            visible:{
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="less">
    @import "mask.less";
</style>
