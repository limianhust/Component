<template>
	<div class="dialog-wrapper">
		<cwMask :visible.sync="visible">
			<div class="dialog-box" :style="{top:topProperty + 'rem'}" :class="{diagleMiddle: size==='middle',diaglesmall:size==='small',diagleBig:size ==='big'}">
				<div class="dialog-header">
					<slot name="title"></slot>
					<span class="iconfont dialog-close" @click="close">&#xe653;</span>
				</div>
				<div class="dialog-body">
					<slot></slot>
				</div>
				<div class="dialog-footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</cwMask>
	</div>
</template>
<script>
	import cwMask from '../mask/mask.vue'
	export default {
		name: 'cwDialog',
		data() {


      return {

      }

		},
		props: {
      topProperty:{
          type:[Number],
          default: 1.88,
      },
			visible: {
				type: Boolean,
				default: false,
			},
			title: {
				type: String,
				default: '我是标題'
			},
			size: {
				type: String,
				default: 'middle'
			},
		},
		components: {
      cwMask
		},
		methods: {
			close(){
				this.$emit('update:visible', false);
				this.$emit('close');
			}
		}
	}
</script>
<style lang="less">
   @import "dialog.less";
</style>
