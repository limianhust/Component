<template>
    <div class="message-wrapper">
        <cwMask :visible.sync="visible">
            <div class="message-box">
                <!--<div class="message__header">-->
                   <!---->
                <!--</div>-->
                <div class="message-body">
                  <slot></slot>
                </div>
                <div class="message-footer">
                    <slot name="footer"></slot>
                </div>
                <div class="message-close-c">
                  <img @click="close"  src="../../../static/img/messageClose.png">
                </div>
            </div>
        </cwMask>
    </div>
</template>
<script>
    import cwMask from '../mask/mask.vue';

    export default {
        name: 'cwMessage',
        data() {
            return {}
        },
        components: {
          cwMask
        },
        props: {
            visible: {
                type: Boolean,
                default: false,
            },
            title: {
                type: String,
                default: ''
            },
          closeFun: {
            type: Function,
          }
        },
        methods: {
            close() {
                this.$emit('update:visible', false);
                this.closeFun(false);
            },



        }
    }
</script>
<style lang="less">
  @import "message.less";
</style>
