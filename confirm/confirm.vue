<template>
    <cw-mask :visible="visible">
        <div class="confirm">
            <cw-button @click="confirm">确定</cw-button>
            <cw-button @click="cancell">取消</cw-button>
        </div>
    </cw-mask>

</template>

<script>
    import cwMask from '../mask/mask.vue';
    import cwButton from '../button/button'
    export default {
        name: "confirm",
        components: {
            cwMask,
            cwButton,
        },
        props: {
            title: [String,Number],
            content: [String,Number],
            callback: [Function],
        },
        data(){
            return{
                visible: false,
            }
        },
        methods: {
            confirm(){
                console.log('确定');
                this.callback();
                this.visible = false;
            },
            cancell(){
                console.log('取消');
                this.visible = false;
            }
        }

    }
</script>

<style scoped>

</style>