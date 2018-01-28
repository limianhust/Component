<template>
    <div @click="click" :class="{active:active}" class="as-menu-tab-item">
        <slot name="image"></slot>
        <span class="as-menu-title">{{title}}</span>
    </div>
</template>

<script>
    import emitter from '../emitter'

    export default {
        name: 'cwMenuItem',
        mixins: [emitter],
        props: {
            title: {
                type: [String, Number]
            },
            index: {
                type: [String, Number]
            },
            route: {
                type: [String]
            },
            disabled: {
                type: [Boolean],
                default: false
            }
        },
        data() {
            return {
                active: false
            }
        },
        methods: {
            click() {
                if (this.disabled) {
                    return
                }

                this.$emit('click')
                this.dispatch('cwMenu', 'itemclick', [this.index, this.route, this])
            },
            tabchange(index) {
                if (this.disabled) {
                    return
                }
                if (this.index == index) {
                    this.active = true
                } else {
                    this.active = false
                }
            }
        },
        mounted() {
            this.$on('tabchange', this.tabchange)
        },
        watch: {
            '$route': function () {
                if (this.$route.name == this.route) {
                    this.active = true
                    this.dispatch('cwMenu', 'itemclick', [this.index, this.route, this])
                } else {
                    this.active = false
                }
            }
        }
    }
</script>

<style type="text/less" lang="less">
    @import "./menuTab.less";
</style>
