<template>
	<ul class="survey-list">
		<li v-for="li in list">
			<div class="">{{ li.title }}</div>
			<div class="">{{ li.time }}</div>
			<div class="">{{ li.status }}</div>
		</li>
	</ul>
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
  }
};
</script>

<style>
.survey-list {
  background: lightblue;
}
</style>


