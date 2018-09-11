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
			</li>
		</ul>
	</main>
</template>

<script>
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
      ]
    };
  },
  methods: {
	  add: function() {
		  this.$router.push('edit')
	  }
  },
    components: {

  }
};
</script>

<style>
.survey-list {
  background: lightblue;
}
</style>


