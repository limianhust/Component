<template>
  <div :class="wrapClasses" :style="styles">
    <div :class="[prefixCls + '-tail']"><i></i></div>
    <div :class="[prefixCls + '-head']">
      <div :class="[prefixCls + '-head-inner']">
        <span v-if="!icon && currentStatus != 'finish' && currentStatus != 'error'">{{ stepNumber }}</span>
        <span v-else :class="iconClasses"></span>
      </div>
    </div>
    <div :class="[prefixCls + '-main']">
      <span :class="[prefixCls + '-title']">{{ title }}</span>
      <slot>
        <span v-if="content" :class="[prefixCls + '-content']">{{ content }}</span>
      </slot>
    </div>
  </div>
</template>
<script>
  import Emitter from '../emitter';
//  import { oneOf } from '../../mixins/assist';

  const prefixCls = 'cw-steps';
  const iconPrefixCls = 'ivu-icon';

  export default {
    name: 'cwStep',
    mixins: [ Emitter ],
    props: {
      status: {
//        validator (value) {
//          return oneOf(value, ['wait', 'process', 'finish', 'error']);
//        }
        type:String,
        default:'process'
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String
      },
      icon: {
        type: String
      }
    },
    data () {
      return {
        prefixCls: prefixCls,
        stepNumber: '',
        nextError: false,
        total: 1,
        currentStatus: ''
      };
    },
    computed: {
      wrapClasses () {
        return [
          `${prefixCls}-item`,
          `${prefixCls}-status-${this.currentStatus}`,
//          {
//            [`${prefixCls}-custom`]: !!this.icon,
//            [`${prefixCls}-next-error`]: this.nextError
//          }
        ];
      },
      iconClasses () {
        let icon = '';

        if (this.icon) {
          icon = this.icon;
        } else {
          if (this.currentStatus == 'finish') {
            icon = 'ios-checkmark-empty';
          } else if (this.currentStatus == 'error') {
            icon = 'ios-close-empty';
          }
        }

        return [
          `${prefixCls}-icon`,
          `${iconPrefixCls}`,
          {
            [`${iconPrefixCls}-${icon}`]: icon != ''
          }
        ];
      },
      styles () {
        return {
          width: `${1/this.total*100}%`
        };
      }
    },
    watch: {
      status (val) {
        this.currentStatus = val;
        if (this.currentStatus == 'error') {
          this.$parent.setNextError();
        }
      }
    },
    created () {
      this.currentStatus = this.status;
    },
    mounted () {
      this.dispatch('Steps', 'append');
    },
    beforeDestroy () {
      this.dispatch('Steps', 'remove');
    }
  };
</script>
<style lang="less">
  @import "step.less";
</style>
