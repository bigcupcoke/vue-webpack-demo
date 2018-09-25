<template>
	<div>
		<h1>这里是标题</h1>
		<div class="line"></div>
		<el-button class="primary">添加问题</el-button>
		<div class="question-main"></div>
		<foot></foot>
	</div>
</template>

<script>
import foot from "./foot";
export default {
	name: 'new',
	data: function() {
		return {

		}
	},
	components: {
		foot,
	}
}
</script>

<style>

</style>

