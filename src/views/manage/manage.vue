<template>
	<main>
		<ul class="survey-list">
			<li>
				<el-button type="primary" @click="add">新增问卷</el-button>
			</li>
			<li v-for="li in list">
				<div class="">{{ li.title }}</div>
				<div class="">{{ li.time }}</div>
				<div class="">{{ li.status }}</div>
				<button @click="del">del</button>
			</li>
		</ul>
		<modal :dialogInfo="dialogInfo"></modal>
	</main>
</template>

<script>
import modal from "../../components/dialog";
export default {
  name: "manage",
  data: function() {
    return {
      list: [
        {
          title: "标题",
          time: "2018/9/9",
          status: "发布中"
        }
	  ],
	  dialogInfo: {
		  btnText: '确认',
		  desc: '确认要删除次问卷',
		  url: 'http//sda',
		  show: false,
	  },
    };
  },
  methods: {
	  add: function() {
		  this.$router.push('edit')
	  },
	  del() {
		  this.dialogInfo.show = true;
	  },
  },
	components: {
		modal,
  }
};
</script>

<style>
.survey-list {
  background: lightblue;
}
</style>


