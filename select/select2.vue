<template>
  <div class="cw-select2-ct">
    <select @change="change" :placeholder="placeholder" :value="value">
      <option disabled value="">{{placeholder}}</option>
      <option v-for="(item,index) in selectOption" :value="item.value">{{item.label}}</option>
    </select>
    <span class="iconfont">&#xe647;</span>
  </div>

</template>

<script>
  export default {
    name: '',
    props: {
      placeholder: {
        type: [String,Number],
        default: '请选择'
      },
      selectOption: {
        type: [Array],
        default: function () {
          return [
            {
              value: 123,
              label: '56hs'
            },
            {
              value: 123,
              label: '56hs'
            },
            {
              value: 123,
              label: '56hs'
            },
          ]
        }
      },
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
      }
    },
    methods: {
      change($event){
        console.log($event.target.value,$event.target.label)
        this.$emit('input',$event.target.value)
        this.$emit('change',$event.target.value)
      }
    }
  }
</script>

<style lang="less" type="text/less">
.cw-select2-ct{
  select{
    border: 0;
    /*font-size: .12rem;*/
    &:focus{
      border: 0;
      outline: none;
    }
  }
  .iconfont{
    z-index: -1;
    font-size: .1rem;
    position: relative;
    left: -0.2rem;
  }
}
</style>
