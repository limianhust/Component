<template>
    <label
            class="cw-radio"
            :class="[
      { 'is-disabled': disabled },
      { 'is-checked': value === label }
    ]"
            role="radio">
    <span class="cw-radio__input" :class="{'is-checked': value === label}">
      <input :disabled="disabled" class="cw-radio__original" :value="value" type="radio"
             @change="handleChange" :name="name">
    </span>
        <span class="cw-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
    </label>
</template>

<script>
    export default {
        name: 'cwRadio',
        model: {
            model: ''
        },
        props: {
            value: [Number, String,Boolean],
            label: [Number, String,Boolean],
            disabled: Boolean,
            name: String,
            border: Boolean,
        },
        methods: {
            handleChange() {
                if (this.disabled) {
                    return
                }
                this.$emit('input', this.label)
            }
        }
    }
</script>

<style lang="less" type="text/less">
    @import "./radio.less";
</style>
