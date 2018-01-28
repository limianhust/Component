<template>
    <div class="cw-input">
        <input :disabled="disabled" :class="{'cw-error': error,'icon-search': icon}"
               :placeholder="placeholder" class="as-form-input"
               @input="$emit('input', $event.target.value)"
               :value="value" type="text">
        <span v-if="icon" @click="$emit('iconclick')" class="iconfont">&#xe642;</span>
    </div>

</template>

<script>
    export default {
        name: 'cwInput',
        props: {
            placeholder: {
                type: [String, Number]
            },
            value: {
                type: [String, Number]
            },
            error: {
                type: [Boolean],
                default: false
            },
            disabled: {
                type: [Boolean],
                default: false
            },
            icon: {
                type: [Boolean],
                default: false
            }
        },
    }
</script>

<style lang="less" type="text/less">
    @import "./input.less";
</style>
