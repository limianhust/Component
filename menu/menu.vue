<template>
    <div class="as-menu">
        <slot></slot>
    </div>
</template>

<script>
    import emitter from '../emitter'

    export default {
        name: 'cwMenu',
        mixins: [emitter],
        props: {
            defaultActive: {
                type: [String, Number]
            }
        },
        data() {
            var index = this.defaultActive;
            return {
                index: index
            }
        },
        methods: {
            menuTabClick(index, route, vm) {
                if (this.index != index) {
                    this.$emit('menuChange', index, route, vm)
                    this.index = index
                    this.broadcast('cwMenuItem', 'tabchange', index)
                }
            }
        },
        mounted() {
            this.$on('itemclick', this.menuTabClick)
            this.broadcast('cwMenuItem', 'tabchange', this.defaultActive)
        },


    }
</script>

<style>

</style>
