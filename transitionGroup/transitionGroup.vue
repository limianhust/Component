<template>
    <transition-group
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
            v-on:after-leave="afterLeave"
    >
        <slot></slot>
    </transition-group>
</template>

<script>
    const elTransition = '0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out'
    export default {
        name: 'cwTransitionGroup',
        methods: {
            beforeEnter(el){
                el.style.transition = elTransition
                if (!el.dataset) el.dataset = {}

                el.dataset.oldPaddingTop = el.style.paddingTop
                el.dataset.oldPaddingBottom = el.style.paddingBottom

                el.style.height = 0
                el.style.paddingTop = 0
                el.style.paddingBottom = 0
                //console.log("transition",'beforeEnter')
                this.$emit('beforeEnter');
            },
            enter(el){
                el.dataset.oldOverflow = el.style.overflow
                if (el.scrollHeight !== 0) {
                    el.style.height = el.scrollHeight + 'px'
                    el.style.paddingTop = el.dataset.oldPaddingTop
                    el.style.paddingBottom = el.dataset.oldPaddingBottom
                } else {
                    el.style.height = ''
                    el.style.paddingTop = el.dataset.oldPaddingTop
                    el.style.paddingBottom = el.dataset.oldPaddingBottom
                }

                el.style.overflow = 'hidden'
                //console.log("transition",'enter')
                this.$emit('enter');
            },
            afterEnter(el){
                el.style.transition = ''
                el.style.height = ''
                el.style.overflow = el.dataset.oldOverflow
                //console.log("transition",'afterEnter')
                this.$emit('afterEnter');
            },
            beforeLeave(el){
                if (!el.dataset) el.dataset = {}
                el.dataset.oldPaddingTop = el.style.paddingTop
                el.dataset.oldPaddingBottom = el.style.paddingBottom
                el.dataset.oldOverflow = el.style.overflow

                el.style.height = el.scrollHeight + 'px'
                el.style.overflow = 'hidden'
                //console.log("transition",'beforeLeave')
                this.$emit('beforeLeave');
            },
            leave(el){
                if (el.scrollHeight !== 0) {
                    el.style.transition = elTransition
                    el.style.height = 0
                    el.style.paddingTop = 0
                    el.style.paddingBottom = 0
                    this.$emit('leave');
                }
            },
            afterLeave(el){
                el.style.transition = ''
                el.style.height = ''
                el.style.overflow = el.dataset.oldOverflow
                el.style.paddingTop = el.dataset.oldPaddingTop
                el.style.paddingBottom = el.dataset.oldPaddingBottom
                //console.log("transition",'afterLeave')
                this.$emit('afterLeave');
            }


        }

    }
</script>

<style lang="less" type="text/less">

</style>
