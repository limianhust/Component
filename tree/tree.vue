<template>
    <draggable element="ul" :list="menuNode" :options="dragOptions" :move="checkMove">
        <!--列表生成位置-->
        <li v-for="(item,index) in menuNode" :key="item.index" :layerid="layer">

            <div :class="setClassName(item)"
                 :style="layerStyle">
                <div class="arrow" v-if="arrowIcon(item)" @click="showOffGroup(item)">
                    <span :class="arrowIcon(item)"></span>
                </div>
                <div class="tree-info">
                    <span v-if="treeIcon(item)" :class="[treeIconType,treeIcon(item)]"></span>
                    <span class="tree-text" @click="toggle(item)">
                    {{ item.showName === "未命名" ? item.name : item.showName }}
                </span>
                </div>

            </div>
            <tree v-if="item.children && item.children.length> 0"
                  :menuData="item.children" :key="item.index"
                  :layer="layer+1" v-show="item.show"
                  @itemClicked="toggle"
            >
            </tree>
        </li>
    </draggable>
</template>
<style lang="less">
    @import "tree.less";
</style>
<script>
    import cwTransition from '@UiComponents/transition/transition.vue';
    import draggable from 'vuedraggable'

    export default {
        name: 'tree',
        components: {
            cwTransition,
            draggable
        },
        data() {
            return {
                show: false,
                menuNode: this.menuData
            }
        },
        props: {
            menuData: {
                type: Array,
                default: [],
            },
            layer: {
                type: Number,
                default: 0
            }
        },
        computed: {
            dragOptions() {
                return {
                    animation: 0,
                    group: 'description',
                    disabled: false,
                    ghostClass: 'ghost'
                };
            },
            treeIconType() {
                switch (this.layer) {
                    case 0:
                        return "tree-icon-big";
                    case 1:
                        return "tree-icon-big";
                    case 2:
                        return "tree-icon-middle";
                }
            },
            layerStyle() {
                if(!this.layer){
                    return false;
                }
                let marginLeft = this.layer * 0.3;
                let style = `padding-left:${marginLeft}rem`;
                return style;
            },
        },
        methods: {
            /**
             * 树组件的点击事件
             * @param value
             */
            toggle(value) {
                this.$emit("itemClicked",value);
            },
            /**
             * 改变树组件的显示隐藏
             */
            showOffGroup(item) {
                item.show = !item.show;
            },
            /**
             *
             */
            setClassName(item) {
                if (!item.isLeaf && item.isLeaf != undefined) {
                    return 'tree-title';
                } else {
                    return 'tree-context';
                }
            },
            treeIcon(item) {
                let className = item.className;
                if (this.layer === 2) {
                    return 'folder-icon';
                } else {
                    return className ? className : false;
                }
            },
            arrowIcon(item) {
                let arrowStatus = '';
                if (!item.isLeaf && this.layer >= 0 && item.isLeaf != undefined) {
                    item.show ? arrowStatus = 'arrow-down' : arrowStatus = 'arrow-right';
                    return arrowStatus;
                } else {
                    return false;
                }
            },
            /**
             * 是否展开树形列表
             * @item 节点内容
             */
            showGroup(item) {
                let temp = item.show;
                if (temp !== undefined) {
                    this.show = temp;
                    return temp;
                } else {
                    this.show = true;
                    return true;
                }
            },
            /**
             * 拖拽过程判断
             * @param evt
             * @returns {boolean}
             */
            checkMove(evt) {
                //阻止父级元素被拖到子集列表中
                let fromElementId = evt.dragged.getAttribute("layerid");
                let targerElementId = evt.related.getAttribute("layerid");
                if (fromElementId !== targerElementId) {
                    return false;
                }

                let childElementsNum = evt.dragged.parentElement.childElementCount;
                childElementsNum = parseInt(childElementsNum);

                //当拖拽的节点只剩下一个时，阻止拖拽
                if (childElementsNum <= 2) {
                    return false;
                }

            },
        }
    }
</script>
