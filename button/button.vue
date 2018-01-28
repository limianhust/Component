<template>

    <button :disabled="disabled" @click="click" :style="styleObject" :class="[type,size,{disabled:disabled}]" class="as-button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'cwButton',
        props: {
            type: {
                type: [String],
                default: 'primary'
            },
            broad: {
                type: [Boolean],
                default: false
            },
            size: {
                type: [String],
                default: ''
            },
            disabled: {
                type: [Boolean],
                default: false
            },
        },
        data() {
            var style = null
            if (this.broad) {
                style = {
                    width: '2.04rem',
                    paddingTop: '.09rem',
                    paddingBottom: '.09rem'
                }
            }
            return {
                styleObject: style
            }
        },
        methods: {
            click() {
                this.$emit('click')
            }
        }
    }
</script>

<style lang="less" type="text/less">
    @import "./button.less";
</style>
