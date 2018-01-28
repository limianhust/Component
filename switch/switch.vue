<template>
    <div>
      <span :class="{small: small,transparent:transparent}" class="cw-switch" @click="toggle">
           <input type="hidden" :name="name" :value="currentValue">
           <div :class="pickClasses">
            <span :class="switchOnClasses">{{option[0]}}</span>
            <span :class="switchOffClasses">{{option[1]}}</span>
          </div>
     </span>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'cwSwitch',
        components: {},
        data() {
            return {

                currentValue: this.value
            }
        },
        props: {
            option: {
                type: Array,
                default() {
                    return ['', '']
                }
            },
            value: {
                type: [String, Number, Boolean],
                default: false
            },
            trueValue: {
                type: [String, Number, Boolean],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean],
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            small: {
                type: Boolean,
                default: false,
            },
            transparent: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            }
        },
        methods: {
            toggle() {
                if (this.disabled) {
                    return false;
                }

                const checked = this.currentValue === this.trueValue ? this.falseValue : this.trueValue;

                this.currentValue = checked;
                this.$emit('input', checked);
                let optionName = '';
                if (checked) {
                    optionName = this.option[1];
                } else {
                    optionName = this.option[0];
                }
                this.$emit('on-change', checked, optionName);

            }
        },
        computed: {
            pickClasses() {
                return [
                    `pick`,
                    {
                        [`pick-checked`]: this.currentValue === this.trueValue,
                    }

                ]
            },
            switchOnClasses() {
                return [
                    `cw-switch-on`,
                    {
                        [`cw-switch-on-select`]: this.currentValue === this.trueValue,
                    }

                ]
            },
            switchOffClasses() {
                return [
                    `cw-switch-off`,
                    {
                        [`cw-switch-off-select`]: this.currentValue === this.trueValue,
                    }
                ]
            }

        },
        watch: {
            value(val) {
                if (val !== this.trueValue && val !== this.falseValue) {
                    throw '错误的设置';
                }
                this.currentValue = val;
            }
        },
        mounted() {


        },
        destroyed() {

        }
    }
</script>

<style lang="less">
    @import "switch.less";
</style>
