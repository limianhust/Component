<template>
  <div class="cw-select">
    <div class="cw-select-box">
      <input  type="text"
              v-model="selectValue"
              :placeholder="defaultText?defaultText:selectPlaceholder"
              readonly="readonly"
              @focus="focus"
              @blur="blur"
              @keyup.13="handleClickSearch"
             />
      <input  type="hidden"
             v-model="value"
             :placeholder="defaultText?defaultText:selectPlaceholder"
             @focus="focus"
             @click.stop=""
             @keyup.13="handleClickSearch"
             @blur="blur"/><div class="triangle-down-con" @click.stop="showSelectList"><span class="iconfont triangle-down" >&#xe647;</span></div>
    </div>
    <cw-transition>
      <div class="cw-select-list-box" v-show="hideList">
        <ul class="select-list">
          <li class="select-list-item" v-for="item in list" @click="handleClick(item)" :key="item.value">{{item.label}}</li>
        </ul>
      </div>
    </cw-transition>

  </div>
</template>
<script>
  import cwTransition from "../cwTransition.vue"

  export default {
    name:'cw-select',
    components:{
      cwTransition
    },
    data() {
      return {
        selectValue: '',
        selectPlaceholder: '输入名字/下拉选择',
        isHiddenSelectList: false,
        hideList:false,
      }
    },
    props:{
      value:{
         type:[String,Number]
      },
      list:{
        type:Array,
        default:[],
      },
      disabled: {
        type: [Boolean],
        default: false
      },
      defaultText:{
        type:String,
        default:"",
      }
    },
    watch:{
      defaultText:{
        handler(val,oldVal){
          this.selectValue = val;
        }
      }
    },
    methods:{
      /**
       * 处理input搜索
       */
      handleClickSearch(){
        this.$emit('keyup13',this.selectValue.trim());
      },
      /**
       * 处理列表点击
       * @param item 列表项数据
       */
      handleClick(item){
        this.selectValue = item.value;
        this.$emit('input',item.value);
        this.hideList = false;
//        this.$emit('update:hideList', false);
        this.$emit('handleSelectResult',item);
      },
      /**
       * 显示选择列表
       */
      showSelectList(){
//        console.log('click')
//        this.$emit('update:hideList', !this.hideList);
        if(!this.disabled){
          this.hideList = !this.hideList;
        }

      },
      /**
       * 鼠标进入input事件
       */
      focus(){
        this.selectPlaceholder = '';
      },
      /**
       * 鼠标离开input事件
       */
      blur(){
        if(!this.selectPlaceholder){
          this.selectPlaceholder = '输入名字/下拉选择';
        }
        this.search();
      },
      /**
       * 搜索请求
       */
      search(){

      }
    }
  }
</script>

<style lang="less">
  @import "select.less";
</style>
