<template>
  <div @click="click" class="cw-edit-title">
    <input ref="cwEditTitle" @blur="editState=false"
           @keyup.enter="editState=false" v-show="editState"
           :disabled="disabled" class="as-form-edit"
           @input="$emit('input', $event.target.value)"
           :value="value" type="text">
      <div  v-show="!editState">
          <span>{{value}}</span>
          <i class="iconfont">&#xe637;</i>
      </div>

  </div>

</template>

<script>
  export default {
    name: 'cwEditTitle',
    props: {
      value: {
        type: [String,Number]
      },
      disabled: {
        type: [Boolean],
        default: false
      }
    },
    data(){
      return {
        editState: false
      }
    },
    methods: {
      click(){
        this.editState=true;
        this.$nextTick(()=>{
          this.$refs.cwEditTitle.focus()
        })


      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import "./editTitle.less";
</style>
