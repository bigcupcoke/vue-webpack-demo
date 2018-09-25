<template>
	<div class="modal" v-if="dialogInfo.show">
		<div class="dialog-content">
			<div class="content-header">
				{{ dialogInfo.desc }}
				<span class="content-close">x</span>
			</div>
			<div class="content-main">
				<button id="btn-ok" @click="submit">{{ dialogInfo.btnText }}</button>
				<button id="btn-cancel">取消</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	//props: ['dialogInfo'],
	props: {
		dialogInfo: {
			type: Object,
			required: true,
		}
	},
	methods: {
		submit() {
			console.log('url:', this.dialogInfo.url)
		},
	}
}
</script>

<style lang="less">
.modal {
	background: lightblue;
	height: 100%;
	width: 100%;
	position: relative;

	.dialog-content {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 300px;
		width: 400px;
		background: indianred;
		position: absolute;
	}
}
</style>
